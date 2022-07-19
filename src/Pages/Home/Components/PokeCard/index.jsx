import './style.css';
import { useNavigate } from "react-router-dom";


function PokeCard ({pokemon}) {

    const navigate = useNavigate();


    return (
      <section onClick={() => navigate(`/details/${pokemon.id}`)} className='card__container'>
          <div className="name__container">
            <div className="movement__container">
                <span>{pokemon.name.toUpperCase()}</span>
            </div>
            <div className="movement__container">
                <span>{pokemon.name.toUpperCase()}</span>
            </div>
          </div>
          <img className='card__image' src={pokemon.sprites.other.home.front_default} alt={`Image of ${pokemon.name}`}/>
          <p className='navigate-to-details__text'>Click For More Details</p>
          <section className='card-details__container'>
              {pokemon.types?.map((t,i) => <p className='details-type' key={i}>{t.type.name.toUpperCase()}</p>)}
          </section>
          <p className='pokemon-id'>{pokemon.id}</p>
      </section>
    );
}



export default PokeCard;