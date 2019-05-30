import styled from 'styled-components'
import { design } from '../../shared/design'
import {
  backgroundColor,
  backgroundCard,
  backgroundIcon,
  textIcon,
  textColor,
  titleColor,
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
  background-color: ${backgroundCard};

  p {
    display: ${props => props.layout === 'compact' && 'none'};
    margin: 0;
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

export const CardTitle = styled.h3`
  font-size: ${design.smallTitle};
  text-shadow: 1.2px 1.2px 0 ${titleColor};
  margin: 0;
  padding: ${props => {
    if (props.layout === 'default') {
      return '20px 30px'
    } else if (props.layout === 'regular') {
      return '15px 20px'
    }
    return '20px'
  }};
`

export const Tag = styled.span`
  display: ${props => props.layout !== 'default' && 'none'};
  background-color: ${props => {
    if (props.color === 'yellow') {
      return design.deepBlush
    } else if (props.color === 'green') {
      return design.apple
    }
    return design.royalBlue
  }};
  border-radius: 4px;
  color: white;
  padding: 0 8px;
  margin-left: 30px;
`

export const Options = styled.div`
  display: flex;
  justify-content: ${props => props.position === 'flex' ? 'space-between' : 'flex-end'};
  align-items: center;
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

  svg {
    fill: ${backgroundIcon};
  }
`

export const ButtonWrapper = styled.div`
  display: ${props => props.position === 'flex' ? 'block' : 'none'};
`

export const Button = styled.button`
  background: none;
  height: 30px;
  width: 30px;
  color: ${textIcon};
  border: none;
  border-radius: 4px;
  margin-right: 4px;

  svg {
    width: 100%;
    fill: ${backgroundIcon};
  }
`