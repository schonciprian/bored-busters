import React, { useState } from "react";
import axios from "axios";
import StyledGetRandomButton from "./styledComponents/StyledGetRandomButton";
import StyledActivityContainer from "./styledComponents/StyledActivityContainer";

export default function Header() {
  const [randomActivity, setrandomActivity] = useState([]);

  const getRandomActivity = () => {
    axios
      .get("http://www.boredapi.com/api/activity/")
      .then((response) => setrandomActivity(response.data));
  };

  const { activity, type, participants, price } = randomActivity;

  return randomActivity.length !== 0 ? (
    <StyledActivityContainer>
      <StyledGetRandomButton style={{ marginRight: "auto", marginLeft: "auto", minHeight: "50px" }} onClick={getRandomActivity}>
        Give me a random activity!
      </StyledGetRandomButton>

      <div>
        <div style={{ fontSize: "35px", height: "100px" }}>{activity}</div>

        <div>Type: {type}</div>

        {randomActivity.link ? (
          <div>
            Visit: <a href={randomActivity.link} target="_blank" rel="noopener noreferrer"> {randomActivity.link}</a>{" "}
          </div>
        ) : ("")}

        <div>Number of participants:{participants}</div>

        <div>Price: {price * 10000}</div>
      </div>
    </StyledActivityContainer>
  ) : (
      <StyledActivityContainer>
        <StyledGetRandomButton style={{ marginRight: "auto", marginLeft: "auto", minHeight: "50px" }} onClick={getRandomActivity}>
          Give me a random activity!
        </StyledGetRandomButton>
      </StyledActivityContainer>
    );
}
