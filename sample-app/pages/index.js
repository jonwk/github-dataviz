import React, { useState } from "react";
import Router from "next/router";
import styled from "styled-components";
import { helper, colors, fonts } from "../styles";


const CenteredContainer = styled.div`
  ${helper.flexCenter};
  // background-color: ${colors.black};
  // background-image: linear-gradient(
  //   ${colors.lightblue} 15%,
  //   ${colors.orange} 10%,
  //   ${colors.lightgreen} 90%
  //  );

  // background: #4b6cb7;  /* fallback for old browsers */
  // background: -webkit-linear-gradient(to top, #182848, #4b6cb7);  /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(to top, #182848, #4b6cb7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  background: #67b26f; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #4ca2cd,
    #67b26f
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #4ca2cd,
    #67b26f
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: ${colors.offWhite};
  height: 100vh;

  form {
    background-color: transparent;
    border-radius: 5px;
    padding: 2rem;
    margin-bottom: 20vh;
    max-width: 600px;
    text-align: center;
    svg {
      color: ${colors.blue};
    }
    // label {
    //   display: block;
    //   font-size: 2.5rem;
    //   font-weight: 500;
    //   margin: 2rem;
    // }
    input {
      background-color: #26303c;
      outline: 0;
      border: 0;
      display: inline-block;
      border-radius: 0.25rem;
      width: 76%;
      max-width: 500px;
      margin: 0 auto;
      padding: 1rem;
      color: ${colors.lightgreen};
      font-family: ${fonts.mono};
      font-size: 2rem;
      font-weight: 400;
      text-align: center;
    }

    button[type="submit"] {
      background-color: #26303c;
      width: 10%;
      min-width: 50px;
      max-width: 500px;
      color: ${colors.lightgreen};
      // color: #5dad94;
      font-size: 2rem;
      font-weight: 400;
      height: 4.5rem;
      max-height: 250px;
      margin: 0 0.775px;
      filter: none;
      border: 0 none;
      cursor: pointer;
      -webkit-border-radius: 5px;
      border-radius: 5px;
    }
  }

  .search-container button:hover {
    opacity: 0.875;
    color: #f0f;
    // color: #51a5be;
    // color:${colors.lightblue};
  }
`;

const Home = () => {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    return setUsername(e.target.value);
  };

  return (
    <main>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>

        <CenteredContainer>
          <div className="search-container">
            <form
              id="input-test"
              onSubmit={(e) => {
                e.preventDefault();
                Router.push({
                  pathname: "/user",
                  query: { id: username },
                });
              }}
            >
              <input
                type="text"
                id="user-name"
                placeholder="Username..."
                onChange={(e) => setUsername(e.target.value || "")}
              />
              <button type="submit" value="search">
                <i className="fa fa-search" />
              </button>
            </form>
          </div>
        </CenteredContainer>

    </main>
  );
};

export default Home;

// <div class="m-4 p-4 f4 color-shadow-small bg-gray-800-mktg rounded-2 signup-content-container">
//       <h1 class="sr-only">Welcome to GitHub! Let's begin the adventure</h1>
//       <typing-effect data-lines="[&quot;Welcome to GitHub!&quot;, &quot;Let’s begin the adventure&quot;]" data-continue-to="email-container" class="js-signup-typed-welcome">
//         <span data-target="typing-effect.content" class="text-mono text-gray-mktg">Welcome to GitHub!<br>Let’s begin the adventure</span>
//         <span data-target="typing-effect.cursor" class="typing-effect-cursor" hidden="">|</span>
//       </typing-effect>

//     <noscript>
//       <div class="my-4 text-mono color-fg-attention">
//         GitHub requires JavaScript enabled to sign up for our captcha. Please enable JavaScript.
//       </div>
//     </noscript>

