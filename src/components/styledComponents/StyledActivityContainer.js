import styled from "styled-components";

export default styled.div`
    width: 820px;
    min-height: 440px;
    margin: 20px;

    font-family: 'Mountains of Christmas';
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 7px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: center; */

    cursor: pointer;
    border-radius: 10px;
   
    background: #172251;
    color: #72CD55;

    div {
        margin: 25px 15px 10px 15px;
    }

    a {
      color: #F7B900;
      text-decoration: none;
      font-size: 15px;
    }

    a:hover {
      color: #FACF3E;
    }
`;
