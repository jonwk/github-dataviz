import styled from "styled-components";
import { colors, theme, helper, media } from "../../styles";

const ChartsStyles = styled.div`
  max-width: 1200px !important;
  margin-top: -8rem !important;
  //   background: #24292e;
  //   box-shadow: inset -24px -24px 39px #1e2226, inset 24px 24px 39px #2a3036;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
  justify-content: center;
  ${media.bp900`
    justify-items: center;
  `};

  .chart {
    // border-radius: 10px;
    // background: #24292e;
    // box-shadow: inset -24px -24px 39px #1e2226, inset 24px 24px 39px #2a3036;
    border-radius: 28px;
    background: linear-gradient(45deg, #1e2124, #23282b);
    box-shadow: 25px -25px 50px #1b1f21, -25px 25px 50px #272b2f;
    // background-color: ${colors.white};
    max-width: 500px;
    padding: 2rem;
    // border-radius: 0.25rem;
    // box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);
    ${media.bp400`
      width:100%;
      padding: 1rem 1rem;
    `};
    ${media.bp600`
      width:100%;
      padding: 2rem 2rem;
    `};

    header {
      ${helper.flexBetween};
      .heading {
        // color: rgba(200, 225, 255, 0.7);
        color: ${colors.grey};
        font-size: 1.7rem;
        font-weight: 450;
      }
    }
    p {
      color: ${colors.grey2};
    }
  }
`;

export default ChartsStyles;
