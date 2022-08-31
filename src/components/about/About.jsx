import React from "react"
import './about.css'
import ME from '../../assets/passport_photo.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know Me</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>3rd Year Bachelor of Software Engineering (Honours) Student</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Clients</h5>
                            <small>0</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>4 Projects</small>
                        </article>
                    </div>
                    <p>
                        Highly motivated and inspired to continuously sharpen my skills and grow professionally in data science and other data related skills such as machine learning and data engineering. 
                        Always ready to develop my programming and soft skills in internship training and online courses, working with other like-minded individuals in inspiring the world on how influential Big Data is in developing accurate theories and putting into place more effective solutions for countless problems globally. 
                        Extremely keen on working in teams, collaborating and interacting with team members in brainstorming creative and innovative solutions, thus encouraging the birth of practical and profitable ideas.
                    </p>

                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About