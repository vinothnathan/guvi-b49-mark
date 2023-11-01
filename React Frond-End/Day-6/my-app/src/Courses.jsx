import React from 'react'
import { useParams }  from 'react-router-dom'

function Courses() {
    const {name} = useParams();

    const coursesInfo = {
        All : 'AllCourses [FullStackDevelopment, DataScience, CyberSecurity, Career]',
        FullStackDevelopment : 'Full stack development is the process of designing, creating, testing, and deploying a complete web application from start to finish.',
        DataScience: 'Data science is the study of data to extract meaningful insights for business.mathematics, statistics, artificial intelligence, and computer engineering to analyze large amounts of data.',
        CyberSecurity: 'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.',
        Career:'A career usually uses your skills and talents while providing personal fulfillment and a sense of purpose.',
    };

    const info = coursesInfo[name];
  return (
    <div>
        <h2>{name}</h2>
        <p>{info}</p>
    </div>
  )
}

export default Courses