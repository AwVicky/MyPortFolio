import { Container } from "./styles";
import reactNativeIcon from "../../assets/react-native-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import firebaseIcon from "../../assets/firebase-icon.svg";
import reduxIcon from "../../assets/redux-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import mongoIcon from "../../assets/mongo-icon.svg";
import expressIcon from "../../assets/express-icon.svg";
import androidIcon from "../../assets/android-icon.svg";
import iosIcon from "../../assets/ios-icon.svg";
import gitIcon from "../../assets/git-icon.svg";
import stripeIcon from "../../assets/stripe-icon.svg";
import supabaseIcon from "../../assets/supabase-icon.svg";
import revenuecatIcon from "../../assets/revenuecat-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            I'm a React Native Developer with 2+ years of experience building
            scalable, high-performance mobile applications using React Native,
            JavaScript, and modern mobile development practices. I specialize in
            creating intuitive, responsive user interfaces, integrating RESTful
            APIs, and implementing third-party services such as Firebase, push
            notifications, and authentication systems. I have hands-on
            experience developing apps for both Android and iOS, ensuring smooth
            performance, clean architecture, and a consistent user experience
            across platforms.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.3 * 1000}
        ></ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <div className="skill-card">
                <img src={reactNativeIcon} alt="React Native" />
                <span>React Native</span>
              </div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <div className="skill-card">
                <img src={reactIcon} alt="React" />
                <span>React JS</span>
              </div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <div className="skill-card">
                <img src={jsIcon} alt="JavaScript" />
                <span>JavaScript</span>
              </div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <div className="skill-card">
                <img src={typescriptIcon} alt="TypeScript" />
                <span>TypeScript</span>
              </div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.22 * 1000}>
              <div className="skill-card">
                <img src={reduxIcon} alt="Redux" />
                <span>Redux</span>
              </div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.25 * 1000}>
              <div className="skill-card">
                <img src={firebaseIcon} alt="Firebase" />
                <span>Firebase</span>
              </div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.28 * 1000}>
              <div className="skill-card">
                <img src={androidIcon} alt="Android" />
                <span>Android</span>
              </div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.31 * 1000}>
              <div className="skill-card">
                <img src={iosIcon} alt="iOS" />
                <span>iOS</span>
              </div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.34 * 1000}>
              <div className="skill-card">
                <img src={nodeIcon} alt="Node.js" />
                <span>Node.js</span>
              </div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.37 * 1000}>
              <div className="skill-card">
                <img src={expressIcon} alt="Express" />
                <span>Express</span>
              </div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.40 * 1000}>
              <div className="skill-card">
                <img src={mongoIcon} alt="MongoDB" />
                <span>MongoDB</span>
              </div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.43 * 1000}>
              <div className="skill-card">
                <img src={stripeIcon} alt="Stripe" />
                <span>Stripe</span>
              </div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.46 * 1000}>
              <div className="skill-card">
                <img src={gitIcon} alt="Git" />
                <span>Git</span>
              </div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.49 * 1000}>
              <div className="skill-card">
                <img src={supabaseIcon} alt="Supabase" />
                <span>Supabase</span>
              </div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.52 * 1000}>
              <div className="skill-card">
                <img src={revenuecatIcon} alt="RevenueCat" />
                <span>RevenueCat</span>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        {/* <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={Vicky} alt="Vicky" />
        </ScrollAnimation> */}
      </div>
    </Container>
  );
}
