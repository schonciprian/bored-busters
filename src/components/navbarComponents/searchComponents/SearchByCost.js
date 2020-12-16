import React, { useContext, useState } from "react";
import axios from "axios";
import SliderBar from "../../slidebarComponents/Sliderbar";
import StyledGetButton from "../../styledComponents/StyledGetButton";
import StyledActivityContainer from "../../styledComponents/StyledActivityContainer";
import ActivityCardDetails from "../../ActivityCardDetails";


import { SlideValueContext } from "../../../contextComponents/SlideValueContext";

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
        <StyledGetButton onClick={getActivity}>
          Give me an activity!
        </StyledGetButton>
      </div>

      <StyledActivityContainer style={{ width: "800px" }}>
        {activityData.activity ? (
          <ActivityCardDetails activity={activityData} />
        ) : (
            <div>No activity was found!</div>
          )}
      </StyledActivityContainer>

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
          <StyledGetButton onClick={getActivity}>
            Give me an activity!
        </StyledGetButton>
        </div>
      </div>
    );
}
