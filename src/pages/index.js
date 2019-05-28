import React, { useState } from 'react'
import styled from 'styled-components'
import Burger from '../../static/assets/menu.svg'
import Square from '../../static/assets/four-black-squares.svg'
import Layout, { design, backgroundColor, textColor, cardPosition } from '../components/Layout'

const Section = styled.section`
  min-height: calc(100vh - 71px);
  background-color: ${backgroundColor};
  padding-bottom: 24px;
`

const CardWrapper = styled.div`
  color: ${textColor};
  padding: 32px 0;
  max-width: 960px;
  padding: 0 100px;
  margin: 0 auto;
  ${cardPosition};
`

const Card = styled.div`
  @supports (display: grid) {
    width: ${props => props.position === 'flex' ? '90%' : '100%'};
    margin: ${props => props.position === 'flex' ? '0 0 16px 0' : 'none'};
  }
  width: ${props => props.position === 'flex' ? '90%' : 'calc(50% - 16px)'};
  margin: ${props => props.position === 'flex' ? '0 0 16px 0' : '8px'};
  height: 250px;
  box-shadow: ${design.cardBoxShadow};
`
const ToogleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const IconWrapper = styled.div`
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

export default () => {
  const [position, setPosition] = useState('grid')
  const [childrenPosition, setChildrenPosition] = useState('grid')

  return (
    <Layout color={'light'} position={position}>
      <Section>
        <ToogleWrapper>
          <IconWrapper onClick={() =>  {
            setPosition('flex')
            setChildrenPosition('flex')
            console.log(childrenPosition)
          }}>
            <Burger />
          </IconWrapper>
          <IconWrapper onClick={() =>  {
            setPosition('grid')
            setChildrenPosition('grid')
            console.log(childrenPosition)
          }}>
            <Square />
          </IconWrapper>
        </ToogleWrapper>
        <CardWrapper>
          <Card position={childrenPosition} />
          <Card position={childrenPosition} />
          <Card position={childrenPosition} />
          <Card position={childrenPosition} />
        </CardWrapper>
      </Section>
    </Layout> 
  )
}
