import React, { useState, useEffect } from "react";
import { mockUserData, mockRepoData, mockLangData } from "../mock";
import PropTypes from "prop-types";
import { UserInfo, Charts } from "../UI";
import GhPolyglot from "gh-polyglot";

const User = (props) => {
  const username = props.query.id;
  console.log(`username- ${username}`);
  // const [userData, setUserData] = useState(mockUserData);

  const [userDataSt, setUserDataSt] = useState(null);
  const [langData, setLangData] = useState(null);
  const [repoData, setRepoData] = useState(null);

  const getUserData = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (res.status === 404) {
          return "ERROR 404";
        }
        if (res.status === 403) {
          return "ERROR 403";
        }
        return res.json();
      })
      .then((json) => {
        console.log(`User data - ${json}`);
        setUserDataSt(json);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  };

  const getRepoData = () => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then((res) => {
        if (res.status === 404) {
          return "ERROR 404";
        }
        if (res.status === 403) {
          return "ERROR 403";
        }
        return res.json();
      })
      .then((json) => {
        console.log(`Repo data - ${json}`);
        setRepoData(json);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  };
  const getLangData = () => {
    const user = new GhPolyglot(`${username}`);
    user.userStats((err, stats) => {
      if (err) {
        console.log(`Error: ${err}`);
      }
      setLangData(stats);
    });
  };

  useEffect(() => {
    fetch(`https://api.github.com/rate_limit`)
      .then((res) => res.json())
      .then((json) => {
        // setRateLimit(json.resources.core);
        if (json.resources.core.remaining < 1) {
          console.log(`403 Error`);
          // setError({ active: true, type: 403 });
        }
      });
    // setUserDataState(mockUserData);
    // setLangDataState(mockLangData);
    // setRepoData(mockRepoData);

    getUserData();
    getRepoData();
    getLangData();
  }, []);

  console.log(`Username - ${username}`);
  return (
    <div>
      <h1>username - {username}</h1>
      <UserInfo userData={userDataSt} />
      <Charts langData={langData} repoData={repoData} />
    </div>
  );
};

User.propTypes = {
  query: PropTypes.object,
};

export default User;
