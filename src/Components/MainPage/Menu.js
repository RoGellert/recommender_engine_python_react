import "./Menu.css";

const Menu = (props) => {
  return (
    <div className="menu">
      <ul>
        <li className="menu_element" onClick={props.toggleLandingPageOn}>LANDING PAGE</li>
        <li className="menu_element" onClick={props.toggleBeerList}>BEER LIST</li>
        <li className="menu_element" onClick={props.toggleUserList}>USER LIST</li>
        <li className="menu_element" onClick={props.toggleRecommendationList}>RECOMMENDATIONS</li>
      </ul>
    </div>
  );
};

export default Menu;
