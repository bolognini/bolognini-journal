import styled from 'styled-components'
import { design } from '../../shared/design'
import {
  backgroundColor,
  textColor,
  cardPosition,
  padding
} from '../../shared/themes'

export const Section = styled.section`
  min-height: calc(100vh - 71px);
  background-color: ${backgroundColor};
  padding-bottom: 24px;
`

export const CardWrapper = styled.div`
  color: ${textColor};
  padding: 32px 0;
  max-width: 960px;
  padding: 0 100px;
  margin: 0 auto;
  ${cardPosition};
`

export const Card = styled.div`
  @supports (display: grid) {
    width: ${props => props.position === 'flex' ? '90%' : '100%'};
    margin: ${props => props.position === 'flex' ? '0 0 16px 0' : 'none'};
  }
  width: ${props => props.position === 'flex' ? '90%' : 'calc(50% - 16px)'};
  margin: ${props => props.position === 'flex' ? '0 0 16px 0' : '8px'};
  height: ${props => props.position === 'flex' ? padding : '250px'};
  box-shadow: ${design.cardBoxShadow};

  h3 {
    font-size: ${props => props.layout === 'compact' && '32px'};
    padding: ${props => {
      if (props.layout === 'default') {
        return '10px 30px'
      } else if (props.layout === 'regular') {
        return '5px 20px'
      }
      return '0 10px'
    }};
  }

  p {
    display: ${props => props.layout === 'compact' && 'none'};
    padding: ${props => {
      if (props.layout === 'default') {
        return '30px'
      } else if (props.layout === 'regular') {
        return '20px'
      }
      return '0px'
    }};
  }
`

export const Tag = styled.span`
  display: ${props => props.layout !== 'default' && 'none'};
  background-color: ${props => {
    if (props.color === 'yellow') {
      return design.rajah
    } else if (props.color === 'green') {
      return design.harlequin
    }
    return design.royalBlue
  }};
  color: white;
  padding: 0 5px;
  margin-left: 30px;
`

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2px;
  margin: 16px 24px 0 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
`

export const ButtonWrapper = styled.div`
  display: ${props => props.position === 'flex' ? 'block' : 'none'};
`

export const Button = styled.button`
  background: ${design.rajah};
  color: white;
  border: none;
  margin-right: 4px;
`