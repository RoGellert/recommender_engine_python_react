import { useState, useEffect } from "react";
import './Recommendations.css'
import SingularBeer from "../BeerList/SingularBeer";
import SingularUser from "../UserList/SingularUser";

const Recommendations = () => {
  const [reviewsArray, setReviewsArray] = useState([]);
  const [recommendationsArray, setRecommendationsArray] = useState([]);
  const [userData, setUserData] = useState([]);
  const [number_to_receive, setNumToReceive] = useState(17);
  const [min_review_num_rec, setMinReviewNum] = useState(0);
  const [sortingColumn, setSortingColumn] = useState('rating');
  const [current_model, setCurrentModel] = useState('keras_mf_estimations');
  const [modelListExpanded, setModelListExpanded] = useState(false);
  const [userListExpanded, setUserListExpanded] = useState(false);
  const [sortListExpanded, setSortListExpanded] = useState(false);
  const [currentUser, setUser] = useState(0);
  const [currentOrder, setOrder] = useState('DESC');

  const big_reviewers_id = 
  [2028,
    865,
    1281,
    2310,
    1369,
    6048,
    3693,
    594,
    1122,
    2579,
    2183,
    1895,
    5861,
    3946,
    236]

  const small_reviewers_id = [17089,
    29201,
    29539,
    22160,
    22221,
    10192,
    21429,
    6544,
    12570,
    29853,
    21435,
    6657,
    21438,
    26310,
    9570]

  const med_reviewers_id = [
    9164,
    3401,
    11168,
    6240,
    11022,
    10347,
    5478,
    1964,
    5803,
    9788,
    6416,
    7788,
    6785,
    9142,
    5263]

  const FetchRecommendationsArray = () => {
    const fetchAdress =
      "http://localhost:5000/RECOMMENDATIONS/" + number_to_receive 
                  + "/" + current_model 
                  + "/" + currentUser 
                  + "/" + sortingColumn 
                  + "/" + currentOrder
                  + "/" + min_review_num_rec;

    fetch(fetchAdress).then((res) =>
      res.json().then((data) => {
        setReviewsArray(data.reviewed_beers);
        setRecommendationsArray(data.recommended_beers);
        setUserData(data.user_info);
      })
    );
  }

  useEffect(() => FetchRecommendationsArray(), []);

  const toggle_DIRECTION = () => {
    if (currentOrder === "DESC")
    {setOrder("ASC");}
    else
    {setOrder("DESC");};
  };

  const changeNumberToReceive = (event) => {
    setNumToReceive(event.target.value);
  }

  const changeMinReviewNum = (event) => {
    setMinReviewNum(event.target.value);
  }

  const setSortingAbv = () => {
    setSortingColumn('beer_abv');
    setSortListExpanded(false);
  }

  const setSortingReviewNum = () => {
    setSortingColumn('review_num');
    setSortListExpanded(false);
  }

  const setSortingOverall = () => {
    setSortingColumn('overall_mean');
    setSortListExpanded(false);
  }

  const setSortingAroma = () => {
    setSortingColumn('aroma_mean');
    setSortListExpanded(false);
  }

  const setSortingAppearance = () => {
    setSortingColumn('appearance_mean');
    setSortListExpanded(false);
  }

  const setSortingPalate = () => {
    setSortingColumn('palate_mean');
    setSortListExpanded(false);
  }

  const setSortingTaste = () => {
    setSortingColumn('taste_mean');
    setSortListExpanded(false);
  }

  const setSortingActual = () => {
    setSortingColumn('rating');
    setSortListExpanded(false);
  }

  const setSortingCI = () => {
    setSortingColumn('overall_mean_lower');
    setSortListExpanded(false);
  }

  const setUserLow = () => {
    const rand = Math.floor(Math.random() * 15);
    setUser(small_reviewers_id[rand]);
    setUserListExpanded(false);
  }

  const setUserMedium = () => {
    const rand = Math.floor(Math.random() * 15);
    setUser(med_reviewers_id[rand]);
    setUserListExpanded(false);
  }

  const setUserHigh = () => {
    const rand = Math.floor(Math.random() * 15);
    setUser(big_reviewers_id[rand]);
    setUserListExpanded(false);
  }

  const setUserRoman = () => {
    setUser(0);
  }

  const SetModelKeras = () => {
    setCurrentModel('keras_mf_estimations');
    setModelListExpanded(false);
  }

  const SetModelSparkAls = () => {
    setCurrentModel('predictions_spark_als');
    setModelListExpanded(false);
  }

  const SetModelSurpriseKNNBasic = () => {
    setCurrentModel('surprise_knn_basic');
    setModelListExpanded(false);
  }

  const SetModelSurpriseKNNBaseline = () => {
    setCurrentModel('surprise_knn_baseline');
    setModelListExpanded(false);
  }

  const SetModelSurpriseKNNMeans = () => {
    setCurrentModel('surprise_knn_means');
    setModelListExpanded(false);
  }

  const SetModelSurpriseKNNZ = () => {
    setCurrentModel('surprise_knn_z');
    setModelListExpanded(false);
  }

  const SetModelSurpriseMFBasic = () => {
    setCurrentModel('surprise_mf_basic');
    setModelListExpanded(false);
  }

  const SetModelSurpriseMFNN = () => {
    setCurrentModel('surprise_mf_nn');
    setModelListExpanded(false);
  }

  const SetModelSurpriseMFSVDPP = () => {
    setCurrentModel('surprise_mf_svdpp');
    setModelListExpanded(false);
  }

  const SetModelSurpriseCC = () => {
    setCurrentModel('surprise_cc');
    setModelListExpanded(false);
  }



  const ExpandModelList = () => {
    if (!modelListExpanded) {
      setModelListExpanded(true);
    } else {
      setModelListExpanded(false);
    }
  };

  const ExpandUserList = () => {
    if (!userListExpanded) {
      setUserListExpanded(true);
    } else {
      setUserListExpanded(false);
    }
  };

  const ExpandSortList = () => {
    if (!sortListExpanded) {
      setSortListExpanded(true);
    } else {
      setSortListExpanded(false);
    }
  };

  const ModelList = (props) => {
    if (!modelListExpanded) { 
      return (
      <div>
        <li className="expendable_list_buttons list_buttons_background1" onClick={ExpandModelList}>{current_model}</li>
      </div>
      )
      } else {
        return (
          <div>
            <li className="expendable_list_buttons list_buttons_background1" onClick={ExpandModelList}>{current_model}</li>
            <li className="expendable_list_buttons list_buttons_background2" onClick={SetModelKeras}>KERAS MF</li>
            <li className="expendable_list_buttons list_buttons_background2" onClick={SetModelSparkAls}>SPARK ALS</li>
            <li className="expendable_list_buttons list_buttons_background2" onClick={SetModelSurpriseKNNBasic}>SURPRISE KNN BASIC</li>
            <li className="expendable_list_buttons list_buttons_background2" onClick={SetModelSurpriseKNNBaseline}>SURPRISE KNN BASELINE</li>
            <li className="expendable_list_buttons list_buttons_background2" onClick={SetModelSurpriseKNNMeans}>SURPRISE KNN MEANS</li>
            <li className="expendable_list_buttons list_buttons_background2" onClick={SetModelSurpriseKNNZ}>SURPRISE KNN Z</li>
            <li className="expendable_list_buttons list_buttons_background2" onClick={SetModelSurpriseMFBasic}>SURPRISE MF BASIC</li>
            <li className="expendable_list_buttons list_buttons_background2" onClick={SetModelSurpriseMFNN}>SURPRISE MF NN</li>
            <li className="expendable_list_buttons list_buttons_background2" onClick={SetModelSurpriseMFSVDPP}>SURPRISE SVD++</li>
            <li className="expendable_list_buttons list_buttons_background2" onClick={SetModelSurpriseCC}>SURPRISE CC</li>
          </div>
        )
      }
  }

  const UserList = (props) => {
    if (!userListExpanded) { 
      return (
      <div>
        <li className="expendable_list_buttons list_buttons_background1" onClick={ExpandUserList}>ID to RECEIVE: {currentUser}</li>
      </div>
      )
      } else {
        return (
          <div>
            <li className="expendable_list_buttons list_buttons_background1" onClick={ExpandUserList}>ID to RECEIVE: {currentUser}</li>
            <li className="expendable_list_buttons list_buttons_background2" onClick={setUserRoman}>ROMAN GELLERT</li>
            <li className="expendable_list_buttons list_buttons_background2" onClick={setUserLow}>LOW REVIEW COUNT</li>
            <li className="expendable_list_buttons list_buttons_background2" onClick={setUserMedium}>MEDIUM REVIEW COUNT</li>
            <li className="expendable_list_buttons list_buttons_background2" onClick={setUserHigh}>HIGH REVIEW COUNT</li>
          </div>
        )
      }
  }

  const SortList = (props) => {
    if (!sortListExpanded) { 
      return (
      <div>
        <li className="expendable_list_buttons list_buttons_background1" onClick={ExpandSortList}>SORTING BY: {sortingColumn}</li>
      </div>
      )
      } else {
        return (
          <div>
            <li className="expendable_list_buttons list_buttons_background1" onClick={ExpandSortList}>SORTING BY: {sortingColumn}</li>
            <li className="expendable_list_buttons list_buttons_background2" onClick={setSortingActual}>Predicted/actual rating</li>
            <li className="expendable_list_buttons list_buttons_background2" onClick={setSortingReviewNum}>review_num</li>
            <li className="expendable_list_buttons list_buttons_background2" onClick={setSortingOverall}>Overall mean</li>
            <li className="expendable_list_buttons list_buttons_background2" onClick={setSortingAroma}>Aroma mean</li>
            <li className="expendable_list_buttons list_buttons_background2" onClick={setSortingAppearance}>Appearance mean</li>
            <li className="expendable_list_buttons list_buttons_background2" onClick={setSortingPalate}>Palate mean</li>
            <li className="expendable_list_buttons list_buttons_background2" onClick={setSortingTaste}>Taste mean</li>
            <li className="expendable_list_buttons list_buttons_background2" onClick={setSortingCI}>mean lower CI</li>
            <li className="expendable_list_buttons list_buttons_background2" onClick={setSortingAbv}>Beer abv</li>
          </div>
        )
      }
  }

  return (
   <div className="recommendation_page">
   <div className="left_side">
   <h1 className="center_text">User info:</h1>
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
            on_recommendation_page={true}
          />
    <div className="expendable_lists">
      <div className="expendable_lists_margin">
      <h1 className="center_text">Current model:</h1>
      <ModelList/>
      </div>
      <div className="expendable_lists_margin">
        <h1 className="center_text">Sorting by:</h1>
        <SortList/>
      </div>
      <div className="expendable_lists_margin">
        <h1 className="center_text">Current user:</h1>
        <UserList/>
      </div>
      <div className="expendable_lists_margin">
        <h1 className="center_text">Click to change order:</h1>
        <li className="expendable_list_buttons list_buttons_background1" onClick={toggle_DIRECTION}>Sorting in {currentOrder}</li>
      </div>
      <div className="input_fields_2">
        <div className="input_field_main">
              <h1 className="input_text">Beers to receive:</h1>
              <input
                className="input_field_number_2"
                type="number"
                value={number_to_receive}
                onChange={changeNumberToReceive}
              ></input>
        </div>
        <div className="input_field_main">
              <h1 className="input_text">Min review num:</h1>
              <input
                className="input_field_number_2"
                type="number"
                value={min_review_num_rec}
                onChange={changeMinReviewNum}
              ></input>
        </div>
      </div>
      <li className="refresh_1 expendable_lists_margin" onClick={FetchRecommendationsArray}>REFRESH</li>
    </div>
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
        top_pos={index+ 1 +' '+'-'}
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