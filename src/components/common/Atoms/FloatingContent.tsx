import React from 'react';
import bgdrop1 from '@/assets/bgdrop1.png';
import bgdrop2 from '@/assets/bgdrop2.png';
import bgdrop3 from '@/assets/bgdrop3.png';
import bgdrop4 from '@/assets/bgdrop4.png';
import styled from '@emotion/styled';

const Styled = styled.div`
  opacity: 0.8;
  position: fixed;
  top: 0;
  padding-top: 10vh;
  ul {
    padding: 0;
    margin: 0;
  }
  img {
    height: 160px;
    @media (max-width: 768px) {
      height: 80px;
    }
  }
  .circlesParent {
    height: 90vh;
    width: 100vw;
    overflow: hidden;
    z-index: -1;
  }
  .circles {
    top: 0;
    left: 0;
    z-index: -1;
    overflow: hidden;
  }

  .circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(96, 183, 199, 0.1);
    animation: animate 25s linear infinite;
    bottom: 0;
  }

  .circles li:nth-child(1) {
    left: 55%;
    width: 0px;
    height: 0px;
    animation-delay: 0s;
    animation-duration: 40s;
    border-radius: 50%;
    border-top-left-radius: 0 !important;
  }

  .circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
    animation-duration: 50s;
    border-radius: 50%;
    border-top-left-radius: 0 !important;
    background: rgba(96, 183, 199, 0.1);
  }

  .circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
    animation-duration: 40s;
    border-radius: 50%;
    border-top-left-radius: 0 !important;
    background: rgba(47, 44, 92, 0.1);
  }

  .circles li:nth-child(4) {
    left: 40%;
    width: 15px;
    height: 15px;
    animation-delay: 0s;
    animation-duration: 30s;
    border-radius: 50%;
    border-top-left-radius: 0 !important;
    /* background: rgba(114, 63, 145, 0.1); */
  }

  .circles li:nth-child(5) {
    left: 55%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
    animation-duration: 40s;
    border-radius: 50%;
    border-top-left-radius: 0 !important;
    background: rgba(96, 183, 199, 0.1);
  }

  .circles li:nth-child(6) {
    left: 65%;
    width: 90px;
    height: 90px;
    @media (max-width: 768px) {
      width: 15px;
      height: 15px;
    }
    animation-delay: 0s;
    animation-duration: 50s;
    border-radius: 50%;
    border-top-left-radius: 0 !important;
    background: rgba(114, 63, 145, 0.1);
  }

  .circles li:nth-child(7) {
    left: 85%;
    width: 50px;
    height: 50px;
    animation-delay: 0s;
    animation-duration: 60s;
    border-radius: 50%;
    border-top-left-radius: 0 !important;
    /* background: rgba(47, 44, 92, 0.1); */
  }

  .circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 0s;
    animation-duration: 70s;
    border-radius: 50%;
    border-top-left-radius: 0 !important;
    background: rgba(114, 63, 145, 0.1);
  }

  .circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 0s;
    animation-duration: 80s;
    border-radius: 50%;
    border-top-left-radius: 0 !important;
    background: rgba(47, 44, 92, 0.1);
  }

  .circles li:nth-child(10) {
    left: 25%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
    animation-duration: 90s;
    border-radius: 50%;
    border-top-left-radius: 0 !important;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 0.8;
    }
    25% {
      transform: translateY(-45vh) rotate(180deg);
      opacity: 1;
    }
    50% {
      transform: translateY(-90vh) rotate(360deg);
      opacity: 0.8;
    }
    75% {
      transform: translateY(-45vh) rotate(180deg);
      opacity: 1;
    }
    100% {
      transform: translateY(0) rotate(0deg);
      opacity: 0.8;
    }
  }
`;
function FloatingObjectsBackground() {
  return (
    <Styled>
      <div className="circlesParent">
        <ul className={'circles'}>
          <li>
            <img src={bgdrop1} />
          </li>
          <li></li>
          <li></li>
          <li>
            <img src={bgdrop2} />
          </li>
          <li></li>
          <li></li>
          <li>
            <img src={bgdrop4} />
          </li>
          <li></li>
          <li></li>
          <li>
            <img src={bgdrop3} />
          </li>
        </ul>
      </div>
    </Styled>
  );
}

export default FloatingObjectsBackground;
