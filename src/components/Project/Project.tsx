import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import snapQuoteIcon from "../../assets/SnapQuoteGT.jpg";
import aiHomeProIcon from "../../assets/aihomepro-icon.png";
import blackTreeIcon from "../../assets/blacktree-icon.png";
import crediOneIcon from "../../assets/credione-icon.png";
import wantlystIcon from "../../assets/wantlyst-icon.png";
import androidIcon from "../../assets/android-icon.svg";
import iosIcon from "../../assets/ios-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        {/* SnapQuoteGT */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <img src={snapQuoteIcon} alt="SnapQuoteGT" className="app-icon" />
              <div className="project-links">
                <a href="https://play.google.com/store/apps/details?id=com.snapquotegt" target="_blank" rel="noreferrer" title="Google Play">
                  <img src={androidIcon} alt="Android" className="store-icon" />
                </a>
                <a href="https://apps.apple.com/pk/app/snapquotegt/id6757408018" target="_blank" rel="noreferrer" title="App Store">
                  <img src={iosIcon} alt="iOS" className="store-icon" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SnapQuoteGT</h3>
              <p>
                A React Native procurement management app that enables contractors to create RFQs, receive supplier quotes, compare bids side-by-side across building sectors, and manage their supplier network end-to-end on iOS and Android.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>Redux Toolkit</li>
                <li>TanStack Query</li>
                <li>React Navigation</li>
                <li>Formik & Yup</li>
                <li>Google Places API</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* AI Home Pro */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <img src={aiHomeProIcon} alt="AI Home Pro" className="app-icon app-icon--white" />
              <div className="project-links">
                <a href="https://play.google.com/store/apps/details?id=com.aihomepro" target="_blank" rel="noreferrer" title="Google Play">
                  <img src={androidIcon} alt="Android" className="store-icon" />
                </a>
                <a href="https://apps.apple.com/us/app/ai-home-pro/id6748644264" target="_blank" rel="noreferrer" title="App Store">
                  <img src={iosIcon} alt="iOS" className="store-icon" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>AI Home Pro — Smart Home Assistant</h3>
              <p>
                A React Native app that lets homeowners diagnose and fix household issues (HVAC, plumbing, electrical, appliances) by submitting a photo and description to an AI assistant powered by OpenAI GPT-4o Vision via Firebase Cloud Functions. Users can escalate to a live expert, save solutions, and access subscription-based repair guides.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>Firebase</li>
                <li>OpenAI GPT-4o</li>
                <li>Redux</li>
                <li>RevenueCat</li>
                <li>GiftedChat</li>
                <li>AdMob</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* BlackTree */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <img src={blackTreeIcon} alt="BlackTree" className="app-icon app-icon--white" />
            </header>
            <div className="body">
              <h3>BlackTree — Educational App</h3>
              <p>
                A cross-platform educational app built with React Native, Firebase, and TypeScript, featuring real-time data sync, in-app purchases, and secure payment integration via Stripe. Designed to deliver a smooth and scalable learning experience on both iOS and Android.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>TypeScript</li>
                <li>Firebase</li>
                <li>Firebase Functions</li>
                <li>Stripe</li>
                <li>In-App Purchase</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* CrediOne */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <img src={crediOneIcon} alt="CrediOne" className="app-icon app-icon--white" />
              <div className="project-links">
                <span className="badge-ongoing">⚡ Ongoing</span>
              </div>
            </header>
            <div className="body">
              <h3>CrediOne — Mobile Lending App</h3>
              <p>
                A React Native mobile lending app enabling users to apply for loans, track repayments, manage profiles and bank accounts, and receive real-time notifications. Features secure auth (Google & Apple Sign-In), encrypted storage, multi-language support, and live chat.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>TypeScript</li>
                <li>Redux Toolkit</li>
                <li>React Query</li>
                <li>Stripe</li>
                <li>Firebase FCM</li>
                <li>Google Sign-In</li>
                <li>Apple Auth</li>
                <li>i18next</li>
                <li>Notifee</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Wantlyst */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <img src={wantlystIcon} alt="Wantlyst" className="app-icon" />
              <div className="project-links">
                <span className="badge-ongoing">⚡ Ongoing</span>
              </div>
            </header>
            <div className="body">
              <h3>Wantlyst — Shopping Wishlist App</h3>
              <p>
                A cross-platform React Native shopping wishlist app featuring social collaboration, real-time chat, product discovery, Firebase notifications, and native Android/iOS share extensions. Built with a Redux + React Query data layer for seamless performance.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>TypeScript</li>
                <li>Redux</li>
                <li>React Query</li>
                <li>Firebase FCM</li>
                <li>React Navigation</li>
                <li>Axios</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}
