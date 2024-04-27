import './menu.scss'
import { Card } from '../special/special'
import Food1img from '../../imgs/food1.jpg'
import Food2img from '../../imgs/food2.jpg'
import Food3img from '../../imgs/food3.jpg'
import Food4img from '../../imgs/food4.jpg'
export default function Menu() {
    return (
        <div id="menu">
            <h2><span>Menu</span> that you will <span>love</span></h2>
            <p>Lorem, ipsum dolor sit amet consectetur iste explicabo ipsam, magni amet incidunt impedit, tempora minima atque aspernatur! Eius pariatur culpa recusandae. A deleniti debitis accusamus ab. Laboriosam.</p>
            
            <div className="header">
                <span className='active'>All items</span>
                <span>Burger</span>
                <span>Pizza</span>
                <span>Veg</span>
                <span>Non Veg</span>
            </div>
            <div className="container">
                <Card img={Food2img} name={'chicken tikka'} price={'29$'} rating={'4.0'}></Card>
                <Card img={Food1img} name={'kebab'} price={'19$'} rating={'4.5'}></Card>
                <Card img={Food4img} name={'pizza'} price={'15$'} rating={'4.9'}></Card>
                <Card img={Food2img} name={'chicken tikka'} price={'29$'} rating={'4.0'}></Card>
                <Card img={Food4img} name={'pizza'} price={'15$'} rating={'4.9'}></Card>
                <Card img={Food3img} name={'burger'} price={'10$'} rating={'4.2'}></Card>
                <Card img={Food4img} name={'pizza'} price={'15$'} rating={'4.9'}></Card>
                <Card img={Food3img} name={'burger'} price={'10$'} rating={'4.2'}></Card>
            </div>
        </div>
    )
}