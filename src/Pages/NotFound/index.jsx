import './style.css';
import { useNavigate } from 'react-router-dom';
import Nav from '../../SharedComponents/Nav/index.jsx'
import Footer from '../../SharedComponents/Footer/index.jsx';


function NotFound () {

    const navigate = useNavigate();

    return (
        <>
            <Nav></Nav>
            <main className='page-not-found__container'>
                <h1 className='page-not-found__text'>This is not the web page you are looking for...</h1>
                <img className='page-not-found__image' src="https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season23/season23_ep28_ss01.png" alt="page-not-found-image" />
            </main>
            <Footer></Footer>
        </>
    )
}


export default NotFound;