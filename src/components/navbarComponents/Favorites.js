import React, { useState, useContext } from 'react';
import { FavoriteContext } from '../../contextComponents/FavoriteContext';
import ActivityCardDetails from "../ActivityCardDetails";
import FavoriteButton from "./searchComponents/FavoriteButton"
import StyledActivityContainer from "../styledComponents/StyledActivityContainer"
import StyledSelectContainer from "../styledComponents/StyledSelectContainer";
import StyledInputContainer from "../styledComponents/StyledInputContainer";
import StyledGetButton from "../styledComponents/StyledGetButton";


import SliderBar from "../slidebarComponents/Sliderbar";
import { SlideValueContext } from "../../contextComponents/SlideValueContext";


export default function Favorites() {
  const [contextValues] = useContext(SlideValueContext);
  const [favorites] = useContext(FavoriteContext);

  const types = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
  const [activityType, setType] = useState("");

  const [inputParticipants, setparticipants] = useState(1);
  const clearFields = () => {
    setparticipants("");
  };

  const [searchedFavorites, setSearchedFavorites] = useState([]);

  const filterActivities = () => {
    setSearchedFavorites(favorites.filter(fav =>
      fav.price >= contextValues.min / 10000 &&
      fav.price <= contextValues.max / 10000)
    )
  }


  console.log(searchedFavorites, contextValues.min, contextValues.max)

  return favorites.length !== 0 ? (
    <div>
      <div>
        <StyledSelectContainer>Activity types:
          <select className="option" onChange={e => setType(e.target.value)}>
            <option value="">all</option>
            {types.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </StyledSelectContainer>

        <StyledInputContainer>
          Number of participants:
          <input
            className="input"
            type="text"
            value={inputParticipants}
            placeholder={inputParticipants}
            onChange={(e) => setparticipants(e.target.value)}
            onFocus={clearFields}
          />
        </StyledInputContainer>

        <SliderBar />

        <StyledGetButton onClick={filterActivities}>
          Give me an activity!
        </StyledGetButton>
      </div>

      {searchedFavorites.map((fav) => (
        <StyledActivityContainer>
          <React.Fragment>
            <FavoriteButton activity={fav} />
            <ActivityCardDetails activity={fav} />
          </React.Fragment>
        </StyledActivityContainer>)
      )}

    </div>
  ) : (
      <StyledActivityContainer>
        <div style={{ margin: "auto" }}>There are no favorites yet! <br /><br />
          Start collecting activities...
        </div>
      </StyledActivityContainer>)
}
