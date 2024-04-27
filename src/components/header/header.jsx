import './header.scss'
import logo from '../../imgs/logo.png'

export default function Header() {
    return (
        <header>
            <img src={logo} alt="" id="logo" />
            <nav>
                <ul>
                    <li><a href="#">Today Special Offers</a></li>
                    <li><a href="#">Why FoodHut</a></li>
                    <li><a href="#">Our Menu</a></li>
                    <li><a href="#">Our Popular Food</a></li>
                </ul>
                <button>Download App</button>
            </nav>
            <div onClick={(e)=>{document.querySelector('nav').classList.toggle('active'); document.querySelector('header>div').classList.toggle('active')}}></div>
        </header>
    )
}
