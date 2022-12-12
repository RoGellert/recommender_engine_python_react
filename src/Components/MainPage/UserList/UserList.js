import { useState, useEffect } from "react";
import SingularUser from "./SingularUser";
import './UserList.css';
import "../BeerList/BeerList.css";

const UserList = (props) => {
  const [userArray, setUserArray] = useState([]);
  const [number_to_return, setNumberToReturn] = useState(18);
  const [direction, setDirection] = useState("DESC");
  const [type, setType] = useState("review_num");
  const [min_review_num, setMinReviewNum] = useState(15);


  const FetchUserArray = () => {
    const fetchAdress =
      "http://localhost:5000/USER_TOP/" +
      number_to_return +
      "/" +
      direction +
      "/" +
      type +
      "/" +
      min_review_num;

    fetch(fetchAdress).then((res) =>
      res.json().then((data) => {
        setUserArray(data);
      })
    );
  }

  const toggle_DIRECTION = () => {
    if (direction === "DESC")
    {setDirection("ASC");}
    else
    {setDirection("DESC");};
  };

  const SetSortingReviewNum = () => {
    setType('review_num')
  };

  const SetSortingOverallMean = () => {
    setType('overall_mean')
  };

  const SetSortingAromaMean = () => {
    setType('aroma_mean')
  };

  const SetSortingAppearanceMean = () => {
    setType('appearance_mean')
  };

  const SetSortingPalateMean = () => {
    setType('palate_mean')
  };

  const SetSortingTasteMean = () => {
    setType('taste_mean')
  };

  const SetSortingBeerAbvMean = () => {
    setType('beer_abv_mean')
  };

  const alterNumberToReturn = (event) => {
    setNumberToReturn(event.target.value)
  };

  const alterMinReviewNumber = (event) => {
    setMinReviewNum(event.target.value)
  };

  useEffect(() => FetchUserArray(), []);


  return (
      <div className="user_list_margin">
          <div className="left_menu">
            <div className="text_above_buttons">
              <li className="text_above_buttons_text">
                Sorting in {direction}ending order
                <br />
              </li>
              <li className="text_above_buttons_text">
                Taking first {number_to_return} users
                <br />
              </li >
              <li className="text_above_buttons_text">
                Filtering users by {type}
                <br />
              </li>
              <li className="text_above_buttons_text">
                Taking users with {'>'} {min_review_num} reviews
              </li>
            </div>
            <h2 className="input_fields_text">TOGGLE SOME VALUES:</h2>
            <div className="input_fields">
              <div className="input_field">
                <div className="input_field_text">Users to receive :</div>
                <input
                  className="input_field_number"
                  value={number_to_return}
                  type="number"
                  onChange={alterNumberToReturn}
                ></input>
              </div>
              <div className="input_field">
                <div className="input_field_text">Min num of reviews :</div>
                <input
                  className="input_field_number"
                  value={min_review_num}
                  type="number"
                  onChange={alterMinReviewNumber}
                ></input>
              </div>
          </div>
          <div className="toggles_menu">
            <h2 className="toggles_element_text">SWITCH ORDER:</h2>
            <li className="toggles_element order" onClick={toggle_DIRECTION}>REVERSE ORDER</li>
            <h2 className="toggles_element_text">COLUMN TO SORT BY:</h2>
            <ul className="toggles_menu_sort">
              <li className="toggles_element sort" onClick={SetSortingReviewNum}>REVIEW NUM</li>
              <li className="toggles_element sort" onClick={SetSortingOverallMean}>OVERALL MEAN</li>
              <li className="toggles_element sort" onClick={SetSortingAppearanceMean}>APPEARANCE MEAN</li>
              <li className="toggles_element sort" onClick={SetSortingPalateMean}>PALATE MEAN</li>
              <li className="toggles_element sort" onClick={SetSortingAromaMean}>AROMA MEAN</li>
              <li className="toggles_element sort" onClick={SetSortingTasteMean}>TASTE MEAN</li>
              <li className="toggles_element sort" onClick={SetSortingBeerAbvMean}>BEER ABV MEAN</li>
            </ul>
            <h2 className="toggles_element_text">GET BEER FROM DB:</h2>
            <li className="toggles_element refresh" onClick={FetchUserArray}>REFRESH</li>
          </div>
        </div>
        <div className="descr_text_users">
          <h2>User list</h2>
          <p>Here you can see the full list of users</p>
          <p>Press refresh to fetch the users from the database</p>
          <p>By the default sorting by the number of reviews user has given</p>
          <p>You can change the value to sort by, order of sorting, number of users to receive and minimal number of reviews user has given to an item</p>
      </div>
        <div className="user_list">
          {userArray.map((user, index) => (
            <SingularUser
              key={user.user_id}
              review_profilename={user.review_profilename}
              review_num={user.review_num}
              overall_mean={user.overall_mean}
              aroma_mean={user.aroma_mean}
              appearance_mean={user.appearance_mean}
              palate_mean={user.palate_mean}
              taste_mean={user.taste_mean}
              beer_abv_mean={user.beer_abv_mean}
              top_pos={index+1}
              on_recommendation_page={false}
            />
          ))}
        </div>
      </div>
  );
};

export default UserList;