import styled from 'styled-components'
import { design } from '../shared/design'
import { backgroundColor, textColor } from '../shared/themes'

export const Wrapper = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor};
  padding: 100px 200px;
  min-height: calc(100vh - 271px);

  img {
    width: 100%;
  }

  pre {
    background-color: ${design.mineShaft};
    color: ${design.harlequin};
    padding: 20px;
    border-radius: 4px;

    code {
      padding: 0px;
    }
  }

  code {
    background-color: ${design.mineShaft};
    color: ${design.harlequin};
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
`

export const LoaderWrapper = styled.div`
  display: ${props => props.visibility ? 'none': 'block'};
`

export const ContentWrapper = styled.div`
  display: ${props => props.visibility ? 'block': 'none'};
`