//     <!-- '"` --><!-- </textarea></xmp> --><form class="position-relative js-octocaptcha-parent" action="/signup" accept-charset="UTF-8" method="post"><input type="hidden" data-csrf="true" name="authenticity_token" value="ihwKaoiB2xXMVPEO7xj8DZ0eBmU+VkSE6y3mHWzJbfKvEXcVeBr3fpHaVDfQ9T4ApRandJYR4c7rXT3wZikyBw==">
//       <div id="email-container" class="js-continue-step-container signup-continue-step-container mt-4" data-step-state="active">
//         <div>
//           <label for="email" class="text-mono signup-text-prompt">
//             Enter your email <span class="sr-only">e.g. monalisa@github.com</span>
//           </label>
//         </div>
//         <div class="d-flex flex-items-center flex-column flex-sm-row">
//           <div class="d-flex flex-items-center width-full">
//             <span class="signup-continue-prompt mr-2" aria-hidden="true"></span>
//             <auto-check src="/email_validity_checks" class="js-prevent-default-behavior width-full" required="">
//               <input id="email" class="js-continue-input js-continue-focus-target signup-input form-control input-block flex-1 border-0 rounded-0 p-0 box-shadow-none color-text-white f4 text-mono" required="" autofocus="autofocus" autocomplete="off" data-target="text-suggester.input" aria-describedby="email-err" type="email" name="user[email]" spellcheck="false">
//               <input type="hidden" data-csrf="true" value="xThoUh9TEkN6LHNmDb+mtQblbzMsXwv4nVDMWc04J8l0kOH6jfM6yQq47iv0OdZhjVNrfIcVg3PRUvlbQZYB+Q==">
//             </auto-check>
//           </div>
//           <button type="button" class="js-continue-button signup-continue-button form-control px-3 width-full width-sm-auto mt-4 mt-sm-0" data-optimizely-event="click.signup_continue.email" data-continue-to="password-container" disabled="">
//             Continue
//           </button>
//         </div>
//       </div>

//       <div id="password-container" class="js-continue-step-container signup-continue-step-container" hidden="" data-step-state="invalid">
//         <div class="mt-4">
//           <label for="password" class="text-mono signup-text-prompt">
//             Create a password
//           </label>
//         </div>
//         <div class="d-flex flex-items-center flex-column flex-sm-row">
//           <div class="d-flex flex-items-center width-full">
//             <span class="signup-continue-prompt mr-2" aria-hidden="true"></span>
//             <visible-password class="flex-1 d-flex flex-items-center mr-3" data-catalyst="">
//               <auto-check src="/password_validity_checks" class="js-prevent-default-behavior flex-1" required="">
//                 <input id="password" class="form-control js-continue-input js-continue-focus-target signup-input form-control input-block flex-1 border-0 rounded-0 p-0 box-shadow-none color-text-white f4 text-mono" required="" passwordrules="minlength: 15; allowed: unicode;" autocomplete="off" data-target="visible-password.input" aria-describedby="password-err" type="password" name="user[password]" spellcheck="false">
//                 <input type="hidden" data-csrf="true" value="2gieoMQB+rtVhJCOquuelpfspxi3vXC1DOJT7PsRYITUnUgOwIFk4OZF8l5Y/zDHisz73egnbmg12VDodnQqCw==">
//               </auto-check>
//               <button data-target="visible-password.showButton" data-action="click:visible-password#show" type="button" data-view-component="true" class="signup-password-visibility-toggle btn-link">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-eye">
//     <path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
// </svg>
// </button>              <button type="button" class="btn-link signup-password-visibility-toggle" data-target="visible-password.hideButton" data-action="click:visible-password#hide" hidden="">
//                 <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-eye-closed">
//     <path fill-rule="evenodd" d="M.143 2.31a.75.75 0 011.047-.167l14.5 10.5a.75.75 0 11-.88 1.214l-2.248-1.628C11.346 13.19 9.792 14 8 14c-1.981 0-3.67-.992-4.933-2.078C1.797 10.832.88 9.577.43 8.9a1.618 1.618 0 010-1.797c.353-.533.995-1.42 1.868-2.305L.31 3.357A.75.75 0 01.143 2.31zm3.386 3.378a14.21 14.21 0 00-1.85 2.244.12.12 0 00-.022.068c0 .021.006.045.022.068.412.621 1.242 1.75 2.366 2.717C5.175 11.758 6.527 12.5 8 12.5c1.195 0 2.31-.488 3.29-1.191L9.063 9.695A2 2 0 016.058 7.52l-2.53-1.832zM8 3.5c-.516 0-1.017.09-1.499.251a.75.75 0 11-.473-1.423A6.23 6.23 0 018 2c1.981 0 3.67.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.619 1.619 0 010 1.798c-.11.166-.248.365-.41.587a.75.75 0 11-1.21-.887c.148-.201.272-.382.371-.53a.119.119 0 000-.137c-.412-.621-1.242-1.75-2.366-2.717C10.825 4.242 9.473 3.5 8 3.5z"></path>
// </svg>
//               </button>
//             </visible-password>
//           </div>
//           <button type="button" class="js-continue-button signup-continue-button form-control px-3 width-full width-sm-auto mt-4 mt-sm-0" data-optimizely-event="click.signup_continue.password" data-continue-to="username-container" disabled="">
//             Continue
//           </button>
//         </div>
//       </div>

