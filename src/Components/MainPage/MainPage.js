import "./MainPage.css";
import Menu from "./Menu";
import BeerList from "./BeerList/BeerList";
import UserList from "./UserList/UserList";
import { useState } from "react";
import Recommendations from "./Recommendations/Recommendations";

const MainPage = (props) => {
  const [currentList, setCurrentList] = useState('BeerList')

  const toggleBeerList = () =>{
    setCurrentList('BeerList');
  }

  const toggleUserList = () =>{
    setCurrentList('UserList');
  }

  const toggleRecommendationList = () =>{
    setCurrentList('RecommendationList');
  }


  if (currentList==='BeerList') {
    return (
      <div>
        <div className="main_page"></div>
        <Menu toggleLandingPageOn={props.toggleLandingPageOn} 
        toggleBeerList={toggleBeerList} 
        toggleUserList={toggleUserList}
        toggleRecommendationList={toggleRecommendationList}/>
        <BeerList />
      </div>
    );
  }
  else if (currentList==='UserList') {
    return (
      <div>
        <div className="main_page"></div>
        <Menu toggleLandingPageOn={props.toggleLandingPageOn} 
        toggleBeerList={toggleBeerList} 
        toggleUserList={toggleUserList}
        toggleRecommendationList={toggleRecommendationList}/>
        <UserList />
      </div>
    );
  }
  else if (currentList==='RecommendationList') {
    return (
      <div>
        <div className="main_page"></div>
        <Menu toggleLandingPageOn={props.toggleLandingPageOn} 
        toggleBeerList={toggleBeerList} 
        toggleUserList={toggleUserList}
        toggleRecommendationList={toggleRecommendationList}/>
        <Recommendations />
      </div>
    );
  }
};

export default MainPage;
