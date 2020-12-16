import React, { useContext } from 'react';
import { FavoriteContext } from '../../contextComponents/FavoriteContext';
// import StyledFavCards from '../styledComponents/StyledFavCards';
// import { FaHeart } from 'react-icons/fa';
// import StyledFavButton from '../styledComponents/StyledFavButton';
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
    </StyledActivityContainer>

    // <StyledFavCards>

    //   <div style={{ fontSize: "35px", height: "100px" }}>{fav.activity}</div>

    //   <div>Type: {fav.type}</div>

    //   {fav.link ? (
    //     <div>
    //       Visit: <a href={fav.link}> {fav.link}</a>{" "}
    //     </div>
    //   ) : ("")}

    //   <div>Number of participants:{fav.participants}</div>

    //   <div>Price: {fav.price * 10000}</div>

    //   <StyledFavButton style={{ marginRight: "auto", marginLeft: "auto", minHeight: "50px" }} >
    //     <div><FaHeart style={{ height: "40px", width: "40px" }} /></div>
    //   </StyledFavButton>
    // </StyledFavCards>


  )
  )
}
