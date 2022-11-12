import MainTitle from "./MainTitle";
import TitleScreenModel from "./TitleScreenModel";
import './TitleScreenUpper.css'

const TitleScreenUpper = (props) => {
    return (
      <div className="title_screen__upper">
        <MainTitle name="BEER HUNTER"/>
        <TitleScreenModel />
        <p style={{marginRight: '10%'
                    , fontSize:'225%'
                    , fontFamily:'Open Sans, sans-serif',
                    marginTop:'-7%',
                    textAlign: 'center',
                    width:'auto'}}>A simplistic recommender system <br>
          </br> based on matrix factorisation</p>
      </div>
    );
}

export default TitleScreenUpper;