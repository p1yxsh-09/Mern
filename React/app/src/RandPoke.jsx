import "./RandPoke.css"

export default function RandPoke() {
    const randNum = Math.floor(Math.random() * 151)+1;
    const pokeImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randNum}.png`;
    const pokeName = `Pokemon #${randNum}`;
    return (
        <div className="Poke">
            <h1>{poke}</h1>
            <img src={pokeImgUrl} alt={pokeName} />
        </div>
    );
}