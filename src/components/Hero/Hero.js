import React from "react"

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
} from "../../styles/GlobalComponents"
import Button from "../../styles/GlobalComponents/Button"
import { LeftSection } from "./HeroStyles"

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          Hello, I'm Vaibhav Patel, a Full Stack developer proficient in
          ReactJs, NextJs, and Django.
        </SectionText>
        <Button
          onClick={(e) => {
            const resumeUrl = "/files/vaibhav_patel.pdf"
            fetch(resumeUrl)
              .then((response) => response.blob())
              .then((blob) => {
                const url = window.URL.createObjectURL(new Blob([blob]))
                const a = document.createElement("a")
                a.href = url
                a.download = "vaibhav_patel.pdf"
                document.body.appendChild(a)
                a.click()
                document.body.removeChild(a)
              })
              .catch(() => {
                alert("Sorry, the file is corrupted or not available.")
              })
            e.preventDefault()
          }}
        >
          My Resume
        </Button>
      </LeftSection>
    </Section>
  </>
)

export default Hero
