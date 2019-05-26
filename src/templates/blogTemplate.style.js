import styled from 'styled-components'
import { design, backgroundColor, textColor, padding } from '../components/Layout'

export const Wrapper = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor};
  padding: 100px 200px;

  img {
    width: 100%;
  }

  pre {
    background-color: #2e2d2d;
    color: #33FF33;
    padding: 20px;
    border-radius: 4px;

    code {
      padding: 0px;
    }
  }

  code {
    background-color: #2e2d2d;
    color: #33FF33;
    padding: 10px;
    border-radius: 4px;
  }

  blockquote {
    padding: 30px 0;
    font-size: 24px;
    color: ${design.burntSienna};
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      display: block;
      padding-right: 5px;
      content: "❝";
    }
    &::after {
      display: block;
      padding-left: 5px;
      content: "❞";
    }
  }

  a {
    color: ${design.burntSienna};
  }

  li {
    list-style: none;
  }
`

export const Title = styled.h1`
  color: pink;
  background-color: royalblue;
  padding: ${padding};
`