import TitleScreenUpper from "./TitleScreenUpper";
import './LandingPage.css'

const LandingPage = (props) => {
  return (
    <div className="landing_page">
      <TitleScreenUpper/>
      <li className="landing_page_button" onClick={props.toggleLandingPageOff}>start</li>
    </div>
  );
}

export default LandingPage;