import React, { useState } from "react";
import Router from "next/router";
import styled from "styled-components";
import { helper, colors, fonts } from "../styles";

const CenteredContainer = styled.div`
  ${helper.flexCenter};
  height: 100vh;
  background: #22262b;
  box-shadow: 35px 35px 70px #181b1f, -35px -35px 70px #2c3137;
`;

const StyledInput = styled.div`
  .td {
    display: table-cell;
    vertical-align: middle;
  }

  input,
  button {
    // color: #fff;
    color: #81e7e9;
    font-family: ${fonts.mono};
    padding: 0;
    margin: 0;
    border: 0;
    background-color: transparent;
  }

  .cover {
    position: relative;
    top: 50%;
    left: 0;
    right: 0;
    width: 550px;
    padding: 35px;
    margin: -83px auto 0 auto;
    background-color: #363d45;

    border-radius: 28px;
    background: #363d45;
    box-shadow: -25px 25px 50px #16181c, 25px -25px 50px #56626e;

    border-radius: 20px;
    // box-shadow: 0 10px 40px #363d45, 0 0 0 20px #ffffffeb;
    box-shadow: 0 10px 40px #417475, 0 0 0 20px #77d4d5;
    transform: scale(0.6);
  }

  form {
    height: 96px;
  }

  input[type="text"] {
    width: 100%;
    height: 96px;
    font-size: 60px;
    line-height: 1;
  }

  input[type="text"]::placeholder {
    color: #81e7e9;
  }

  #s-cover {
    width: 1px;
    padding-left: 35px;
  }

  button {
    position: relative;
    display: block;
    width: 84px;
    height: 96px;
    cursor: pointer;
  }

  #s-circle {
    position: relative;
    top: 0;
    left: 15px;
    width: 50px;
    height: 50px;
    margin-top: 0;
    border-width: 30px;
    border: 15px solid #81e7e9;
    background-color: transparent;
    border-radius: 50%;
    transition: 0.5s ease all;
  }

  button span {
    position: absolute;
    top: 68px;
    left: 43px;
    display: block;
    width: 45px;
    height: 15px;
    background-color: transparent;
    border-radius: 10px;
    transform: rotateZ(52deg);
    transition: 0.5s ease all;
  }

  button span:before,
  button span:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 45px;
    height: 15px;
    background-color: #81e7e9;
    border-radius: 10px;
    transform: rotateZ(0);
    transition: 0.5s ease all;
  }

  #s-cover:hover #s-circle {
    top: -1px;
    width: 67px;
    height: 15px;
    border-width: 0;
    // background-color: #d426ff;
    background-color: #77d4d5;
    border-radius: 20px;
  }

  #s-cover:hover span {
    top: 50%;
    left: 56px;
    width: 25px;
    margin-top: -9px;
    transform: rotateZ(0);
  }

  #s-cover:hover button span:before {
    bottom: 11px;
    transform: rotateZ(52deg);
  }

  #s-cover:hover button span:after {
    bottom: -11px;
    transform: rotateZ(-52deg);
  }

  #s-cover:hover button span:before,
  #s-cover:hover button span:after {
    right: -6px;
    width: 40px;
    // background-color: #d426ff;
    background-color: #77d4d5;
  }
`;

const Home = () => {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    return setUsername(e.target.value);
  };

  return (
    <main>
      <head></head>

      <CenteredContainer>
        <StyledInput>
          <div className="cover">
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
              <div class="tb">
                <div class="td">
                  <input
                    type="text"
                    id="user-name"
                    placeholder="Username..."
                    onChange={(e) => setUsername(e.target.value || "")}
                  />
                </div>
                <div class="td" id="s-cover">
                  <button type="submit" value="search">
                    <div id="s-circle"></div>
                    <span></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </StyledInput>
      </CenteredContainer>
    </main>
  );
};

export default Home;
