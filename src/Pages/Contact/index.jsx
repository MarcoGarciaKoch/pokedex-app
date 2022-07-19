// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import Nav from '../../SharedComponents/Nav/index.jsx'
import Footer from '../../SharedComponents/Footer/index.jsx';



function Contact () {

    const navigate = useNavigate();

    return (
        <>
        <Nav></Nav>
        <main className='contact-page__container'>
        <h1 className='contact-form__title'>Register To Get More Info About Your Pokemons</h1>
        <div className='logo-form__container'>
            <img className='pokeball-image' src={require('../../assets/pokeball.png')} alt="Navigator logo" />
            <form className='form__container' method="POST" action="https://formsubmit.co/marcogarciakoch@gmail.com">
                <div className='input__container'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="Name" id="name" required placeholder='Write Your Name'/>
                </div>
                <div className='input__container'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='Email' id='email' required placeholder='Write Your Email'/>
                </div>
                <input type="hidden" name="_subject" value="New submission!"/>
                <input type="hidden" name="_cc" value="marcogarciakoch@gmail.com"/>
                <input type="hidden" name="_captcha" value="false"/>
                <button className='submit-button'>Submit</button>
            </form>
        </div>
        </main>
        <Footer></Footer>
        </>
    )
}


export default Contact;