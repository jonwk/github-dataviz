import React, { useState, useEffect } from "react";
import { mockUserData, mockRepoData, mockLangData } from "../mock";
import PropTypes from "prop-types";
import { UserInfo } from "../UI";

const User = (props) => {
  const username = props.query.id;
  // const [userData, setUserData] = useState(mockUserData);

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
  return (
    <div>
      <h1>username - {username}</h1>
      <UserInfo userData={mockUserData} />
    </div>
  );
};

User.propTypes = {
  query: PropTypes.object,
};

export default User;
