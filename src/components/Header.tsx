import "../index.css"


export default function Header() {
  
  return (
    <>
      <header className=" flex justify-between items-center" id="Header">
        <h1>
          <a href="#Header">
          Zingen
          </a>
        </h1>
        <div className="nav-btn gap-5 items-center">
        <ul role="list " className="desktop-only">
          <li> <span className="text-gradient">
            <a href="#About"> Conheça o app</a> </span> </li>
          <li> <a href="#FeatureSection"> Funcionalidades</a></li>
          <li> < a href="#Pricing">Planos e preços</a></li>
        </ul>
        <button className=" btn-primary"> <a href="#Download">Baixar agora</a></button>
        </div>

      </header>


    </>
  )
}


