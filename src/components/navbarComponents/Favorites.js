import React, { useContext } from 'react';
import { FavoriteContext } from '../../contextComponents/FavoriteContext';
import ActivityCardDetails from "../ActivityCardDetails";
import FavoriteButton from "./searchComponents/FavoriteButton"
import StyledActivityContainer from "../styledComponents/StyledActivityContainer"

export default function Favorites() {

  const [favorites] = useContext(FavoriteContext);

  return favorites.map((fav) => (
    <StyledActivityContainer style={{ width: "650px" }}>
      <React.Fragment>
        <FavoriteButton activity={fav} />
        <ActivityCardDetails activity={fav} />
      </React.Fragment>
    </StyledActivityContainer>)
  )
}
