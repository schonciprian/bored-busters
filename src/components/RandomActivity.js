import React, { useState, useContext } from "react";
import axios from "axios";
import StyledGetButton from "./styledComponents/StyledGetButton";
import StyledActivityContainer from "./styledComponents/StyledActivityContainer";
import {FavoriteContext} from '../contexts/FavoriteContext';
import { FaHeart } from 'react-icons/fa';
import StyledFavButton from './styledComponents/StyledFavButton';


export default function Header() {
  const [randomActivity, setrandomActivity] = useState([]);
  const [favorites, setFavorites] = useContext(FavoriteContext);


  const addFavoriteActivity = () => {

      setFavorites([...favorites,randomActivity]);
      console.log(favorites);
      
  }


  const getRandomActivity= ()=>{
    axios
      .get("http://www.boredapi.com/api/activity/")
      .then((response) => setrandomActivity(response.data));

  }

  const { activity, type, participants, price } = randomActivity;

  return randomActivity.length !== 0 ? (
    <StyledActivityContainer>
      <StyledGetButton
        style={{ marginRight: "auto", marginLeft: "auto", minHeight: "50px" }}
        onClick={getRandomActivity}
      
        Give me a random activity!
      </StyledGetButton> 
      <StyledFavButton style = {{ marginRight: "auto", marginLeft: "auto", minHeight: "50px"}} onClick={addFavoriteActivity}>
        <div><FaHeart style={{height: "80px", width: "80px"}}/></div>
      </StyledFavButton>
      
      <div>
        <div style={{ fontSize: "35px", height: "100px" }}>{activity}</div>

        <div>Type: {type}</div>

        {randomActivity.link ? (
          <div>
            Visit: <a href={randomActivity.link} target="_blank" rel="noopener noreferrer"> {randomActivity.link}</a>{" "}
          </div>
        ) : (
          ""
        )}

        <div>Number of participants:{participants}</div>

        <div>Price: {price * 10000}</div>
        </div>
        
        
    </StyledActivityContainer>
  ) : (
    <StyledActivityContainer>
      <StyledGetButton
        style={{ marginRight: "auto", marginLeft: "auto", minHeight: "50px" }}
        onClick={getRandomActivity}
      >
        Give me a random activity!
      </StyledGetButton>
    </StyledActivityContainer>
  );
}
