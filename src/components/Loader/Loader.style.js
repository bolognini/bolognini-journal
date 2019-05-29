import styled, { keyframes } from 'styled-components'

export const loader = keyframes`
  0% {
    box-shadow:
    0 -0.83em 0 -0.4em,
    0 -0.83em 0 -0.42em #E91E63,
    0 -0.83em 0 -0.44em #42A5F5,
    0 -0.83em 0 -0.46em #9CCC65,
    0 -0.83em 0 -0.477em #FFEE58;
  }
  5%,
  95% {
    box-shadow:
    0 -0.83em 0 -0.4em,
    0 -0.83em 0 -0.42em #E91E63,
    0 -0.83em 0 -0.44em #42A5F5,
    0 -0.83em 0 -0.46em #9CCC65,
    0 -0.83em 0 -0.477em #FFEE58;
  }
  10%,
  59% {
    box-shadow:
    0 -0.83em 0 -0.4em,
    -0.087em -0.825em 0 -0.42em #E91E63,
    -0.173em -0.812em 0 -0.44em #42A5F5,
    -0.256em -0.789em 0 -0.46em #9CCC65,
    -0.297em -0.775em 0 -0.477em #FFEE58;
  }
  20% {
    box-shadow:
    0 -0.83em 0 -0.4em,
    -0.338em -0.758em 0 -0.42em #E91E63,
    -0.555em -0.617em 0 -0.44em #42A5F5,
    -0.671em -0.488em 0 -0.46em #9CCC65,
    -0.749em -0.34em 0 -0.477em #FFEE58;
  }
  38% {
    box-shadow:
    0 -0.83em 0 -0.4em,
    -0.377em -0.74em 0 -0.42em #E91E63,
    -0.645em -0.522em 0 -0.44em #42A5F5,
    -0.775em -0.297em 0 -0.46em #9CCC65,
    -0.82em -0.09em 0 -0.477em #FFEE58;
  }
  100% {
    box-shadow:
    0 -0.83em 0 -0.4em,
    0 -0.83em 0 -0.42em #E91E63,
    0 -0.83em 0 -0.44em #42A5F5,
    0 -0.83em 0 -0.46em #9CCC65,
    0 -0.83em 0 -0.477em #FFEE58;
  }
`
export const simpleLoader = keyframes`
  0%,
  100% {
    box-shadow:
    0em -2.6em 0em 0em #dd7eb4,
    1.8em -1.8em 0 0em rgba(221, 126, 180, 0.2),
    2.5em 0em 0 0em rgba(221, 126, 180, 0.2),
    1.75em 1.75em 0 0em rgba(221, 126, 180, 0.2),
    0em 2.5em 0 0em rgba(221, 126, 180, 0.2),
    -1.8em 1.8em 0 0em rgba(221, 126, 180, 0.2),
    -2.6em 0em 0 0em rgba(221, 126, 180, 0.5),
    -1.8em -1.8em 0 0em rgba(221, 126, 180, 0.7);
  }
  12.5% {
    box-shadow:
    0em -2.6em 0em 0em rgba(221, 126, 180, 0.7),
    1.8em -1.8em 0 0em #dd7eb4,
    2.5em 0em 0 0em rgba(221, 126, 180, 0.2),
    1.75em 1.75em 0 0em rgba(221, 126, 180, 0.2),
    0em 2.5em 0 0em rgba(221, 126, 180, 0.2),
    -1.8em 1.8em 0 0em rgba(221, 126, 180, 0.2),
    -2.6em 0em 0 0em rgba(221, 126, 180, 0.2),
    -1.8em -1.8em 0 0em rgba(221, 126, 180, 0.5);
  }
  25% {
    box-shadow:
    0em -2.6em 0em 0em rgba(221, 126, 180, 0.5),
    1.8em -1.8em 0 0em rgba(221, 126, 180, 0.7),
    2.5em 0em 0 0em #dd7eb4,
    1.75em 1.75em 0 0em rgba(221, 126, 180, 0.2),
    0em 2.5em 0 0em rgba(221, 126, 180, 0.2),
    -1.8em 1.8em 0 0em rgba(221, 126, 180, 0.2),
    -2.6em 0em 0 0em rgba(221, 126, 180, 0.2),
    -1.8em -1.8em 0 0em rgba(221, 126, 180, 0.2);
  }
  37.5% {
    box-shadow:
    0em -2.6em 0em 0em rgba(221, 126, 180, 0.2),
    1.8em -1.8em 0 0em rgba(221, 126, 180, 0.5),
    2.5em 0em 0 0em rgba(221, 126, 180, 0.7),
    1.75em 1.75em 0 0em #dd7eb4,
    0em 2.5em 0 0em rgba(221, 126, 180, 0.2),
    -1.8em 1.8em 0 0em rgba(221, 126, 180, 0.2),
    -2.6em 0em 0 0em rgba(221, 126, 180, 0.2),
    -1.8em -1.8em 0 0em rgba(221, 126, 180, 0.2);
  }
  50% {
    box-shadow:
    0em -2.6em 0em 0em rgba(221, 126, 180, 0.2),
    1.8em -1.8em 0 0em rgba(221, 126, 180, 0.2),
    2.5em 0em 0 0em rgba(221, 126, 180, 0.5),
    1.75em 1.75em 0 0em rgba(221, 126, 180, 0.7),
    0em 2.5em 0 0em #dd7eb4,
    -1.8em 1.8em 0 0em rgba(221, 126, 180, 0.2),
    -2.6em 0em 0 0em rgba(221, 126, 180, 0.2),
    -1.8em -1.8em 0 0em rgba(221, 126, 180, 0.2);
  }
  62.5% {
    box-shadow:
    0em -2.6em 0em 0em rgba(221, 126, 180, 0.2),
    1.8em -1.8em 0 0em rgba(221, 126, 180, 0.2),
    2.5em 0em 0 0em rgba(221, 126, 180, 0.2),
    1.75em 1.75em 0 0em rgba(221, 126, 180, 0.5),
    0em 2.5em 0 0em rgba(221, 126, 180, 0.7),
    -1.8em 1.8em 0 0em #dd7eb4,
    -2.6em 0em 0 0em rgba(221, 126, 180, 0.2),
    -1.8em -1.8em 0 0em rgba(221, 126, 180, 0.2);
  }
  75% {
    box-shadow:
    0em -2.6em 0em 0em rgba(221, 126, 180, 0.2),
    1.8em -1.8em 0 0em rgba(221, 126, 180, 0.2),
    2.5em 0em 0 0em rgba(221, 126, 180, 0.2),
    1.75em 1.75em 0 0em rgba(221, 126, 180, 0.2),
    0em 2.5em 0 0em rgba(221, 126, 180, 0.5),
    -1.8em 1.8em 0 0em rgba(221, 126, 180, 0.7),
    -2.6em 0em 0 0em #dd7eb4,
    -1.8em -1.8em 0 0em rgba(221, 126, 180, 0.2);
  }
  87.5% {
    box-shadow:
    0em -2.6em 0em 0em rgba(221, 126, 180, 0.2),
    1.8em -1.8em 0 0em rgba(221, 126, 180, 0.2),
    2.5em 0em 0 0em rgba(221, 126, 180, 0.2),
    1.75em 1.75em 0 0em rgba(221, 126, 180, 0.2),
    0em 2.5em 0 0em rgba(221, 126, 180, 0.2),
    -1.8em 1.8em 0 0em rgba(221, 126, 180, 0.5),
    -2.6em 0em 0 0em rgba(221, 126, 180, 0.7),
    -1.8em -1.8em 0 0em #dd7eb4;
  }
`
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const LoaderComponent = styled.div`
  color: #ffffff;
  font-size: 90px;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin: 25vh auto;
  position: relative;
  transform: translateZ(0);
  
  animation: ${loader} 1.7s infinite ease, ${rotate} 1.7s infinite ease;

  @media (prefers-reduced-motion: reduce) {
    font-size: 20px;
    animation: ${simpleLoader} 2.7s infinite linear;
  }
`