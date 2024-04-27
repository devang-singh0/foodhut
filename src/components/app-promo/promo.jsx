import './promo.scss'
import HeroImg from '../../imgs/Group 8484.png'
import appstore from '../../imgs/appstore.png'
import playstore from '../../imgs/playstore.png'
export default function Promo(){
    return(
        <div id="promo">
            <div className="container">
                <h2>It's Now <span>more Easy</span> to <span>Order</span> <br /> by Our Mobile <span>App</span></h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, modi. Eos, repellat iste? Fuga, voluptas natus itaque accusantium vel numquam voluptates neque.</p>
                <div>
                    <img src={appstore} alt="" />
                    <img src={playstore} alt="" />
                </div>
            </div>
            <div className="img">
                <img src={HeroImg} alt="" />
            </div>
        </div>
    )
}