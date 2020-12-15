import React, { useContext, useState } from "react";
import axios from "axios";
import SliderBar from "./SliderBar";
import StyledGetRandomButton from "./styledComponents/StyledGetRandomButton";
import StyledActivityContainer from "./styledComponents/StyledActivityContainer";

import { SlideValueContext } from "../contextComponents/SlideValueContext";

export default function SearchByCost() {
  const [contextValues] = useContext(SlideValueContext);
  const [activityData, setActivityData] = useState([]);
  const searchCardStyle = {
    margin: "30px",
    width: "820px",
    minHeight: "100px",
    background: "#172251",
  };

  const searchCardStyle2 = {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    top: "30px",
    left: "145px",
  };

  const searchBoxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const getActivity = () => {
    const min = contextValues.min / 10000;
    const max = contextValues.max / 10000;
    axios
      .get(
        `http://www.boredapi.com/api/activity?minprice=${min}&maxprice=${max}`
      )
      .then((response) => setActivityData(response.data));
  };

  const { activity, type, participants, price, link } = activityData;

  return activityData.length !== 0 ? (
    <div style={searchCardStyle}>
      <p
        style={{
          textAlign: "center",
          fontFamily: "Mountains of Christmas",
          fontSize: "30px",
          fontWeight: "900",
          letterSpacing: "7px",
          color: "#72CD55",
        }}
      >
        Select your price range!
      </p>
      <div style={searchCardStyle2}>
        <SliderBar />
      </div>
      <div style={searchBoxStyle}>
        <StyledGetRandomButton onClick={getActivity}>
          Give me an activity!
        </StyledGetRandomButton>
      </div>
      {activity ? (
        <StyledActivityContainer style={{ width: "800px" }}>
          <div>
            <div style={{ fontSize: "35px", height: "100px" }}>{activity}</div>

            <div>Type: {type}</div>

            {link ? (
              <div>
                Visit: <a href={link}> {link}</a>
              </div>
            ) : (
              ""
            )}

            <div>Number of participants:{participants}</div>

            <div>Price: {price * 10000}</div>
          </div>
        </StyledActivityContainer>
      ) : (
        <div>No activity was found!</div>
      )}
    </div>
  ) : (
    <div style={searchCardStyle}>
      <p
        style={{
          textAlign: "center",
          fontFamily: "Mountains of Christmas",
          fontSize: "30px",
          fontWeight: "900",
          letterSpacing: "7px",
          color: "#72CD55",
        }}
      >
        Select your price range!
      </p>
      <div style={searchCardStyle2}>
        <SliderBar />
      </div>
      <div style={searchBoxStyle}>
        <StyledGetRandomButton onClick={getActivity}>
          Give me an activity!
        </StyledGetRandomButton>
      </div>
    </div>
  );
}
