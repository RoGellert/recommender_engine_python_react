import SingularBeer from "./SingularBeer";
import { useState, useEffect } from "react";
import "./BeerList.css";
// import { Canvas } from "react-three-fiber";
// import { Suspense } from 'react';
// import Beer1 from '../../3dModels/Beer1'

const BeerList = (props) => {
  const [beerArray, setBeerArray] = useState([]);
  const [number_to_return, setNumberToReturn] = useState(18);
  const [direction, setDirection] = useState("DESC");
  const [type, setType] = useState("overall_mean_lower");
  const [min_review_num, setMinReviewNum] = useState(20);


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
      {/* <div className="beer_glass">
        <Canvas orthographic camera={{ zoom: 50, position: [0, 0, 100]}}>
          <ambientLight intensity={1}/>
          <Suspense fallback={null}>
            <Beer1 scale={[15,15,15]} rotation={[1,1,0]}/>
          </Suspense>
        </Canvas>
      </div> */}
      <div className="left_menu">
        <div className="text_above_buttons">
          <li className="text_above_buttons_text">
            Sorting in {direction}ending order
            <br />
          </li>
          <li className="text_above_buttons_text">
            Taking first {number_to_return} beers
            <br />
          </li >
          <li className="text_above_buttons_text">
            Filtering by {type}
            <br />
          </li>
          <li className="text_above_buttons_text">
            Taking beers reviewed {'>'} {min_review_num} times
          </li>
        </div>
        <h2 className="input_fields_text">TOGGLE SOME VALUES:</h2>
        <div className="input_fields">
          <div className="input_field">
            <div className="input_field_text">Beers to receive :</div>
            <input
              className="input_field_number"
              value={number_to_return}
              type="number"
              onChange={changeNumToReceive}
            ></input>
          </div>
          <div className="input_field">
            <div className="input_field_text">Min num of reviews :</div>
            <input
              className="input_field_number"
              value={min_review_num}
              type="number"
              onChange={changeMinReviewNum}
            ></input>
          </div>
        </div>
        <div className="toggles_menu">
          <h2 className="toggles_element_text">SWITCH ORDER:</h2>
          <li className="toggles_element order" onClick={toggle_DIRECTION}>REVERSE ORDER</li>
          <h2 className="toggles_element_text">COLUMN TO SORT BY:</h2>
          <ul className="toggles_menu_sort">
            <li className="toggles_element sort" onClick={toggle_LOWER_CI_SORTING}>MEAN LOWER CI</li>
            <li className="toggles_element sort" onClick={toggle_REVIEW_NUM_SORTING}>REVIEW NUM</li>
            <li className="toggles_element sort" onClick={toggle_OVERALL_MEAN_SORTING}>OVERALL MEAN</li>
            <li className="toggles_element sort" onClick={toggle_APPEARANCE_MEAN_SORTING}>APPEARANCE MEAN</li>
            <li className="toggles_element sort" onClick={toggle_PALATE_MEAN_SORTING}>PALATE MEAN</li>
            <li className="toggles_element sort" onClick={toggle_TASTE_MEAN_SORTING}>TASTE MEAN</li>
            <li className="toggles_element sort" onClick={toggle_BEER_ABV_SORTING}>BEER ABV</li>
          </ul>
          <h2 className="toggles_element_text">GET BEER FROM DB:</h2>
          <li className="toggles_element refresh" onClick={FetchBeerArray}>REFRESH</li>
        </div>
      </div>
      <div className="descr_text_beers">
          <h2>Beer list</h2>
          <p>Here you can see the full list of beers</p>
          <p>Press refresh to fetch the items from the database</p>
          <p>By the default sorting by the confidence inteval lower boundary</p>
          <p>You can change the value to sort by, order of sorting, number of items to receive and minimal number of reviews to be given to an item</p>
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

