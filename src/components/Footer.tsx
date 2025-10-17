import "../index.css"

import TikTok from "../assets/ic_baseline-tiktok.svg"
import Instagram from "../assets/mdi_instagram.svg"
import Twitter from "../assets/ri_twitter-x-fill.svg"
import Discord from "../assets/ic_baseline-discord.svg"

export default function DownloadSection() {
  
  return (
    <>
      <main id="Footer" className="Footer" >
        <section className="About-Zigen">
            <div className="Footer-logo">
                <h1> <a href="#Header"> Zingen</a></h1>
            </div>
            <div className="About-container">
                <h6>Produto</h6>
                <p>Funcionalidades</p>
                <p>Planos e preços</p>
                <p>Download</p>
            </div>
              <div className="About-container">
                <h6>Empresa</h6>
                <p>Sobre nós</p>
                <p>Trabalhe conosco</p>
                <p>Blog</p>
            </div>
            <div className="About-container">
                <h6>Legal</h6>
                <p>Termos de uso</p>
                <p>Política de privacidade</p>
            </div>
        </section>
        <section className="footer-social-media">
            <div className="Img-Social_Media">
                <img src={TikTok} alt="logo Tiktok" />
                <img src={Instagram} alt="logo Instagram" />
                <img src={Twitter} alt="logo Twitter" />
                <img src={Discord} alt="logo Discord" />
                 
            </div>
            <p>©2025 Zingen Technologies, Inc.</p>
        </section>
      </main>


    </>
  )
}


