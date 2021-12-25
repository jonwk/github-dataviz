import styled from "styled-components";
import { colors, theme, helper, media } from "../../styles";
// const { colors } = theme;

const ChartsStyles = styled.div`
  border-radius: 1rem;
  background: #24292e;
  box-shadow: inset -24px -24px 39px #1e2226, inset 24px 24px 39px #2a3036;
  width: 1200px !important;
  margin-top: -8rem !important;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
  justify-content: center;
  ${media.bp900`
  justify-items: center;
`};
  ${media.bp400`
      margin-top: -8rem auto;
    `};

  .chart {
    // background-color: ${colors.white};
    // background-color: transparent;
    max-width: 500px;
    padding: 2rem;
    border-radius: 0.25rem;
    box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);
    ${media.bp400`
      padding: 2rem 1rem;
    `};

    header {
      ${helper.flexBetween};
      h2 {
        background: none;
        color: rgba(200, 225, 255, 0.7);
        // font-size: 1.5rem;
      }
    }
    p {
      color: ${colors.grey2};
    }
  }
  .chart-container {
    overflow: auto;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-around;
  }
`;

export default ChartsStyles;