//       <div id="username-container" class="js-continue-step-container signup-continue-step-container" hidden="" data-step-state="invalid">
//         <div class="mt-4">
//           <label for="login" class="text-mono signup-text-prompt">
//             Enter a username
//           </label>
//         </div>
//         <div class="d-flex flex-items-center flex-column flex-sm-row">
//           <div class="d-flex flex-items-center width-full">
//             <span class="signup-continue-prompt mr-2" aria-hidden="true"></span>
//             <auto-check src="/signup_check/username" class="js-prevent-default-behavior width-full" required="">
//               <input id="login" class="form-control js-continue-input js-continue-focus-target signup-input form-control input-block flex-1 border-0 rounded-0 p-0 box-shadow-none color-text-white f4 text-mono" required="" autocomplete="off" aria-describedby="login-err" type="text" name="user[login]" spellcheck="false">
//               <input type="hidden" data-csrf="true" value="ggDlRW5dAiQGI+CqQOlGscnahijxA0XwekMi0X9JevObFDrgNBg3LiOIFc4tB1Gt8smnog3KY3OehmyWQ1OneA==">
//             </auto-check>
//           </div>
//           <button type="button" class="js-continue-button signup-continue-button form-control px-3 width-full width-sm-auto mt-4 mt-sm-0" data-continue-to="opt-in-container" data-optimizely-event="click.signup_continue.username">
//             Continue
//           </button>
//         </div>
//       </div>

//       <div id="opt-in-container" class="js-continue-step-container signup-continue-step-container" hidden="" data-step-state="complete">
//         <div class="mt-4 mb-2">
//           <label for="opt_in" class="text-mono signup-text-prompt">
//             Would you like to receive product updates and
//             announcements via email?<br>
//             Type "y" for yes or "n" for no
//           </label>
//         </div>
//         <div class="d-flex flex-items-center flex-column flex-sm-row">
//           <div class="d-flex flex-items-center width-full">
//             <span class="signup-continue-prompt mr-2"></span>
//             <input type="text" name="opt_in" id="opt_in" value="" class="form-control js-continue-input js-continue-focus-target signup-input form-control input-block flex-1 border-0 rounded-0 p-0 box-shadow-none color-text-white f4 text-mono">
//           </div>
//           <button type="button" class="js-continue-button signup-continue-button form-control px-3 width-full width-sm-auto mt-4 mt-sm-0" data-continue-to="captcha-and-submit-container" data-optimizely-event="click.signup_continue.opt-in">
//             Continue
//           </button>
//         </div>
//       </div>

//       <div id="captcha-and-submit-container" class="width-full js-continue-step-container captcha-container" data-step-state="complete" hidden="" style="position: relative; top: 0px;">
//           <div class="text-mono text-bold signup-text-prompt mt-4">
//             Verify your account
//           </div>
//           <div class="js-continue-focus-target" tabindex="-1" style="outline: none;">

// <div class="my-3">

//   <div class="js-octocaptcha-spinner d-flex flex-justify-center flex-items-center width-full d-none">
//     <img alt="Waiting for verification." src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif" width="64" height="64">
//   </div>

//   <div class="js-octocaptcha-success d-none d-flex flex-justify-center flex-items-center width-full">
//     <svg height="64" aria-label="Account has been verified. Please continue." role="img" viewBox="0 0 24 24" version="1.1" width="64" data-view-component="true" class="octicon octicon-check color-fg-success">
//     <path fill-rule="evenodd" d="M21.03 5.72a.75.75 0 010 1.06l-11.5 11.5a.75.75 0 01-1.072-.012l-5.5-5.75a.75.75 0 111.084-1.036l4.97 5.195L19.97 5.72a.75.75 0 011.06 0z"></path>
// </svg>
//   </div>

//   <div class="width-full" data-ga-event-category="Signup funnel entrance">
//     <iframe src="https://octocaptcha.com?origin_page=github_signup_next&amp;responsive=true&amp;require_ack=true&amp;version=2" class="js-octocaptcha-frame width-full d-block border-0 rounded-2" title="Please verify by completing this captcha." style="height: 380px; width: 541px;"></iframe>
//   </div>

//   <input required="" name="octocaptcha-token" class="js-octocaptcha-token d-none" data-octocaptcha-url="https://octocaptcha.com" data-octocaptcha-timeout="30000">
// </div>

//           </div>

//         <input class="form-control" type="text" name="required_field_ef48" hidden="hidden">
// <input class="form-control" type="hidden" name="timestamp" value="1640260357704">
// <input class="form-control" type="hidden" name="timestamp_secret" value="1581c1185f081db5d760d089d5af3f572aafdba6f8f3e12f0a685737041c9cdf">

//         <button name="button" type="submit" class="form-control signup-submit-button width-full py-2 js-octocaptcha-form-submit" data-optimizely-event="click.signup_continue.create_account" data-disable-invalid="true" disabled="" hidden="hidden">Create account</button>
//       </div>
// </form>  </div>
