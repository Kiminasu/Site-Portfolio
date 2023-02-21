import PokeRequest from "./poke-request"
import styles from "./card.module.css"

function Createcard() {
    return (
        <div className="Megazordiv">
            <div className={styles.CardContainer}>

                <div id="Pokemon">
                <h2 id="PokeName"></h2>
                </div>

                <div id="PokemonImagem">
                    <img id="PokemonImg" src="" alt="Imagem do Pokémon" />
                </div>

                <div id="IdInfo">
                <h2>ID</h2>
                <h3 id="PokeId"></h3>
                </div>

            </div>

            <div className="BtnContainer">
                <button id="Btn1" onClick={PokeRequest}>Procurar</button>
            </div>
        </div>
    )
}

export default Createcard