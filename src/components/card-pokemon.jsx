import PokeRequest from "./poke-request"
import styles from "./card.module.css"

function Createcard() {
    return (
        <div className="Megazordiv">
            <div className={styles.CardContainer}>

                <div className={styles.PokeName}>
                <h2 id="PokeName">NOME</h2>
                </div>

                <div className={styles.PokemonImagem} id="PokemonImagem">
                    <img id="PokemonImg" src=".\src\img\Logo-Pokebola-Pokémon-PNG.png" alt="Imagem do Pokémon" />
                </div>

                <div className={styles.IdInfo}>
                <h2>ID</h2>
                <h3 id="PokeId"></h3>
                </div>

            </div>

            <div className={styles.PokeInput}>
                <label htmlFor="text">Digite o nome ou ID do Pokemon</label><br></br>
                <input id="valor" type="text" />
            </div>

            <div className={styles.BtnContainer}>
                <button id="Btn1" onClick={PokeRequest}>Procurar</button>
            </div>
        </div>
    )
}

export default Createcard