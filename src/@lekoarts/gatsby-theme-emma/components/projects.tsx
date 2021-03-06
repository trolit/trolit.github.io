/** @jsx jsx */
import { jsx, Container, Styled } from "theme-ui"
import { useTrail } from "react-spring"
import Layout from "./layout"
import { ChildImageSharp } from "../types"
import ProjectItem from "./project-item"

type ProjectsProps = {
  projects: {
    color: string
    slug: string
    title: string
    service: string
    client: string
    cover: ChildImageSharp
    date: Date
    language: string
    labels: string
    desc: string
  }[]
  [key: string]: any
}

const Projects = ({ projects }: ProjectsProps) => {
  const trail = useTrail(projects.length, {});

  if (projects.length === 0) {
    return (
      <Layout>
        <Container>
          <Styled.p>
            Hi!{` `}
            <span role="img" aria-label="Wave emoji">
              👋
            </span>
            {` `}
            <br />
            Thanks for using <b>@lekoarts/gatsby-theme-emma</b>. You currently don't have any content in your{` `}
            <i>projects</i> folder - that's why this page displays a placeholder text. Head over to the{` `}
            <Styled.a href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-emma">
              README
            </Styled.a>
            {` `}
            to learn how to setup them.
          </Styled.p>
          <Styled.p>
            <b>TL;DR:</b> <br />
            The starter automatically created the folder <code>content/projects</code>. Go into this folder, create a
            new folder called <code>example</code> and create an <code>index.mdx</code> file there and place an image.
            Edit the frontmatter like described in the{` `}
            <Styled.a href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-emma">
              README
            </Styled.a>
            .
          </Styled.p>
        </Container>
      </Layout>
    )
  }

  return (
    <Layout
      sx={{
        display: `grid`,
        marginLeft: `3%`,
        gridTemplateColumns: `repeat(auto-fit, minmax(220px, 1fr))`,
        width: `94%`,
      }}
    >
      {trail.map((style, index) => (
        <ProjectItem style={style} node={projects[index]} key={projects[index].slug} />
      ))}
    </Layout>
  )
}

export default Projects
