import "../index.css"
import Check from "../assets/Check.svg"

export default function PricingSection() {
  
  return (
    <>
    <main id="Pricing" className="Pricing">
      <h6>Planos e preços</h6>
      <h1>Assine e tenha acesso ilimitado  a <span>todas as funcionalidades</span></h1>
      <section className="priceCards">
        <div className="PriceCard">
          <section className="ContentCard">
          <h2>Básico</h2>
          <p>Baixe o app e comece a cantar  <span> agora mesmo!</span></p>
          <h3>Grátis</h3>
           <button>Baixar Agora</button>
           <hr></hr>
           <section className="Features">
           <div className="FeatureCheck">
           <img src={Check}/>
           <p>Com anúncios</p>
           </div>
             <div className="FeatureCheck">
           <img src={Check}/>
           <p>Até 5 músicas por dia</p>
           </div>
             <div className="FeatureCheck">
           <img src={Check}/>
           <p>Cante apenas as músicas disponíveis no plano gratuito</p>
           </div>
           </section>
          </section>
        </div>
        

  <div className="PriceCard premium">
          <section className="ContentCard">
          <h4>1 mês grátis </h4>
          <h2>Premium</h2>
          <p>Ideal para quem já cansou de passar vergonha no Karaokê </p>
          <h3>R$ 24,90<span>/mês</span></h3>
           <button>Experimente de graça</button>
           <hr></hr>
           <section className="Features">
           <div className="FeatureCheck">
           <img src={Check}/>
           <p>Sem interrupção de anúncios</p>
           </div>
             <div className="FeatureCheck">
           <img src={Check}/>
           <p>Cante quantas músicas quiser</p>
           </div>
             <div className="FeatureCheck">
           <img src={Check}/>
           <p>Cante todas as músicas da biblioteca</p>
           </div>
           </section>
          </section>
        </div>

          <div className="PriceCard">
          <section className="ContentCard">
          <h2>Família</h2>
          <p>Para aquelas famílias que adoram se reunir pra cantar</p>
          <h3>R$ 21,90<span>/mês por pessoa</span></h3>
           <button>Assinar agora</button>
           <hr></hr>
           <section className="Features">
           <div className="FeatureCheck">
           <img src={Check}/>
           <p>Sem interrupção de anúncios</p>
           </div>
             <div className="FeatureCheck">
           <img src={Check}/>
           <p>Cante quantas músicas quiser</p>
           </div>
             <div className="FeatureCheck">
           <img src={Check}/>
           <p>Cante todas as músicas da biblioteca</p>
           </div>
           <p>Mínimo de 4 pessoas no plano família.</p>
           </section>
          </section>
         
        </div>
      </section>
    </main>
    </>
  )
}


