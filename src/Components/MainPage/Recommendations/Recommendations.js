import { useState, useEffect } from "react";
import './Recommendations.css'
import SingularBeer from "../BeerList/SingularBeer";
import SingularUser from "../UserList/SingularUser";

const Recommendations = () => {
  const [reviewsArray, setReviewsArray] = useState([]);
  const [recommendationsArray, setRecommendationsArray] = useState([]);
  const [userData, setUserData] = useState([]);
  const [beer_max, setBeerMax] = useState(16);


  const FetchRecommendationsArray = () => {
    const fetchAdress =
      "http://localhost:5000/RECOMMENDATIONS/" + beer_max;

    fetch(fetchAdress).then((res) =>
      res.json().then((data) => {
        setReviewsArray(data.reviewed_beers);
        setRecommendationsArray(data.recommended_beers);
        setUserData(data.user_info);
      })
    );
  }

  useEffect(() => FetchRecommendationsArray(), []);
  console.log(recommendationsArray);

  return (
   <div className="recommendation_page">
   <div className="left_side">
   <h1>User :</h1>
   <SingularUser
            review_profilename={userData.review_profilename}
            review_num={userData.review_num}
            overall_mean={userData.overall_mean}
            aroma_mean={userData.aroma_mean}
            appearance_mean={userData.appearance_mean}
            palate_mean={userData.palate_mean}
            taste_mean={userData.appearance_mean}
            beer_abv_mean={userData.appearance_mean}
            top_pos={''}
          />
   </div>
   <div className="lists">
   <div className="reviewed_list">
   <h1>Reviewed beer {'(RATING)'}:</h1>
    {reviewsArray.map((beer, index) => (
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
        top_pos={index+1+' '+'-'}
        rating={"(" + beer.rating + ')'}
      />
    ))}
  </div>
  <div className="recommended_list">
    <h1>Recommended beers {'(PREDICTION)'}:</h1>
    {recommendationsArray.map((beer, index) => (
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
        top_pos={index+1+' '+'-'}
        rating={"(" + beer.rating + ')'}
      />
    ))}
  </div>
  </div>
  </div>
  );
};

export default Recommendations;