import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import Loader from '../components/Loader'
import ThemeButton from '../components/ThemeButton'
import {
  Wrapper,
  Title,
  LoaderWrapper,
  ContentWrapper
} from './blogTemplate.style'

export default function Template ({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const [color, setColor] = useState('light')
  const [visibility, setVisibility] = useState(false)
  
  useEffect(() => {
    setTimeout(() => {
      setVisibility(true)
    }, 3000)
  }, [])
  
  return (
    <Layout color={color}>      
      <Wrapper>
        <LoaderWrapper visibility={visibility}>
          <Loader/>
        </LoaderWrapper>
        <ContentWrapper visibility={visibility}>
          <Title>{frontmatter.title}</Title>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </ContentWrapper>
      </Wrapper>
      <div
        onClick={() => {
          color === 'light' ?
          setColor('dark') :
          setColor('light')
        }}>
        <ThemeButton />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`