import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"
const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>
                    Boost your listening experience with our premium Boat headphones
                     collection, designed to deliver unparalleled sound 
                     quality and style.
                </p>
                <div className="ctas">
                    <div className="banner-cta">readem</div>
                    <div className="banner-cta v2">shopnow</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="banner" />

        </div>

    </div>;
};

export default Banner;
