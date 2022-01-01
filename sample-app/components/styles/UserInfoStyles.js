import styled from "styled-components";
import { theme, helper, media } from "../../styles";
const { colors, fonts } = theme;

const UserInfoStyles = styled.div`
  ${helper.flexCenter};
  flex-direction: column;
  margin-bottom: 30px;
  text-align: center;

  ${media.bp600`
    padding-top: 4rem;
  `};

  .avatar {
    ${helper.flexCenter};
    margin-bottom: 1.5rem;
    border: 0.2rem solid ${colors.offWhite};
    border-radius: 100%;
    width: 150px;
    height: 150px;
    img {
      border-radius: 100%;
    }
    border-radius: 50%;
    background: linear-gradient(145deg, #1e2226, #2a3036);
    box-shadow: 22px 22px 28px #1e2226, -22px -22px 28px #2a3036;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: ${colors.offWhite};
    ${media.bp400`
      font-size: 2rem;
    `};
  }
  h2 {
    font-family: ${fonts.mono};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    a {
      color: ${colors.lightgreen};
    }
  }
  h3 {
    color: ${colors.lightblue};
  }

  a {
    color: ${colors.lightestBlue};
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  .info {
    ${helper.flexCenter};
    ${media.bp600`
      display: block;
    `};
    padding: 0.6rem;
    border-radius: 10px;
    background: #24292e;
    box-shadow: inset -24px -24px 39px #1e2226, inset 24px 24px 39px #2a3036;

    &__item {
      ${helper.flexCenter};
      color: ${colors.offWhite};
      margin: 0 1rem 0.5rem;
      white-space: nowrap;
      svg {
        margin-right: 5px;
      }
    }
  }

  .icon {
    color: transparent;
  }
  .stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 150px));
    grid-gap: 0.5rem;
    justify-content: center;
    margin-top: 2rem;

    &__item {
      ${helper.flexCenter};
      flex-direction: column;
      background-color: ${colors.darkGrey};
      padding: 1rem;
      border-radius: 10px;
      background: #24292e;
      box-shadow: inset -24px -24px 39px #1e2226, inset 24px 24px 39px #2a3036;
      text-align: center;
      ${media.bp400`
        padding: 1rem 0.5rem;
      `};

      .num {
        color: ${colors.offWhite};
        font-size: 1.5rem;
        ${media.bp400`
          font-size: 1rem;
        `};
      }
      .num-label {
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 1px;
        margin-top: 0.75rem;
        color: rgba(200, 225, 255, 0.7);
        ${media.bp400`
          font-size: 0.5rem;
        `};
      }
    }
  }
`;

export default UserInfoStyles;
