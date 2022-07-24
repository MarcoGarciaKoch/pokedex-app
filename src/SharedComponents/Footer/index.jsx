import './style.css';



function Footer () {


    return (
        <div className='footer__container'>
            <h1>@ Marco Garcia Koch - 2022</h1>
            <div className='github-info__container'>
                <div className='github-logo'></div>
                <h1>Check the GitHub repository <a className='github-link' rel="noopener noreferrer" target="_blank" href="https://github.com/MarcoGarciaKoch/pokedex-app">here</a></h1>
            </div>
        </div>
    )
}


export default Footer;