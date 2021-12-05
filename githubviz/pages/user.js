import React, { useState, useEffect } from "react";
import { mockUserData } from "../mock/mockUserData";
import { mockRepoData } from "../mock/mockRepoData";
import { mockLangData } from "../mock/mockLangData";
import PropTypes from "prop-types";

const User = (props) => {
  const username = props.query.id;
  const [userData, setUserData] = useState(null);
  const [langData, setLangData] = useState(null);
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    // effect
    // return () => {
    //   cleanup
    // };
    setUserData(mockUserData);
    setLangData(mockLangData);
    setRepoData(mockRepoData);
  }, []);

  console.log(`Username - ${username}`);
  return <h1>The username is {username}</h1>;
};

User.propTypes = {
  query: PropTypes.object,
};

export default User;
