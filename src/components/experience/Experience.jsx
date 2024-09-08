import React from 'react'
import './experience.css'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What I Have Done</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div>
          <article className='experience'>
            <div className="experience__head">
          <h3>Tata Consultancy Services Ltd.</h3>
          <h5 className='text-light'>Software Developer</h5>
          </div>        
        <ul className="experience__list">
        <li>
          <p>
          Utilised Spring Tool Suite with Node.js and PostgreSQL to work on OneWind project for GE client and providing
results for top speed, power consumption, fuel consumption of WindMills through the application.
          </p>
          </li>
          <li>
          <p>
          Utilised Python Flask and Spring Tool Suite, for the API integration of HPCi EMPC project for GE client.
          </p>
          </li>
          <li>
          <p>
          Documentation of the whole application logic flow to the client side team post development, Provided KT sessions
          and support after project handover.
          </p>
          </li>  
          <li>
          <p>
          Acknowledged for delivering high-quality code within tight deadlines, contributing significantly to the overall
success of <strong>2 migration projects</strong> from Predix to AWS
          </p>
          </li>  
          <li>
          <p>
          Effectively collaborated with team members, cross functional tech, product teams and stakeholders, fostering a
positive and productive work environment.
          </p>
          </li>  
        </ul>

        </article>
        </div>
        <div >
        <article className='experience'>
          <div className="experience__head">
        <h3>Axtria India Private Limited</h3>
        <h5 className='text-light'>Software Engineer</h5>
        </div>
       
        <ul className="experience__list">
          <li>
          <p>
          Developed and upheld high-quality, reliable, and testable code for <strong>Marketing IQ and Insightsmax IQ tools</strong>,
ensuring <strong>100%</strong> visual accuracy
          </p>
          </li>
          <li>
          <p>
          Optimised application performance by <strong>eliminating inline styling and function calls</strong>, and <strong>refactoring useEffect
          hooks with useMemo</strong> to handle array and object dependencies. This resulted in a reduction of page load time
in the modelling module from <strong>3 seconds to 1.2 seconds</strong>.
          </p>
          </li>
          <li>
          <p>
          Experienced in translating product requirements into practical web solutions, improving the adherence rate to
design principles from <strong>72% to 91%</strong>. Designed architectures that align with current needs and anticipate future
requirements.
          </p>
          </li>
          <li>
          <p>
          Performed an in-depth code analysis, reducing Sonar bugs from <strong>28% to 2%</strong> and cutting down code smells from 
          <strong> 3.2k to 1.4k</strong>.
          </p>
          </li>
          <li>
          <p>
          Collaborated with cross-functional tech and product teams to seamlessly integrate workflows from the <strong>decision
science team</strong>, delivering targeted <strong>marketing insights</strong> to users based on their channels and selections.
          </p>
          </li>
          <li>
          <p>
          Increased test coverage in the optimization module from <strong>21.6% to 74.8%</strong> for legacy components and achieved
          <strong> 100% coverage</strong> for new components.
          </p>
          </li>
          <li>
          <p>
          Delivered comprehensive frontend production support, meeting <strong>100% </strong>of diverse client requirements and resolving
technical bottlenecks. Advocated for and implemented process improvements, enhancing workflow efficiency and
effectiveness.
          </p>
          </li>
          <li>
          <p>
          Enforced coding and <strong>code review</strong> rules, to maintain the optimisations incorporated.
          </p>
          </li>
        </ul>
        </article>
        </div>
      </div>
    </section>
  )
}

export default Experience