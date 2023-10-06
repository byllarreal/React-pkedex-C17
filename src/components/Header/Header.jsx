import './Styles.scss'

export default function Header() {
  return (
    <div class="header">
        <div class="title">Pokedex</div>
        <div class="search">
          <input type="text" class="searchbox" />
          <button class="searchbutton">
            <i class="fas fa-search"></i>   
          </button>
        </div>        
      </div>
  )
}
