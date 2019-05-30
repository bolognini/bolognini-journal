import React, { useState } from 'react'
import Burger from '../../../static/assets/menu.svg'
import Square from '../../../static/assets/four-black-squares.svg'
import Default from '../../../static/assets/default.svg'
import Regular from '../../../static/assets/regular.svg'
import Compact from '../../../static/assets/compact.svg'
import Layout from '../../components/Layout'
import ThemeButton from '../../components/ThemeButton'
import {
  Section,
  CardWrapper,
  Card,
  CardTitle,
  Options,
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
  const [color, setColor] = useState('light')

  return (
    <Layout color={color} position={position} layout={layout}>
      <Section>
        <Options position={childrenPosition}>
          <ButtonWrapper position={childrenPosition}>
            <Button onClick={() => setLayout('default')}>
              <Default />
            </Button>
            <Button onClick={() => setLayout('regular')}>
              <Regular />
            </Button>
            <Button onClick={() => setLayout('compact')}>
              <Compact />
            </Button>
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
        </Options>
        <CardWrapper>
          <Card position={childrenPosition} layout={layout}>
            <CardTitle>MERN com Acessibilidade</CardTitle>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <Tag layout={layout} color={'yellow'}>UX</Tag>
            <Tag layout={layout} color={'green'}>Backend</Tag>
            <Tag layout={layout} color={'blue'}>Frontend</Tag>
          </Card>
          <Card position={childrenPosition} layout={layout}>
            <CardTitle>Começando com Node.JS</CardTitle>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <Tag layout={layout} color={'blue'}>Frontend</Tag>
            <Tag layout={layout} color={'green'}>Backend</Tag>
          </Card>
          <Card position={childrenPosition} layout={layout}>
            <CardTitle>CSS Resiliente</CardTitle>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <Tag layout={layout} color={'blue'}>Frontend</Tag>
            <Tag layout={layout} color={'yellow'}>UX</Tag>
            <Tag layout={layout} color={'yellow'}>UX</Tag>
          </Card>
          <Card position={childrenPosition} layout={layout}>
            <CardTitle>Web Components na prática</CardTitle>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <Tag layout={layout}>Frontend</Tag>
          </Card>
        </CardWrapper>
        <div
        onClick={() => {
          color === 'light' ?
          setColor('dark') :
          setColor('light')
        }}>
          <ThemeButton />
        </div>
      </Section>
    </Layout> 
  )
}
