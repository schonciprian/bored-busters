import React, { useState } from "react";
import axios from "axios";

export default function Header() {
  const [randomActivity, setrandomActivity] = useState([]);

  const getRandomActivity = () => {
    axios
      .get("http://www.boredapi.com/api/activity/")
      .then((response) => setrandomActivity(response.data));
  };

  const getRandomButtonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    background: "blue",
    borderRadius: "10px",
    width: "225px",
    height: "25px",
    color: "#fff",
  };

  const { activity, type, participants, price } = randomActivity;

  return randomActivity.length !== 0 ? (
    <div>
      <div onClick={getRandomActivity} style={getRandomButtonStyle}>
        Give me a random activity!
      </div>
      <div>{activity}</div>
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
  ) : (
    <div onClick={getRandomActivity} style={getRandomButtonStyle}>
      Give me a random activity!
    </div>
  );
}
