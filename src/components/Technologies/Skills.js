import { DiDjango, DiTerminal, DiPython, DiReact } from "react-icons/di";
import {
  SiFirebase,
  SiGit,
  SiDjango,
  SiLeetcode,
  SiNextDotJs,
  SiJavascript,
  SiEthereum,
} from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "dsa",
    Component: SiLeetcode,
    title: "DSA",
    Description: () => <>Problem Solving in LeetCode Using Python.</>,
  },
  {
    slug: "django",
    Component: DiDjango,
    title: "Django",
    Description: () => <>I work on Project Using Python & Django .</>,
  },
  {
    slug: "reactjs",
    Component: DiReact,
    title: "React",
    Description: () => (
      <>
        I have also work on Project as Full Stack Developer Using ReactJs &
        Django .
      </>
    ),
  },
  {
    slug: "nextjs",
    Component: SiNextDotJs,
    title: "NextJs",
    Description: () => (
      <>
        I have also work on Project as Full Stack Developer Using NextJs &
        Django .
      </>
    ),
  },
  {
    slug: "javascript",
    Component: SiJavascript,
    title: "JavaScript",
    Description: () => <>I have also do Code using Vanilla JavaScript.</>,
  },

  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => (
      <>I have used Firebase for auth, database & analytics in my apps.</>
    ),
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => (
      <>Git is a tool that I use every day. I use GitHub for pushing my code.</>
    ),
  },
  {
    slug: "Ethereum",
    Component: SiEthereum,
    title: "Ethereum",
    Description: () => <>Also Anthusistic About WEB3, solidity.</>,
  },
];
