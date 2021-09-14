import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello My Name Is Jover <br />
        Welcome To My Personal <br />
        Portfolio
      </SectionTitle>
      <SectionText>
        I am a stupid 16 year old trying to learn Programming, I started learning on Febuary 2021 and still learning today. 
      </SectionText>
      <Button onClick={() => window.location = 'https://codepen.io/NoobieProgrammer69'}>More From Me</Button>
    </LeftSection>
  </Section>
 
);

export default Hero;