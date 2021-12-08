/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";
import UserInfoStyles from "./bsui/UserInfoStyles";

const Userinfo = ({ userData }) => {
  return (
    <div>
      <UserInfoStyles>
        <div className="avatar">
          {<img src={userData.avatar && userData.avatar_url} alt="avatar" />}
        </div>

        <h1>{userData.name}</h1>

        <h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            @{userData.login}
          </a>
        </h2>

        <div className="info">
          <span className="info_item">{userData.company}</span>
          <span className="info_item">{userData.location}</span>
          <span className="info_item">{userData.bio}</span>
        </div>
      </UserInfoStyles>
    </div>
  );
};

Userinfo.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default Userinfo;
