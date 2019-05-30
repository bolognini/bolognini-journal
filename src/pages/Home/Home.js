import React, { useState } from 'react'
import Burger from '../../../static/assets/menu.svg'
import Square from '../../../static/assets/four-black-squares.svg'
import Layout from '../../components/Layout'
import {
  Section,
  CardWrapper,
  Card,
  ToggleWrapper,
  IconWrapper,
  ButtonWrapper,
  Button,
  Tag
} from './Home.style'

export default () => {
  const [position, setPosition] = useState('grid')
  const [childrenPosition, setChildrenPosition] = useState('grid')
  const [layout, setLayout] = useState('regular')

  return (
    <Layout color={'light'} position={position} layout={layout}>
      <Section>
        <ButtonWrapper position={childrenPosition}>
          <Button onClick={() => setLayout('default')}>Default Layout</Button>
          <Button onClick={() => setLayout('regular')}>Regular Layout</Button>
          <Button onClick={() => setLayout('compact')}>Compact Layout</Button>
        </ButtonWrapper>
        <ToggleWrapper>
          <IconWrapper onClick={() => {
            setPosition('flex')
            setChildrenPosition('flex')
          }}>
            <Burger />
          </IconWrapper>
          <IconWrapper onClick={() =>  {
            setPosition('grid')
            setChildrenPosition('grid')
          }}>
            <Square />
          </IconWrapper>
        </ToggleWrapper>
        <CardWrapper>
          <Card position={childrenPosition} layout={layout}>
            <h3>MEAN com Acessibilidade</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <Tag layout={layout} color={'yellow'}>UX</Tag>
            <Tag layout={layout} color={'green'}>Backend</Tag>
            <Tag layout={layout} color={'blue'}>Frontend</Tag>
          </Card>
          <Card position={childrenPosition} layout={layout}>
            <h3>Primeiros Passos com Node.JS</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <Tag layout={layout} color={'blue'}>Frontend</Tag>
            <Tag layout={layout} color={'green'}>Backend</Tag>
          </Card>
          <Card position={childrenPosition} layout={layout}>
            <h3>CSS Resiliente</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <Tag layout={layout} color={'blue'}>Frontend</Tag>
            <Tag layout={layout} color={'yellow'}>UX</Tag>
            <Tag layout={layout} color={'yellow'}>UX</Tag>
          </Card>
          <Card position={childrenPosition} layout={layout}>
            <h3>Web Components na prática</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <Tag layout={layout}>Frontend</Tag>
          </Card>
        </CardWrapper>
      </Section>
    </Layout> 
  )
}
