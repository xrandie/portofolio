import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 14, text: 'Hackathons Completed'},
  { number: 5, text: 'Career Inspirations', },
  { number: 10, text: 'Project Collaborations', },
  { number: 2, text: 'Mentorship Programmes', }
];

const Acomplishments = () => (
 <Section>
   <SectionTitle>My Personal Achievements</SectionTitle>
   <Boxes>
     {data.map((card, index) =>(
       <Box key={index}> 
       <BoxNum>{card.number}+</BoxNum>
       <BoxText>{card.text}</BoxText>

       </Box>
     ))}
   </Boxes>
 </Section>
);

export default Acomplishments;
