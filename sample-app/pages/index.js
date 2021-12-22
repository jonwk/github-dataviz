import React, { useState } from "react";
import Router from "next/router";
import styled from "styled-components";
import { helper, colors, fonts } from "../styles";

const CenteredContainer = styled.div`
  ${helper.flexCenter};
  // background-color: ${colors.black};
  // background-image: linear-gradient(
  //   ${colors.lightblue} 15%,
  //   ${colors.orange} 10%,
  //   ${colors.lightgreen} 90%
  //  );
  background: #4b6cb7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #182848, #4b6cb7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #182848, #4b6cb7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  
  color: ${colors.offWhite};
  height: 100vh;

  form {
    background-color: transparent;
    border-radius: 5px;
    padding: 2rem;
    margin-bottom: 20vh;
    max-width: 600px;
    text-align: center;
    svg {
      color: ${colors.blue};
    }
    label {
      display: block;
      font-size: 2.5rem;
      font-weight: 500;
      margin: 2rem;
    }
    input {
      background-color: #26303c;
      outline: 0;
      border: 0;
      border-radius: 0.25rem;
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
      padding: 1rem;
      // color: ${colors.lightblue};
      color: ${colors.lightgreen};
      font-family: ${fonts.mono};
      font-size: 2rem;
      font-weight: 400;
      text-align: center;
    }

    .submit {
      ${helper.blueButton};
      margin-top: 3rem;
      filter: none;
    }
  }
`;

const Home = () => {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    return setUsername(e.target.value);
  };

  return (
    <main>
      <CenteredContainer>
        <form
          id="input-test"
          onSubmit={(e) => {
            e.preventDefault();
            Router.push({
              pathname: "/user",
              query: { id: username },
            });
          }}
        >
          <input
            type="text"
            id="user-name"
            placeholder="Username..."
            onChange={(e) => setUsername(e.target.value || "")}
          />
          <input type="submit" />
        </form>
      </CenteredContainer>
    </main>
  );
};

export default Home;
