import './service.scss'
import Img from '../../imgs/img.png'
import icon1 from '../../imgs/img1.png'
import icon2 from '../../imgs/img2.png'
import icon3 from '../../imgs/img3.png'
export default function Service() {
    return (
        <div id="service">
            <div className="img">
                <img src="" alt="" />
            </div>
            <div className="content">
                <h2>We are <span>more</span> than <br /> <span>multiple</span> service</h2>
                <p>Lorem ipsum unde quia soluta accusamus ab quos iusto exercitationem deleniti amet eius voluptatem. Ad consectetur fugit perspiciatis quibusdam non magnam obcaecati voluptatem accusamus, officiis repellat ullam consequuntur totam aliquam assumenda natus! Similique, repellat!</p>
                <div className="services">
                    <Smalldiv icon={icon2} name={'Online Order'}></Smalldiv>
                    <Smalldiv icon={icon1} name={'24/7 Service'}></Smalldiv>
                    <Smalldiv icon={icon3} name={'Organized Foodhut Place'}></Smalldiv>
                    <Smalldiv icon={icon1} name={'Pre-reservation'}></Smalldiv>
                    <Smalldiv icon={icon3} name={'Super Chef'}></Smalldiv>
                    <Smalldiv icon={icon2} name={'Clean Kitchen'}></Smalldiv>
                </div>
                <button>About Us</button>
            </div>
        </div>
    )
}

function Smalldiv(data) {
    return (
        <div>
            <img src={data.icon} alt="" />
            <p>{data.name}</p>
        </div>
    )
}