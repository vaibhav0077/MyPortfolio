import React from "react"

import {
  Section,
  SectionDivider,
  SectionSubText,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents"
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListSubTitle,
  ListTitle,
} from "../Technologies/TechnologiesStyles"
// import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const experience = [
  {
    name: "York IE",
    role:"Software Engineer",
    data: "Dec, 2022 - Current",
    points: [
      "• As a software developer, I specialize in Python programming. In my recent role, I significantly expanded my skillset by diving into cloud computing using AWS Amplify, where I gained expertise in cloud-oriented technologies.",
      "• I actively contributed to AWS Amplify projects, harnessing its capabilities to create efficient solutions. Additionally, I honed my expertise in integrating third-party services like Shopify, Aftership, Zappier, and HubSpot into our projects, elevating our applications' functionality and scope.",
      "• My journey also involved exploring and learning incorporating various AWS services such as Lambda, S3, SNS, and SQS into our projects to achieve optimal results.",
    ],
  },
  {
    name: "Tridhya Tech PVT LTD",
    role:" Full Stack Developer",
    data: "Aug, 2021 - Dec, 2022",
    points: [
      "• As a full-stack Developer, I honed my skills in Django, DRF, and Python to create robust APIs.",
      "• I collaborated with cross-functional teams, utilized Git and GitHub for version control, and contributed to multiple projects. I quickly adapted to frontend technologies like React.js and Next.js, enhancing user interfaces and resolving issues.",
      "• My agile approach, code quality improvements, and adherence to project timelines were instrumental in the successful completion of various software projects.",
    ],
  },
]

const Experiences = () => (
  <Section>
    <SectionTitle>Work Experiences</SectionTitle>
    {experience.map((payload) => {
      return (
        <>
          <ListTitle>{payload?.name} </ListTitle>
          <ListSubTitle>{payload?.role}</ListSubTitle>
          <ListSubTitle>{payload?.data}</ListSubTitle>
          {payload?.points.map((data) => {
            return <ListParagraph>{data}</ListParagraph>
          })}
          <br />
          <br />
        </>
      )
    })}

    <SectionDivider />
  </Section>
)

export default Experiences
