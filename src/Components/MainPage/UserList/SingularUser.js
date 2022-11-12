import { useState } from "react";
import "./SingularUser.css";

const SingularUser = (props) => {
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
      <div className="singular_user">
        <div className="row_element_first" onClick={Expand}>
          <p1 className="singular_user_left_element">{props.top_pos}</p1>
          <p1 className="singular_user_right_element">{props.review_profilename}</p1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="singular_user">
        <div className="row_element_first" onClick={Expand}>
          <p1 className="singular_user_left_element">{props.top_pos}</p1>
          <p1 className="singular_user_right_element">{props.review_profilename}</p1>
        </div>
        <div className="row_element_after">
          <p1 className="singular_user_left_element">REVIEW NUM</p1>
          <p1 className="singular_user_right_element">{props.review_num}</p1>
        </div>
        <div className="row_element_after">
          <p1 className="singular_user_left_element">overall mean</p1>
          <p1 className="singular_user_right_element">{props.overall_mean}</p1>
        </div>
        <div className="row_element_after">
          <p1 className="singular_user_left_element">aroma mean</p1>
          <p1 className="singular_user_right_element">{props.aroma_mean}</p1>
        </div>
        <div className="row_element_after">
          <p1 className="singular_user_left_element">appearance mean</p1>
          <p1 className="singular_user_right_element">{props.appearance_mean}</p1>
        </div>
        <div className="row_element_after">
          <p1 className="singular_user_left_element">palate mean</p1>
          <p1 className="singular_user_right_element">{props.palate_mean}</p1>
        </div>
        <div className="row_element_after">
          <p1 className="singular_user_left_element">taste mean</p1>
          <p1 className="singular_user_right_element">{props.taste_mean}</p1>
        </div>
        <div className="row_element_after">
          <p1 className="singular_user_left_element">taste mean</p1>
          <p1 className="singular_user_right_element">{props.taste_mean}</p1>
        </div>
        <div className="row_element_after">
          <p1 className="singular_user_left_element">beer abv mean</p1>
          <p1 className="singular_user_right_element">{props.beer_abv_mean}</p1>
        </div>
      </div>
      );
  }
};

export default SingularUser;