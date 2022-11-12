import './User.css'

const User = (props) => {

    return (
      <div className="user_element">
        <h2 className="user_title">Roman</h2>
        <ul>
          <li className="horizontal_list_element">Id: {1} ||</li>
          <li className="horizontal_list_element">Profile name: {1} ||</li>
          <li className="horizontal_list_element">Review num: {1} ||</li>
          <li className="horizontal_list_element">Overall rating mean: {1} ||</li>
          <li className="horizontal_list_element">Aroma rating mean: {1} ||</li>
          <li className="horizontal_list_element">Appearance rating mean: {1} ||</li>
          <li className="horizontal_list_element">Palate rating mean: {1} ||</li>
          <li className="horizontal_list_element">Taste rating mean: {1} ||</li>
          <li className="horizontal_list_element">Beer abv mean: {1}</li>
        </ul>
      </div>
    );
  }


export default User;
