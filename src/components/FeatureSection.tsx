import "../index.css"
import MagicWandicon from "../assets/MagicWand.svg"
import Gameicon from "../assets/GameController.svg"
import Microphoneicon from "../assets/MicrophoneStage.svg"
import UserThreeicon from "../assets/UsersThree.svg"
import Musicicon from "../assets/MusicNotes.svg"
import GameCellphone from"../assets/Tela 2.png"
import ComunityCellphone from "../assets/Tela 1.png"
import MusicCellphone from "../assets/Tela 3.png"


export default function   FeatureSection() {
  return (
    <>
    <main  id="FeatureSection" className="FeatureSection">
        <div className="Cards">
            
          <div className="Card">
              <img src= {MagicWandicon}/>
              <h1>A maior biblioteca de músicas de Karaokê!</h1>
              <p>Nossa IA remove a voz de qualquer música e a deixa pronta pra cantar, num passe de mágica!</p>
          </div>
          <div className="Card">
            <section className="text-card">
              <img src= {Gameicon}/>
              <h1>Experiência gamificada</h1>
              <p>Sua performance é pontuada de acordo com nosso algoritmo ultra preciso. Desafie-se, ganhe reconhecimento e comemore sua evolução!</p>
              </section>
              <section className="card-img desktop-only">
                <div className="container-img">
                <img src={GameCellphone}/>
                </div>
              </section>
          </div>
          <div className="Card">
              <img src= {Microphoneicon}/>
              <h1>Grave suas performances</h1>
              <p>Seja para compartilhar com os amigos ou para acompanhar sua evolução, nosso recurso de gravação de áudio e vídeo permite que você aproveite a experiência ao máximo! </p>
          </div>
          </div>
          <div className="Cards">
            <div className="Card">
              <section className="text-card">
                <img src= {UserThreeicon}/>
                <h1>Compartilhe com a comunidade</h1>
                <p>Compartilhe suas gravações com a comunidade, interaja e explore a performance vocal de outras pessoas no seu feed!</p>
              </section>
                <section className="card-img desktop-only">
                  <div className="container-img">
                  <img src={ComunityCellphone}/>
                  </div>
                </section>
            </div>

            <div className="Card">
              <section className="text-card">
                <img src= {Musicicon}/>
                <h1>Letras em tempo-real</h1>
                <p>Nunca perca o ritmo com as letras das músicas sincronizadas e exibidas em tempo real. Você também pode ativar a voz original da música para ajudar.</p>
              </section>
                <section className="card-img desktop-only">
                  <div className="container-img">
                  <img src={MusicCellphone}/>
                  </div>
                </section>
            </div>
          
          </div>
        
    </main>
    </>
  )
}


