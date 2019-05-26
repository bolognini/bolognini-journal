import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import { Wrapper, Title } from './blogTemplate.style'

export default function Template ({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const [color, setColor] = useState('light')
  const [layout, setLayout] = useState('cozy')

  return (
    <Layout color={color} layout={layout}>
      <button onClick={() => color === 'light' ? setColor('dark') : setColor('light')}>Dark mode</button>
      <button onClick={() => layout === 'cozy' ? setLayout('compact') : setLayout('cozy')}>Compact Layout</button>
      <button onClick={() => {
        color === 'light' ? setColor('dark') : setColor('light')
        layout === 'cozy' ? setLayout('compact') : setLayout('cozy')
      }}>Ambos</button>
      <Wrapper>
          
        <div>
          <Title>{frontmatter.title}</Title>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Wrapper>
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