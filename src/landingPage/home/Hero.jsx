import { Link } from "react-router-dom";

function Hero() {
    return ( 
        <div className="container p-5">
            <div className="row text-center">
                <img src="/assets/homeHero.png" alt="img" />
                <h1 className='mt-5'>Invest in Everything</h1>
                <p>Online platform to invest in stock derivatives mutual funds, and more</p>
                <Link><button className='p-2 btn btn-primary fs-5 mb-5' style={{margin: "0 auto", width: "20%"}} to={'/signup'}>Signup Now</button></Link>
            </div>
        </div>
     );
}

export default Hero;