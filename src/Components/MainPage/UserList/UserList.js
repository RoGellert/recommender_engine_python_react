import { useState, useEffect } from "react";
import SingularUser from "./SingularUser";
import './UserList.css'

const UserList = (props) => {
  const [userArray, setBeerArray] = useState([]);
  const [number_to_return, setNumberToReturn] = useState(17);
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
        setBeerArray(data);
      })
    );
  }

  const toggle_DIRECTION = () => {
    if (direction === "DESC")
    {setDirection("ASC");}
    else
    {setDirection("DESC");};
  };

  useEffect(() => FetchUserArray(), []);

  return (
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
            taste_mean={user.appearance_mean}
            beer_abv_mean={user.appearance_mean}
            top_pos={index+1}
          />
        ))}
      </div>
  );
};

export default UserList;