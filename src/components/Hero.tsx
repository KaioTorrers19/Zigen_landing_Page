import "../index.css"

export default function Hero() {
  const bars = Array.from({ length: 30 });
  return (
    <>

    <main  id="Hero" className="Hero">
        <div className="sound-wave">
            {bars.map((_, i) => (
          <span key={i} style={{ animationDelay: `${-i * 1}s` }}></span>
        ))}
        </div>
        <section className="text-white text-center">
        <h1 className="wave-hero-title">Quem canta seus males espanta</h1>
        <h2> Cantar nunca foi tão fácil </h2>
        </section>
        <div className="flex justify-center gap-button">
        <button className="btn-second">Ver planos</button>
        <button className="btn-primary btn-second2">Baixar agora</button>
        </div>
        
    </main>
    </>
  )
}
