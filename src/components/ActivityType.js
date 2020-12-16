import React, { useState } from "react";
import axios from "axios";
import StyledGetButton from "./styledComponents/StyledGetButton";
import StyledActivityContainer from "./styledComponents/StyledActivityContainer";
import StyledSelectContainer from "./styledComponents/StyledSelectContainer";


export default function Header() {
  const types = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]

  const [activityByType, setActivityByType] = useState([]);
  const [activityType, setType] = useState([]);

  const getActivityByType = () => {
    axios
      .get(`http://www.boredapi.com/api/activity?type=${activityType}`)
      .then((response) => setActivityByType(response.data));
  };

  const { activity, type, participants, price } = activityByType;

  return activityByType.length !== 0 ? (
    <StyledActivityContainer>
      <StyledSelectContainer>Activity types:
          <select className="option" onChange={e => setType(e.target.value)}>
          {types.map((type) => (
            <option value={type}>{type}</option>
          ))}
        </select>
      </StyledSelectContainer>
      <StyledGetButton style={{ marginRight: "auto", marginLeft: "auto", minHeight: "50px" }} onClick={getActivityByType}>
        Give me an activity!
      </StyledGetButton>
      {activityByType.activity ? (<div>
        <div style={{ fontSize: "35px", height: "100px" }}>{activity}</div>
        <div>Type: {type}</div>
        {activityByType.link ? (
          <div>
            Visit: <a href={activityByType.link} target="_blank" rel="noopener noreferrer"> {activityByType.link}</a>{" "}
          </div>
        ) : ("")}
        <div>Number of participants:{participants}</div>
        <div>Price: {price * 10000}</div>
      </div>) : (<div>"No activity was found!"</div>)}
    </StyledActivityContainer>
  ) : (
      <StyledActivityContainer>
        <StyledSelectContainer>Activity types:
          <select className="option" onChange={e => setType(e.target.value)} >
            {types.map((type) => (
              <option value={type}>{type}</option>
            ))}
          </select>
        </StyledSelectContainer>
        <StyledGetButton style={{ marginRight: "auto", marginLeft: "auto", minHeight: "50px" }} onClick={getActivityByType}>
          Give me an activity!
        </StyledGetButton>
      </StyledActivityContainer>
    );
}
