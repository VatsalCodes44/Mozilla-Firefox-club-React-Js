import React from 'react'

function About() {
  return (
    <div className='bg-black w-full h-max text-white p-5 '>
      <h1 className='font-bold text-lg mt-10 mb-2'>Mozilla Firefox Club: Empowering Open Source and Web Development</h1>
      <p className='p-5'>The Mozilla Firefox Club is an initiative dedicated to fostering a community 
        of open-source enthusiasts, web developers, and technology advocates. With a 
        strong emphasis on the principles of an open web, this club serves as a hub for 
        individuals passionate about web technologies, privacy, and collaborative 
        development.
      </p>
      <h1 className='font-bold text-lg mt-10 mb-2'>What is the Mozilla Firefox Club?</h1>
      <p className='p-5'>
      Mozilla Firefox Club is a student-driven organization associated with Mozilla, a 
      globally recognized open-source software foundation. The club brings together students, 
      developers, and tech enthusiasts who want to contribute to the open-source ecosystem, 
      learn web development skills, and advocate for a free and accessible internet.
      </p>
      <h1 className='font-bold text-lg mt-10 mb-2'>Objectives of Mozilla Firefox Club</h1>
      <div className='p-5' >
        <ul>
        <li>
          <h2 className='font-bold text-md'>Promoting Open Source –</h2>
          <p className='p-2'>Encouraging students and developers to contribute to Mozilla’s open-source 
            projects, including Firefox, MDN Web Docs, and Rust.</p>
        </li>
        <li>
          <h2 className='font-bold text-md'>Web Development Training</h2>
          <p className='p-2'>Hosting workshops, boot camps, and hackathons focused on HTML, CSS, 
            JavaScript, and modern frameworks.
          </p>
        </li>
        <li>
          <h2 className='font-bold text-md'>Privacy and Security Awareness –</h2>
          <p className='p-2'>Educating users about online privacy, data security, and Mozilla’s 
            initiatives like Firefox Focus and VPN.</p>
        </li>
        <li>
          <h2 className='font-bold text-md'>Community Collaboration –</h2>
          <p className='p-2'>Building a network of like-minded individuals who can work together 
            on open-source projects and contribute to Mozilla’s mission.</p>
        </li>
      </ul>
      </div>
      

    </div>
  )
}

export default About