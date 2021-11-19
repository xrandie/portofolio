import React from 'react';
import { DiFirebase, DiJavascript, DiReact, DiUikit, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Tech</SectionTitle>
    <SectionText>
      I love working with Javascript & Using the latest frameworks.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size = "3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            I'm Experienced with NextJs & React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size = "3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            I'm Experienced with Node.Js, PostgreSQL & MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiUikit size = "3rem" />
        <ListContainer>
          <ListTitle>UI/UX Designer</ListTitle>
          <ListParagraph>
            Figma UI/UX Udemy certification.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>

  </Section>
);

export default Technologies;
