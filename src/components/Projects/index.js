import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('Mern Projects');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to Telegram Bot. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'Mern Projects' ?
            <ToggleButton active value="Mern Projects" onClick={() => setToggle('Mern Projects')}>Mern Projects</ToggleButton>
            :
            <ToggleButton value="Mern Projects" onClick={() => setToggle('Mern Projects')}>Mern Projects</ToggleButton>
          }
          {/* <Divider />  */}
          {/* {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'Telegram Bot' ?
            <ToggleButton active value="Telegram Bot" onClick={() => setToggle('Telegram Bot')}>TELEGRAM BOT</ToggleButton>
            :
            <ToggleButton value="Telegram Bot" onClick={() => setToggle('Telegram Bot')}>TELEGRAM BOT</ToggleButton>
          } */}
          {/* <Divider /> */}
         
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'Mern Projects' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects