import "../index.css"
import Smartphones from "../assets/App mockups.png"

export default function About() {
  return (
    <>
    <main  id="About" className="About">
        <section id="smartphones-img">
            <img src={Smartphones} alt="smartphones"/>
        </section>
        <section className="About-description">
            <h6>Conheça o app</h6>
            <h1>O aplicativo perfeito para aprender a cantar</h1>
            <p>Nosso algoritmo de Inteligência Artificial permite remover a voz original e manter as melodias das músicas. Dessa forma, temos o maior repertório musical para Karaokê! Além disso, ao cantar, sua voz e afinação é comparada pelo algoritmo permitindo uma avaliação precisa da sua performance te ajudando a melhorar seu canto. </p>
        </section>
    </main>
    </>
  )
}


