import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          Hey there, This is Vaibhav Patel. I am an Full Stack developer who also works on ReactJs, NextJs, & Django.
        </SectionText>
        <Button
          onClick={(e) => {
            e.preventDefault();
            // if()
            // window.location.href = "/files/resume.pdf";
            alert("Sorry , File Is Courrpted")
          }}
        >
          My Resume
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
