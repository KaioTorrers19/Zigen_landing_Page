import "../index.css"


export default function Header() {
  
  return (
    <>
      <header className=" flex justify-between items-center">
        <h1>
          Zingen
        </h1>
        <div className="nav-btn gap-5 items-center">
        <ul role="list " className="desktop-only">
          <li> <span className="text-gradient"> Conheça o app </span> </li>
          <li>Funcionalidades</li>
          <li>Planos e preços</li>
        </ul>
        <button className=" btn-primary"> <a href="#">Baixar agora</a></button>
        </div>

      </header>


    </>
  )
}


