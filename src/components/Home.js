import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";

function randomNumber() {
  return Math.floor(Math.random() * 875) + 1;
}

export default function Home() {
  const [pokemon, setPokemon] = useState();
  const [randomPokemon, setRandomPokemon] = useState(1);
  const userContext = useContext(UserContext);

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
        .then((res) => res.json())
        .then((res) => {
          setPokemon(res);
        })
        .catch((err) => {
          console.log("Error while fetching a pokemon, err");
        });
    }, 1000);
  }, [randomPokemon]);

  const handleClick = () => {
    setRandomPokemon(randomNumber());
  };

  return userContext.isLogged ? (
    pokemon ? (
      <>
        <div>
          <h1>Home</h1>
        </div>
        <p>id : {randomPokemon}</p>
        <p>Name : {pokemon.name}</p>
        <p>Height : {pokemon.height}</p>
        <p>Weight :{pokemon.weight}</p>
        <button onClick={handleClick}>Get a new pokemon</button>
      </>
    ) : (
      <button>
        <div>Loading</div>
      </button>
    )
  ) : (
    <Link to="/login">Login</Link>
  );
}
