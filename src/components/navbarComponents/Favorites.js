import React, { useContext } from 'react';
import { FavoriteContext } from '../../contextComponents/FavoriteContext';
import ActivityCardDetails from "../ActivityCardDetails";
import FavoriteButton from "./searchComponents/FavoriteButton"
import StyledActivityContainer from "../styledComponents/StyledActivityContainer"

export default function Favorites() {

  const [favorites] = useContext(FavoriteContext);

  return favorites.length !== 0 ? (
    <div>
      <div>
        <h1>helo search things</h1>
      </div>

      {favorites.map((fav) => (
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
