import styled from "styled-components";
import { colors, theme, helper, media } from "../../styles";
// const { colors } = theme;

// https://codepen.io/wyarejali/pen/VwwQRQz
// const ChartsStyles = styled.div`
// ${helper.flexCenter} ;
// // height:fit-content;
//   border-radius: 1rem;
//   background: #24292e;
//   box-shadow: inset -24px -24px 39px #1e2226, inset 24px 24px 39px #2a3036;
//   width: 95% !important;
//   height: fit-content !important;
//   justify-content: center ;

// ${media.bp400`
// height:fit-content;
// min-height:1000px;
// display: grid;
// grid-template-rows: repeat(auto-fill, minmax(300px, 1fr));
// grid-gap: 2rem;
// justify-items: center;
//   align-items: center;
// `};

// ${media.bp600`
// display: grid;
// grid-template-rows: repeat(auto-fill, minmax(300px, 1fr));
// grid-gap: 2rem ;
// justify-items: center;
// `};

// ${media.bp900`
//   margin-top: -8rem;
//   max-height:50%;
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//   grid-gap: 2rem !important;
//   justify-items: center;
// `};

//   .chart {
//     background-color: ${colors.white};
//     // background-color: transparent;
//     max-width: 500px;
//     // overflow: auto;
//     margin: 5% 0%;
//     padding: 0 5%;
//     padding:1 rem;
//     border-radius: 0.25rem;
//     box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);
//     ${media.bp400`
//       padding-top: 2rem;
//     `};
//     ${media.bp900`
//       padding-top: 2rem;
//     `};

//     header {
//     //   ${helper.flexBetween};
//       margins:2rem 0;
//       h2 {
//         background: none;
//         color: rgba(200, 225, 255, 0.7);
//         font-size: 1.5rem;
//       }
//     }
//     p {
//       color: ${colors.grey2};
//     }
//   }

//   .chart-container {
//     overflow:visible;
//     box-shadow : 0px -0px 10px transparent
//     // display: flex;
//     // justify-content: space-around;
//   }
// `;

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
    border-radius: 10px;
    background: #24292e;
    box-shadow: inset -24px -24px 39px #1e2226, inset 24px 24px 39px #2a3036;
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
        font-size: 1.5rem;
        font-weight: 450;
      }
    }
    p {
      color: ${colors.grey2};
    }
  }
`;

export default ChartsStyles;
