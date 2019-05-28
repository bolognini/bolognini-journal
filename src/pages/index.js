import React, { useState } from 'react'
import styled from 'styled-components'
import Layout, { design, backgroundColor, textColor, cardPosition } from '../components/Layout'

const CardWrapper = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor};
  padding: 32px 0;
  ${cardPosition};
`

const Card = styled.div`
  width: 50%;
  height: 150px;
  margin: 16px 0;
  box-shadow: ${design.cardBoxShadow};
`
const ToogleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: ${backgroundColor};
`

const IconWrapper = styled.div`
  display: ${props => props.square ? 'grid' : 'flex'};
  flex-direction: ${props => props.square ? 'none' : 'column'};
  align-items: ${props => props.square ? 'none' : 'center'};
  justify-content: ${props => props.square ? 'none' : 'center'};
  grid-template-rows: ${props => props.square ? '1fr 1fr' : 'none'};
  grid-template-columns: ${props => props.square ? '1fr 1fr' : 'none'};
  padding: ${props => props.square ? '4px 0 0 4px' : '2px'};
  margin: 16px 24px 0 0;
  width: 30px;
  height: 30px;
  border: 1px solid black;
  cursor: pointer;
`

const IconTrail = styled.span`
  margin-bottom: 2px;
  width: 20px;
  height: 2px;
  background-color: black;
`

const IconSquare = styled.div`
  width: 10px;
  height: 10px;
  border: 1px solid black;
`

export default () => {
  const [position, setPosition] = useState('grid')
  return (
    <Layout color={'light'} position={position}>
      <ToogleWrapper>
        <IconWrapper onClick={() => setPosition('flex')}>
          <IconTrail />
          <IconTrail />
          <IconTrail />
        </IconWrapper>
        <IconWrapper square onClick={() => setPosition('grid')}>
          <IconSquare />
          <IconSquare />
          <IconSquare />
          <IconSquare />
        </IconWrapper>
      </ToogleWrapper>
      <CardWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardWrapper>
    </Layout> 
  )
}
