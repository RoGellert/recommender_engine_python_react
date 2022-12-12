import { useState } from "react";
import "./SingularBeer.css";

const SingularBeer = (props) => {

  const google_link = 'https://www.google.com/search?q=' + props.brewery_name + ' ' + props.beer_name

  const [isExpanded, ExpandElement] = useState(false);

  const Expand = () => {
    if (!isExpanded) {
      ExpandElement(true);
    } else {
      ExpandElement(false);
    }
  };

  if (!isExpanded) {
    return (
      <div className="singular_beer">
        <div className="row_element_first" onClick={Expand}>
          <p1 className="singular_beer_left_element">{props.top_pos + ' ' + props.rating}</p1>
          <p1 className="singular_beer_right_element">{props.beer_name}</p1>
        </div>
      </div>
    );
  } else {
    return (
        <div className="singular_beer" >
          <div className="row_element_first" onClick={Expand}>
            <p1 className="singular_beer_left_element">{props.top_pos + ' ' + props.rating}</p1>
            <p1 className="singular_beer_right_element">{props.beer_name}</p1>
          </div>
          <div className="row_element_after">
            <p1 className="singular_beer_left_element">beer style :</p1>
            <p1 className="singular_beer_right_element">{props.beer_style}</p1>
          </div>
          <div className="row_element_after">
            <p1 className="singular_beer_left_element">brewery name :</p1>
            <p1 className="singular_beer_right_element">{props.brewery_name}</p1>
          </div>
          <div className="row_element_after">
            <p1 className="singular_beer_left_element">review num :</p1>
            <p1 className="singular_beer_right_element">{props.review_num}</p1>
          </div>
          <div className="row_element_after">
            <p1 className="singular_beer_left_element">overall mean :</p1>
            <p1 className="singular_beer_right_element">{props.overall_mean}</p1>
          </div>
          <div className="row_element_after">
            <p1 className="singular_beer_left_element">appearance mean :</p1>
            <p1 className="singular_beer_right_element">{props.appearance_mean}</p1>
          </div>
          <div className="row_element_after">
            <p1 className="singular_beer_left_element">palate mean :</p1>
            <p1 className="singular_beer_right_element">{props.palate_mean}</p1>
          </div>
          <div className="row_element_after">
            <p1 className="singular_beer_left_element">taste mean :</p1>
            <p1 className="singular_beer_right_element">{props.taste_mean}</p1>
          </div>
          <div className="row_element_after">
            <p1 className="singular_beer_left_element">aroma_mean :</p1>
            <p1 className="singular_beer_right_element">{props.aroma_mean}</p1>
          </div>
          <div className="row_element_after">
            <p1 className="singular_beer_left_element">lower ci score :</p1>
            <p1 className="singular_beer_right_element">{props.overall_mean_lower}</p1>
          </div>
          <div className="row_element_after">
            <p1 className="singular_beer_left_element">beer abv :</p1>
            <p1 className="singular_beer_right_element">{props.beer_abv}</p1>
          </div>
          <div className="row_element_after">
            <p1 className="singular_beer_left_element">GOOGLE SEARCH :</p1>
            <a className="singular_beer_right_element" href={google_link} target="_blank" rel="noreferrer">CLICK ME</a>
          </div>
        </div>
      );
  }
};

export default SingularBeer;

