/** @jsx jsx */
import { Flex, jsx } from "theme-ui"
import Item from "./project-info-item"

type ProjectInfoProps = {
  project: {
    client: string
    date: string
    service: string
    labels: string
  }
}

const ProjectInfo = ({ project }: ProjectInfoProps) => (
  <Flex sx={{ mt: 4, mb: [2, 4], flexWrap: `wrap` }}>
    {project.client !== '-' ?<Item name="Client" content={project.client} /> : null}
    <Item name="Date" content={project.date} />
    <Item name="Service" content={project.service} />
    {project.labels !== null ? <Item name="Labels" content={project.labels} /> : null}
  </Flex>
)

export default ProjectInfo
