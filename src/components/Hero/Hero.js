import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello I'm Nzai<br/>
        I design & Build  beautiful User Interfaces
      </SectionTitle>
      <SectionText>
        I'm a freelancer Web Developer and Web Designer based in Nairobi, Kenya. I'm highly experienced in building custom Websites and Web Apps using React js
      </SectionText>
      <Button onClick={() => window.location= "#tech" }>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;