import React, { useState } from 'react'
import axios from "axios";


export default function Header() {

    const [randomActivity, setrandomActivity] = useState([]);

    const getRandomActivity = () => {
        axios
            .get("http://www.boredapi.com/api/activity/")
            .then((response) => setrandomActivity(response.data))
    }

    const {
        activity,
        type,
        participants,
        price
    } = randomActivity;

    return randomActivity.length !== 0 ? (
        <div>
            <div onClick={getRandomActivity}>GETRANDOM</div>

            <div>{activity}</div>
            <div>Type: {type}</div>
            <div>Number of participants:{participants}</div>
            <div>Price: {price * 10000}</div>
        </div>
    ) : (<div onClick={getRandomActivity}>GETRANDOM</div>);
}
