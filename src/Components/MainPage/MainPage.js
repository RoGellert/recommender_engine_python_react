import "./MainPage.css";
import Menu from "./Menu";
import BeerList from "./BeerList/BeerList";

const MainPage = (props) => {
  return (
    <div>
      <div className="main_page"></div>
      <Menu toggleLandingPageOn={props.toggleLandingPageOn} />
      <BeerList />
    </div>
  );
};

export default MainPage;
