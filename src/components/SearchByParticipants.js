import React, { useState } from "react";
import axios from "axios";
import StyledGetButton from "./styledComponents/StyledGetButton";
import StyledActivityContainer from "./styledComponents/StyledActivityContainer";
import StyledInputContainer from "./styledComponents/StyledInputContainer";

export default function SearchByParticipants() {
  const [participantsActivity, setparticipantsActivity] = useState([]);
  const [inputParticipants, setparticipants] = useState([]);

  const getParticipantsActivity = () => {
    axios
      .get(
        `http://www.boredapi.com/api/activity?participants=${inputParticipants}`
      )
      .then((response) => setparticipantsActivity(response.data));
  };

  const clearFields = () => {
    setparticipants("");
  };

  const { activity, type, participants, price } = participantsActivity;

  return participantsActivity.length !== 0 ? (
    <StyledActivityContainer>
      <StyledInputContainer>
        Participants number:
        <input
          className="input"
          type="text"
          value={inputParticipants}
          placeholder={inputParticipants}
          onChange={(e) => setparticipants(e.target.value)}
          onFocus={clearFields}
        />
      </StyledInputContainer>

      <StyledGetButton
        style={{ marginRight: "auto", marginLeft: "auto", minHeight: "50px" }}
        onClick={getParticipantsActivity}
      >
        Give me the activity!
      </StyledGetButton>

      {participantsActivity.activity ? (
        <div>
          <div style={{ fontSize: "35px", height: "100px" }}>{activity}</div>

          <div>Type: {type}</div>

          {participantsActivity.link ? (
            <div>
              Visit:{" "}
              <a
                href={participantsActivity.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                {participantsActivity.link}
              </a>{" "}
            </div>
          ) : (
            ""
          )}

          <div>Number of participants:{participants}</div>

          <div>Price: {price * 10000}</div>
        </div>
      ) : (
        <div style={{ margin: "20px auto" }}>No activity was found!</div>
      )}
    </StyledActivityContainer>
  ) : (
    <StyledActivityContainer>
      <StyledInputContainer>
        Participants number:
        <input
          className="input"
          type="text"
          value={inputParticipants}
          placeholder={inputParticipants}
          onChange={(e) => setparticipants(e.target.value)}
          onFocus={clearFields}
        />
      </StyledInputContainer>

      <StyledGetButton
        style={{ marginRight: "auto", marginLeft: "auto", minHeight: "50px" }}
        onClick={getParticipantsActivity}
      >
        Give me the activity!
      </StyledGetButton>
    </StyledActivityContainer>
  );
}
