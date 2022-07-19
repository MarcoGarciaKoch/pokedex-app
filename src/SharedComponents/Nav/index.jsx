import { Link, useNavigate } from 'react-router-dom';
import './style.css';


function Nav ({searchPokemon}) {

    const navigate = useNavigate();

    return (
        <nav className='nav__container'>
            <img onClick={() => navigate('/')} className='nav__logo-ball' src={require('../../assets/ultra-bola.png')} alt="Navigator logo" />
            <section className='nav-search__container'>
                <input className='pokemon-search__input' onChange={searchPokemon} type="text" name="search" id="SEARCH" placeholder='Find Your Pokemon'/>
                <Link className='nav__subscription' to='/contact'>SUSCRIPTION</Link>
            </section>
            
        </nav>
    )
}


export default Nav;