import React, { useState } from "react";
import axios from "axios";
import StyledGetButton from "./styledComponents/StyledGetButton";
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
      <StyledGetButton
        style={{ marginRight: "auto", marginLeft: "auto", minHeight: "50px" }}
        onClick={getRandomActivity}
      >
        Give me a random activity!
      </StyledGetButton>

      <div>
        <div style={{ fontSize: "35px", height: "100px" }}>{activity}</div>

        <div>Type: {type}</div>

        {randomActivity.link ? (
          <div>
            Visit: <a href={randomActivity.link}> {randomActivity.link}</a>{" "}
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
