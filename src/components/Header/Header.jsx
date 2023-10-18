import './Styles.scss'

export default function Header() {
  return (
    <div className="header">
        <div className="title">Pokedex</div>
        <div className="search">
          <input type="text" className="searchbox" />
          <button className="searchbutton">
            <i className="fas fa-search"></i>   
          </button>
        </div>        
      </div>
  )
}
