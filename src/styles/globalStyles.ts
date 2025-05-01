import { css } from '@emotion/react';
import { theme } from '.';
import { BODY_HEIGHT, MOBILE_BODY_HEIGHT } from '@/constants/styles';

export const globalStyles = css`
  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    @media (max-width: 460px) {
      font-size: 14px;
    }
  }

  body {
    background: ${theme.colors.background};
    width: 100vw;
    cursor: context-menu;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${theme.fonts.primary};
    scroll-behavior: smooth;
  }

  @keyframes levitate {
    0% {
      transform: translateY(5px);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(5px);
    }
  }

  @keyframes easeInLeft {
    from {
      opacity: 0.9;
      transform: translate(-50%, -50%) scale(0.2);
    }
    to {
      opacity: 1;
      transform: translate(0, 0) scale(1);
    }
  }
  @keyframes easeInRight {
    from {
      opacity: 0.9;
      transform: translate(50%, -50%) scale(0.2);
    }
    to {
      opacity: 1;
      transform: translate(0, 0) scale(1);
    }
  }

  .levitate {
    animation: levitate 2s ease-in-out infinite;
  }

  .quiz-container {
    padding: 12px 0px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 48px;
    width: 100vw;
    min-height: ${BODY_HEIGHT};
    @media (max-width: 768px) {
      padding: 12px;
      min-height: ${MOBILE_BODY_HEIGHT};
    }
  }

  .easeInAnimation {
    .left-section {
      animation: easeInLeft;
      animation-timeline: view();
      animation-range: entry 0 cover 35%;
    }
    .right-section {
      animation: easeInRight;
      animation-timeline: view();
      animation-range: entry 0 cover 35%;
    }
  }

  .container-even {
    background: ${theme.colors.background2};
  }

  .content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }

  .content-container-vertical {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 12px;
  }

  .instagram-card {
    width: fit-content;
  }

  // webkit-css

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.white};
    border-radius: ${theme.borders.radius};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.black};
    border-radius: ${theme.borders.radius};
    border: 2px solid ${theme.colors.background};
  }

  // animations

  @keyframes lights {
    0% {
      color: #daadf0;
      text-shadow:
        0 0 1em hsla(320, 100%, 70%, 0.4),
        0 0 0.125em hsla(320, 100%, 80%, 0.5),
        -1em -0.125em 0.5em hsla(40, 100%, 80%, 0.1),
        1em 0.125em 0.5em hsla(200, 100%, 80%, 0.1);
    }

    30% {
      color: #daadf0;
      text-shadow:
        0 0 1em hsla(320, 100%, 70%, 0.7),
        0 0 0.125em hsla(320, 100%, 80%, 0.7),
        -0.5em -0.125em 0.25em hsla(40, 100%, 80%, 0.3),
        0.5em 0.125em 0.25em hsla(200, 100%, 80%, 0.5);
    }

    40% {
      color: #daadf0;
      text-shadow:
        0 0 1em hsla(320, 100%, 70%, 0.7),
        0 0 0.125em hsla(320, 100%, 90%, 0.7),
        -0.25em -0.125em 0.125em hsla(40, 100%, 80%, 0.3),
        0.25em 0.125em 0.125em hsla(200, 100%, 80%, 0.5);
    }

    70% {
      color: #daadf0;
      text-shadow:
        0 0 1em hsla(320, 100%, 70%, 0.7),
        0 0 0.125em hsla(320, 100%, 80%, 0.7),
        0.5em -0.125em 0.25em hsla(40, 100%, 80%, 0.3),
        -0.5em 0.125em 0.25em hsla(200, 100%, 80%, 0.5);
    }

    100% {
      color: #daadf0;
      text-shadow:
        0 0 1em hsla(320, 100%, 70%, 0.4),
        0 0 0.125em hsla(320, 100%, 80%, 0.5),
        1em -0.125em 0.5em hsla(40, 100%, 80%, 0.1),
        -1em 0.125em 0.5em hsla(200, 100%, 80%, 0.1);
    }
  }

  .city-lights {
    animation: lights 5s 750ms linear infinite;
  }

  .btn-shine {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 12px 48px;
    color: #ffffff;
    background: linear-gradient(to right, #4d4d4d 0, white 10%, #4d4d4d 20%);
    background-position: 0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 3s infinite linear;
    animation-fill-mode: forwards;
    -webkit-text-size-adjust: none;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    white-space: nowrap;
  }

  @keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 180px;
    }
    100% {
      background-position: 180px;
    }
  }
`;
