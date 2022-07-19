import './style.css';
import PokeCard from '../PokeCard';
import Nav from '../../../../SharedComponents/Nav'
import Footer from '../../../../SharedComponents/Footer/index.jsx';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';


function PokeList () {

    const [pokeList, updatedPokeList] = useState([]);
    const [filteredPokemons, updatedFilteredPokemons] = useState([]);
    const [lastName, updateLastName] = useState('');
    const [lastType, updateLastType] = useState('All');
    const [nextUrl, updateNextUrl] = useState('');
    const [sortedPokemon, updateSortedPokemon] = useState([]);

    useEffect( () => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(r => r.json())
        .then(d => {
            updateNextUrl(d.next);
            const arrFetch = d.results.map(p => {
              return  fetch(p.url)
                      .then(r => r.json()) 
            })
            Promise.allSettled(arrFetch)
                .then(f => {
                    let arrs = f.map(d => d.value)
                    updatedPokeList(arrs);
                    updatedFilteredPokemons(arrs);
                })
        })
    }, []);


    const fetchMoreData = () => { 
        fetch(nextUrl)
        .then(r => r.json())
        .then(d => {
            updateNextUrl(d.next);
            let arrFetch = d.results.map(p => {
               return fetch(p.url)
                .then(r => r.json()) 
            })
            Promise.allSettled(arrFetch)
                .then(f => {
                    let arrs = f.map(d => d.value)
                    updatedPokeList([...pokeList,...arrs]);
                    filterPokemon(lastName,lastType);
                    sortPokemon(sortedPokemon);
                })
        });
    }

    const filterByName = e => {
        const value = e.target.value.toLowerCase();
        filterPokemon(value, lastType);
        updateLastName(value);
    }

    const filterByType = e => {
        filterPokemon(lastName, e.target.value);
        updateLastType(e.target.value);
    }

    const filterPokemon = (name, type) => {
        //filter by name
        let filteredArray = pokeList.filter(p => p.name.toLowerCase().includes(name))
        //filter by type
        filteredArray = type === 'All'
                        ? filteredArray
                        : filteredArray.filter(p => p.types?.some(t => t.type.name === type));

        updatedFilteredPokemons(filteredArray);
        sortPokemon(sortedPokemon);
    }

    const sortInOrderFilter = e => {
        sortPokemon(e.target.value);
        updateSortedPokemon(e.target.value)
    }

    const sortPokemon = value => {
        let sortFn;
        switch(value) {
            case 'high': sortFn = (a,b) => b.id-a.id; break;
            default: sortFn = (a,b) => a.id-b.id;
        }
        updatedFilteredPokemons(prevPokemon => prevPokemon.sort(sortFn));
    }


    return (
        <>
        <Nav searchPokemon={filterByName}></Nav>
        <main>
            <section onChange={sortInOrderFilter} className='order-select__container'>
                <select className='order-select' name="pokemonSort" id="SORT">
                <option value="default">Sort by:</option>
                <option value="low">Id: Low to High</option>
                <option value="high">Id: High to Low</option>
                </select>
            </section>
            <section className='main-logo__container'>
                <img className='main-logo' src={require('../../../../assets/pokemon.png')} alt="Navigator logo" />   
            </section>  
            <section className='filter__container' onChange={filterByType}>
                <div>
                    <label htmlFor="poison">Poison</label>
                    <input id="poison" type='radio' name='type' value='poison'></input>
                </div>
                <div>
                    <label htmlFor="fire">Fire</label>
                    <input id="fire" type='radio' name='type' value='fire'></input>
                </div>
                <div>
                    <label htmlFor="water">Water</label>
                    <input id="water" type='radio' name='type' value='water'></input>
                </div>
                <div>
                    <label htmlFor="all">All</label>
                    <input id="all" type='radio' name='type' value='All' defaultChecked></input>
                </div>
            </section>
            <section className='poke-list__container'>
            { 
                pokeList.length === 0 
                ? <p>Loading previous</p>
                : <InfiniteScroll
                    className='infinite-scroll'
                    dataLength={pokeList.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                    {filteredPokemons.map((p,i) => <PokeCard key={i} pokemon={p}></PokeCard>)}
                </InfiniteScroll>
            }
            </section>
        </main>
        <Footer></Footer>
        </>
    )
}


export default PokeList;