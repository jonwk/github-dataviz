import styled from "styled-components";
import { colors, theme, helper, media } from "../../styles";
// const { colors } = theme;

const ChartsStyles = styled.div`
${helper.flexCenter} ;
// height:fit-content;
  border-radius: 1rem;
  background: #24292e;
  box-shadow: inset -24px -24px 39px #1e2226, inset 24px 24px 39px #2a3036;
  width: 95% !important;
  height: fit-content !important;
  justify-content: center ;
  
${media.bp400`
height:fit-content;
min-height:1000px;
display: grid;
grid-template-rows: repeat(auto-fill, minmax(300px, 1fr));
grid-gap: 2rem;
justify-items: center;
  align-items: center;
`};
${media.bp600`
display: grid;
grid-template-rows: repeat(auto-fill, minmax(300px, 1fr));
grid-gap: 2rem;
justify-items: center;
`};
${media.bp900`
  margin-top: -8rem;
  max-height:50%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10%;
  justify-items: center;
`};

  .chart {

    // background-color: ${colors.white};
    // background-color: transparent;
    max-width: 500px;
    // overflow: auto;
    margin: 5% 0%;
    padding: 0 5%;
    border-radius: 0.25rem;
    box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);
    ${media.bp400`    
      padding-top: 2rem;
    `};
    ${media.bp900` 
      padding-top: 2rem;
    `};

    header {
    //   ${helper.flsexBetween};
      margins:2rem 0;
      h2 {
        background: none;
        color: rgba(200, 225, 255, 0.7);
        font-size: 1.5rem;
      }
    }
    p {
      color: ${colors.grey2};
    }
  }
  .chart-container {
    overflow:visible;
    box-shadow : 0px -0px 10000px transparent
    display: flex;
    justify-content: space-around;
  }
`;

export default ChartsStyles;
