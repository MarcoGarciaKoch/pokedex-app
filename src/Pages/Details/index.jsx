import './style.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../../SharedComponents/Nav/index.jsx';
import Footer from '../../SharedComponents/Footer/index.jsx';


function Details () {
    const {id} = useParams(); // params = {id: 'valor en la URL'}
    const [pokemon, updatePokemon] = useState({});

    useEffect( () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(r => r.json())
        .then(p => updatePokemon(p))
    }, [id]);

    return (
        <>
        <Nav></Nav>
        <main className='pokemon-detailPage__container'>
            <div className='name-container'>
            <img className='insignia__logo' src={require('../../assets/insignia.png')} alt="Navigator logo" />
            <h1 className='pokemon-name'>{pokemon.name}</h1>
            </div>
            <main className='main-info__container'>
                <section className='pokemon-image'>
                    <img src={pokemon.sprites?.other['official-artwork'].front_default} alt=""></img>
                </section>
                <div className='data__container'>
                    <section className='pokemon-details'>
                        <div>
                            <p>ID</p>
                            <p>{`# ${pokemon.id}`}</p>
                        </div>
                        <div>
                            <p>Height</p>
                            <p>{`${pokemon.height/10} m`}</p>
                        </div>
                        <div>
                            <p>Weight</p>
                            <p>{`${pokemon.weight} kg`}</p>
                        </div>
                        <div>
                            <p>Abilities</p>
                            {pokemon.abilities?.map((a,i) => <p className='ability-type' key={i}>{a.ability.name.toUpperCase()}</p>)}
                        </div>
                        <div>
                            <p>Type</p>
                            {pokemon.types?.map((t,i) => <p className='details-type' key={i}>{t.type.name.toUpperCase()}</p>)}
                        </div>
                    </section>
                    <section className='pokemon-powers'>
                        <div>
                            <p>HP</p>
                            {pokemon.stats?.map((s,i) => s.stat.name === 'hp' ? <p className='power-score' key={i}>{s.base_stat}</p> : '')}
                        </div>
                        <div>
                            <p>Attack</p>
                            {pokemon.stats?.map((s,i) => s.stat.name === 'attack' ? <p className='power-score' key={i}>{s.base_stat}</p> : '')}
                        </div>
                        <div>
                            <p>Defense</p>
                            {pokemon.stats?.map((s,i) => s.stat.name === 'defense' ? <p className='power-score' key={i}>{s.base_stat}</p> : '')}
                        </div>
                        <div>
                            <p>Special Attack</p>
                            {pokemon.stats?.map((s,i) => s.stat.name === 'special-attack' ? <p className='power-score' key={i}>{s.base_stat}</p> : '')}
                        </div>
                        <div>
                            <p>Special Defense</p>
                            {pokemon.stats?.map((s,i) => s.stat.name === 'special-defense' ? <p className='power-score' key={i}>{s.base_stat}</p> : '')}
                        </div>
                        <div>
                            <p>Speed</p>
                            {pokemon.stats?.map((s,i) => s.stat.name === 'speed' ? <p className='power-score' key={i}>{s.base_stat}</p> : '')}
                        </div>
                    </section>
                </div>
            </main>
        </main>
        <Footer></Footer>
        </>
    )
}


export default Details;