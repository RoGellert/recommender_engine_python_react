import "./Menu.css";

const Menu = (props) => {
  return (
    <div className="menu">
      <ul>
        <li className="menu_element" onClick={props.toggleLandingPageOn}>LANDING PAGE</li>
        <li className="menu_element">BEER LIST</li>
        <li className="menu_element">USER LIST</li>
        <li className="menu_element">RECOMMENDATIONS</li>
      </ul>
    </div>
  );
};

export default Menu;
