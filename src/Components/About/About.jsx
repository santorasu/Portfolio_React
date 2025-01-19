import './About.css';
// import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/rasu.png';
const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                {/* <img src={theme_pattern} alt="" /> */}
            </div>

            <div className="about-section">
                <div className="about-left">
                     <img src={profile_img} alt="Profile" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                         <p>Hello! Im Md. Rashedul Islam, an enthusiastic app developer from Bangladesh with expertise in Flutter, Dart, Python, React, and JavaScript. My journey in software development is fueled by a passion for creating innovative and user-friendly applications.</p>
                         <p>I am currently pursuing my B.Sc in Computer Science and Engineering at Daffodil International University (2021-2025). Over the years, I have gained hands-on experience by working on projects such as BanglaTravels and Food Buzz, which highlight my ability to turn ideas into impactful solutions. I thrive on learning and collaborating to solve real-world challenges through technology.</p>
                    </div>

                    <div className="about-skills">
                        <div className="about-skill">
                            <div className="skill-item">
                                <p>Flutter & Dart</p>
                                <hr style={{ width: "80%" }} />
                            </div>
                            <div className="skill-item">
                                <p>Python</p>
                                <hr style={{ width: "75%" }} />
                            </div>
                            <div className="skill-item">
                                <p>React & JavaScript</p>
                                <hr style={{ width: "70%" }} />
                            </div>
                            <div className="skill-item">
                                <p>Node.js & Express.js</p>
                                <hr style={{ width: "65%" }} />
                            </div>
                            <div className="skill-item">
                                <p>Firebase</p>
                                <hr style={{ width: "60%" }} />
                            </div>
                            <div className="skill-item">
                                <p>C & C++</p>
                                <hr style={{ width: "85%" }} />
                            </div>
                        </div>
                    </div>

                    <div className="about-achievements">
                        <div className="about-achievement">
                            <h1>2+</h1>
                            <p>Years of Experience</p>
                        </div> <hr />
                        <div className="about-achievement">
                            <h1>20+</h1>
                            <p>Project Completed</p>
                        </div> <hr />

                        <div className="about-achievement">
                            <h1>15+</h1>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;