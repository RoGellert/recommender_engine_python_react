import SingularBeer from "./SingularBeer";
import { useState, useEffect } from "react";
import "./BeerList.css";

const BeerList = (props) => {
  const [beerArray, setBeerArray] = useState([]);
  const [number_to_return, setNumberToReturn] = useState(17);
  const [direction, setDirection] = useState("DESC");
  const [type, setType] = useState("overall_mean_lower");
  const [min_review_num, setMinReviewNum] = useState(15);


  const FetchBeerArray = () => {
    const fetchAdress =
      "http://localhost:5000/BEER_TOP/" +
      number_to_return +
      "/" +
      direction +
      "/" +
      type +
      "/" +
      min_review_num;

    fetch(fetchAdress).then((res) =>
      res.json().then((data) => {
        setBeerArray(data);
      })
    );
  }

  const changeNumToReceive = (event) => {
    setNumberToReturn(event.target.value);
  };

  const changeMinReviewNum = (event) => {
    setMinReviewNum(event.target.value);
  };

  const toggle_LOWER_CI_SORTING = () => {
    setType("overall_mean_lower");
  };

  const toggle_OVERALL_MEAN_SORTING = () => {
    setType("overall_mean");
  };

  const toggle_REVIEW_NUM_SORTING = () => {
    setType("review_num");
  };

  const toggle_APPEARANCE_MEAN_SORTING = () => {
    setType("appearance_mean");
  };

  const toggle_PALATE_MEAN_SORTING = () => {
    setType("palate_mean");
  };

  const toggle_TASTE_MEAN_SORTING = () => {
    setType("taste_mean");
  };

  const toggle_BEER_ABV_SORTING = () => {
    setType("beer_abv");
  };



  const toggle_DIRECTION = () => {
    if (direction === "DESC")
    {setDirection("ASC");}
    else
    {setDirection("DESC");};
  };

  useEffect(() => FetchBeerArray(), []);

  return (
    <div>
      <div className="right_side">
        <div className="right_side_text">
        <h2>BEER LIST</h2>
        <p>Here you can see and sort all the beers available in the database
          <br/> Click refresh to rerender the beer list
          <br/>By default sorted by lower boudry of the confidence interval 
          <br/>with respect to overall_mean</p>
          <li className="right_side_button" onClick={FetchBeerArray}>REFRESH</li>
        </div>
      </div>
      <div className="left_toggles_menu">
        <div className="num_switch">
          <h3>Number of beers to receive</h3>
          <input
            className="num_input"
            value={number_to_return}
            type="number"
            onChange={changeNumToReceive}
          ></input>
        </div>
        <div className="review_num_switch">
          <h3>Minimum number of reviews</h3>
          <input
            className="review_num_input"
            value={min_review_num}
            type="number"
            onChange={changeMinReviewNum}
          ></input>
        </div>
        <div className="text_above_buttons">
          <h3>
            Sorting in {direction}ending order
            <br />
          </h3>
          <h3>
            Taking first {number_to_return} beers
            <br />
          </h3>
          <h3>
            Filtering by {type}
            <br />
          </h3>
          <h3>
            Taking beers reviewed {'>'} {min_review_num} times
          </h3>
        </div>
        <div className="toggles">
          <ul>
            <li className="toggles_element" onClick={toggle_DIRECTION}>CHANGE ORDER</li>
            <h3 className="toggles_element_text">COLUMN TO SORT BY:</h3>
            <li className="toggles_element" onClick={toggle_LOWER_CI_SORTING}>MEAN LOWER CI</li>
            <li className="toggles_element" onClick={toggle_REVIEW_NUM_SORTING}>REVIEW NUM</li>
            <li className="toggles_element" onClick={toggle_OVERALL_MEAN_SORTING}>OVERALL MEAN</li>
            <li className="toggles_element" onClick={toggle_APPEARANCE_MEAN_SORTING}>APPEARANCE MEAN</li>
            <li className="toggles_element" onClick={toggle_PALATE_MEAN_SORTING}>PALATE MEAN</li>
            <li className="toggles_element" onClick={toggle_TASTE_MEAN_SORTING}>TASTE MEAN</li>
            <li className="toggles_element" onClick={toggle_BEER_ABV_SORTING}>BEER ABV</li>
          </ul>
          {/* <li className="beer_fetch" onClick={FetchBeerArray}>{'GET BEER (FETCH FROM DB)'}</li> */}
        </div>
      </div>
      <div className="beer_list">
        {beerArray.map((beer, index) => (
          <SingularBeer
            key={beer.beer_id}
            beer_id={beer.beer_id}
            review_num={beer.review_num}
            overall_mean={beer.overall_mean}
            aroma_mean={beer.aroma_mean}
            appearance_mean={beer.appearance_mean}
            palate_mean={beer.palate_mean}
            taste_mean={beer.taste_mean}
            overall_mean_lower={beer.overall_mean_lower}
            brewery_name={beer.brewery_name.slice(0, 35)}
            beer_name={beer.beer_name.slice(0, 35)}
            beer_style={beer.beer_style.slice(0, 35)}
            beer_abv={beer.beer_abv}
            top_pos={index+1}
            rating={""}
          />
        ))}
      </div>
    </div>
  );
};

export default BeerList;
