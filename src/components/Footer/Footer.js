import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
       <LinkColumn>
         <LinkTitle>Call Me</LinkTitle>
          <LinkItem href="tel:011-410-9808">011-410-9808</LinkItem>
       </LinkColumn>
       <LinkColumn>
         <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:nzaih18@gmail.com">nzaih18@gmail.com</LinkItem>
       </LinkColumn>
     </LinkList>
     <SocialIconsContainer>
       <CompanyContainer>
         <Slogan>
           Biulding Responsive Web Apps for an Unforgettable Web EXperience.
         </Slogan>
       </CompanyContainer>
       <SocialContainer>
       <SocialIcons href= "https://github.com">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href= "https://linkedin.com">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href= "https://twitter.com">
        <AiFillTwitterCircle size="3rem"/>
      </SocialIcons>
      </SocialContainer>
     </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
