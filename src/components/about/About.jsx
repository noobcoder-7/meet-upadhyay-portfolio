import React from 'react'
import './about.css' 
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaIndustry} from 'react-icons/fa'
import {BsFolderFill} from 'react-icons/bs'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About ME" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>3+ Years Working</small>
          </article>
          <article className='about__card'>
          <BsFolderFill className='about__icon'/>
          <h5>Projects | Products</h5>
          <div className='projectsContent'>
          <small>OneWind(TCS)</small>
          <small>HPCi EMPC(TCS) </small>
          <small>MarketingIQ(Axtria)</small>
          <small>InsightsMaxIQ(Axtria)</small>
          </div>
          </article>
          <article className='about__card'>
          <FaIndustry className='about__icon'/>
          <h5>Companies</h5>
          <div className='companiesContent'>
          <small>Tata Consultancy Services</small>
          <small>Axtria India Private Ltd</small>
          </div>
          </article>
        </div>
        <p>Proactive Software Engineer with extensive experience in designing, developing, and testing high-quality
software solutions. Proficient in multiple programming languages with a solid foundation in
object-oriented design and agile methodologies. Demonstrated expertise in writing reliable, efficient, and
testable code, and providing comprehensive code reviews and documentation. Skilled in developing
scalable architectures, optimizing performance, and addressing technical problems effectively. Proven
ability to collaborate with cross-functional teams, manage tasks with urgency, and contribute to a culture
of continuous improvement and innovation. Eager to drive impactful projects and enhance skills in
problem-solving and software development.</p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About