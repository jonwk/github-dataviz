import React, { useState, useEffect } from "react";
import { mockUserData, mockRepoData, mockLangData } from "../mock";
import PropTypes from "prop-types";
import { UserInfo, Charts } from "../UI";

const User = (props) => {
  const username = props.query.id;
  // const [userData, setUserData] = useState(mockUserData);

  const [userDataState, setUserDataState] = useState(null);
  const [langDataState, setLangDataState] = useState(null);
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    // effect
    // return () => {
    //   cleanup
    // };
    setUserDataState(mockUserData);
    setLangDataState(mockLangData);
    setRepoData(mockRepoData);
  }, []);

  console.log(`Username - ${username}`);
  return (
    <div>
      <h1>username - {username}</h1>
      <UserInfo userData={mockUserData} />
      <Charts langData={mockLangData} repoData={mockRepoData}  />
    </div>
  );
};

User.propTypes = {
  query: PropTypes.object,
};

export default User;
