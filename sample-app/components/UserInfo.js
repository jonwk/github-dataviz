import React from "react";
import PropTypes from "prop-types";
// import Octicon, { Briefcase, Calendar, Location } from '@primer/octicons-react';
// const feather = require("feather-icons");
import UserInfoStyles from "./styles/UserInfoStyles";
import { Section } from "../styles";
import { Briefcase, Calendar, MapPin } from "react-feather";
import { theme } from "../styles";
const { colors } = theme;

const UserInfo = ({ userData }) => (
  <Section dark>
    {userData && (
      <UserInfoStyles>
        {userData.avatar_url && (
          <div className="avatar">
            <img src={userData.avatar_url} alt="avatar" />
          </div>
        )}

        {userData.name && <h1>{userData.name}</h1>}

        {userData.login && (
          <h2>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{userData.login}
            </a>
          </h2>
        )}

        <div className="info">
          {userData.company && (
            <span className="info__item">
              {/* <Octicon icon={Briefcase} size="small" /> */}
              <Briefcase
                className="icon"
                color={colors.grey}
                size={27.5}
                strokeWidth="1.6px"
              />
              {userData.company}
            </span>
          )}

          {userData.location && (
            <span className="info__item">
              {/* <Octicon icon={Location} size="small" /> */}
              <MapPin
                className="icon"
                color={colors.grey}
                size={27.5}
                strokeWidth="1.6px"
              />
              {userData.location}
            </span>
          )}

          {userData.created_at && (
            <span className="info__item">
              {/* <Octicon icon={Calendar} size="small" /> */}
              <Calendar
                className="icon"
                color={colors.grey}
                size={27.5}
                strokeWidth="1.6px"
              />
              Joined{" "}
              {new Date(userData.created_at).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          )}
        </div>

        <div className="stats">
          <div className="stats__item">
            <span className="num">
              {userData.public_repos.toLocaleString()}
            </span>
            <span className="num-label">Repositories</span>
          </div>
          <div className="stats__item">
            <span className="num">{userData.followers.toLocaleString()}</span>
            <span className="num-label">Followers</span>
          </div>
          <div className="stats__item">
            <span className="num">{userData.following.toLocaleString()}</span>
            <span className="num-label">Following</span>
          </div>
        </div>
      </UserInfoStyles>
    )}
  </Section>
);

UserInfo.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default UserInfo;
