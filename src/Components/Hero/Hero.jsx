
import './Hero.css'
import profile_img from '../../assets/rasu.png'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I am Rashedul,</span> Flutter App Developer in Bangladesh</h1>
            <p>
                I am a professional Flutter App Developer. I have been working in this field for 2 years. I have developed many apps for my clients. I am very passionate about my work. I always try to provide the best service to my clients. I am very friendly and I always try to maintain a good relationship with my clients.
            </p>
            <div className="hero-action">
                <div className="hero-connect">Connect With Me</div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    );
};

export default Hero;