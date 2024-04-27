import Food1img from '../../imgs/food1.jpg'
import Food2img from '../../imgs/food2.jpg'
import Food3img from '../../imgs/food3.jpg'
import Food4img from '../../imgs/food4.jpg'
import './special.scss'
export default function Special() {
    return (
        <div id="special">
            <h2>Today <span>Special</span> Offer</h2>
            <p>Lorem, ipsum dolor sit amet consectetur iste explicabo ipsam, magni amet incidunt impedit, tempora minima atque aspernatur! Eius pariatur culpa recusandae. A deleniti debitis accusamus ab. Laboriosam.</p>
            <div className="container">
                <Card img={Food1img} name={'kebab'} price={'19$'} rating={'4.5'}></Card>
                <Card img={Food2img} name={'chicken tikka'} price={'29$'} rating={'4.0'}></Card>
                <Card img={Food3img} name={'burger'} price={'10$'} rating={'4.2'}></Card>
                <Card img={Food4img} name={'pizza'} price={'15$'} rating={'4.9'}></Card>
            </div>
        </div>
    )
}
export function Card(data){
    return(
        <div className="card">
                    <div className="imgBox"><img src={data.img} alt="" /><p>{data.price}</p></div>
                    <div className="review">
                        <div className="imgDiv">
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                        <p>({data.rating})</p>
                    </div>
                    <h3>{data.name}</h3>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorum laboriosam quisquam!</h4>
                    <button>Order Now</button>
                </div>
    )
}