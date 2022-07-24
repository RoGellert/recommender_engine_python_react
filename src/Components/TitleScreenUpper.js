import MainTitle from "./MainTitle";
import Bot from "./Bot";
import './TitleScreenUpper.css'

const TitleScreenUpper = () => {
    return (
      <div className="title_screen__upper">
        <MainTitle />
        <Bot />
      </div>
    );
}

export default TitleScreenUpper;