import "../index.css"

import AppStore from "../assets/AppStore.svg"
import GooglePlay from "../assets/GooglePlay.svg"
import GuyListeningMusic from "../assets/rapaz-ouvindo-musica-com-fones-de-ouvido-e-cantando-no-aplicativo-de-karaoke-removebg 1.png"

export default function DownloadSection() {
  
  return (
    <>
      <main id="Download" className="Download" >
        <div className="Card-Download-Container">
            <section className="Text-Download">
                <h6>Download</h6>
                <h2>Bora cantar?</h2>
                <p>Desperte seu potencial de estrela, liberte sua voz e faça parte da comunidade musical mais envolvente. Baixe o Zingen agora e transforme suas performances em experiências inesquecíveis!</p>
            </section>
            <section className="Images-Download" >
                <div className="Download-Stores-container">
                    <img src={AppStore} alt="App Store"/>
                    <img src={GooglePlay} alt="Google Play"/>
                </div>
                <div className="Guy-listening-Msc">
                    <img src={GuyListeningMusic} alt="Homem ouvindo musica"/>
                </div>
            </section>
        </div>
      </main>


    </>
  )
}


