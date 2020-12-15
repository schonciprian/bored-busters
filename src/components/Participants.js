import React, { useState } from "react";
import axios from "axios";
import StyledGetRandomButton from "./styledComponents/StyledGetRandomButton";
import StyledActivityContainer from "./styledComponents/StyledActivityContainer";

export default function Header() {
    const [participantsActivity, setparticipantsActivity] = useState([]);
    const [inputParticipants, setparticipants] = useState([3]);

    const getRandomActivity = () => {
        axios
            .get(`http://www.boredapi.com/api/activity?participants=${inputParticipants}`)
            .then((response) => setparticipantsActivity(response.data));
    };

    const { activity, type, participants, price } = participantsActivity;

    return participantsActivity.length !== 0 ? (
        <StyledActivityContainer>

            <div>
                <input
                    type="text"
                    value={inputParticipants}
                    onChange={e => setparticipants(e.target.value)}
                />
            </div>

            <StyledGetRandomButton style={{ marginRight: "auto", marginLeft: "auto", minHeight: "50px" }} onClick={getRandomActivity}>
                Give me a random activity!
            </StyledGetRandomButton>

            <div>
                <div style={{ fontSize: "35px", height: "100px" }}>{activity}</div>

                <div>Type: {type}</div>

                {participantsActivity.link ? (
                    <div>
                        Visit: <a href={participantsActivity.link} target="_blank" rel="noopener noreferrer"> {participantsActivity.link}</a>{" "}
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
