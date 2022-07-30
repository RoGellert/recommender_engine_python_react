import MainTitle from "./MainTitle";
import TitleScreenModel from "./TitleScreenModel";
import './TitleScreenUpper.css'

const TitleScreenUpper = () => {
    return (
      <div className="title_screen__upper">
        <MainTitle />
        <TitleScreenModel />
      </div>
    );
}

export default TitleScreenUpper;