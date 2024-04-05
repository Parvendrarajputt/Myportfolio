import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './CodingProfileStyle'
import CodingProfileCards from '../Cards/CodingProfileCards'
import { codingProfiles } from '../../data/constants'


const CodingProfiles = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="codingProfiles">
      <Wrapper>
        <Title>Coding Profiles</Title>
        <Desc>
          I have practiced and still doing so many DSA and problem solving based questions on different plateforms. 
        </Desc>
       
        <CardContainer>
          {toggle === 'all' && codingProfiles
            .map((codingProfile) => (
              <CodingProfileCards codingProfile={codingProfile} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {codingProfiles
            .filter((item) => item.category == toggle)
            .map((codingProfile) => (
              <CodingProfileCards codingProfile={codingProfile} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default CodingProfiles