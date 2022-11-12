import LandingPage from "./Components/LandingPage/LandingPage";
import { useState, useEffect } from "react";
import MainPage from "./Components/MainPage/MainPage";

const App = () => {
  console.log("a");

  const [landingPageToggle, toggleLandingPage] = useState(true);

  const toggleLandingPageOff = () => {
    toggleLandingPage(false);
  }

  const toggleLandingPageOn = () => {
    toggleLandingPage(true);
  }


  if (landingPageToggle) {
    return (
      <div className="app">
        <LandingPage toggleLandingPageOff={toggleLandingPageOff}/> 
      </div>
    );
  } else {
    return (
      <div className="app">
        <MainPage toggleLandingPageOn={toggleLandingPageOn}/>
      </div>
    );
  }
};

export default App;

{
  /* <palette>
<color name='User-Interface-1' rgb='D4D0CD' r='212' g='207' b='205' />
<color name='User-Interface-2' rgb='30302F' r='47' g='47' b='47' />
<color name='User-Interface-3' rgb='171716' r='23' g='23' b='21' />
<color name='User-Interface-4' rgb='000000' r='0' g='0' b='0' />
<color name='User-Interface-5' rgb='DF5A00' r='223' g='89' b='0' />
</palette> */
}
