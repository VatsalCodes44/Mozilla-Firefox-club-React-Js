import React from 'react'
import { Link } from 'react-router-dom'
function Community() {
  return (
    <div className='w-full h-max text-white font-bold font-serif flex justify-center my-10'>
        <div className='bg-white w-60 h-45 p-4 rounded-xl text-center'>
            <div className='bg-black p-2 rounded-2xl my-.5 mx-.5'>
            <Link to="https://www.mozillafirefoxvitb.com/">Official Site</Link>
            </div>
            <div className='bg-black p-2 rounded-2xl my-4'>
                <Link to="https://www.instagram.com/mozillafirefox.vitbhopal/">Instagram</Link>
            </div>
            <div className='bg-black p-2 rounded-2xl my-4'>
                <Link to="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQF05E14dnCLhgAAAZTBtx3YN81MyLdzfFiwsomuf9V59ejrREFP-eH4TATOe-DyNVozszDGLrHP99AqUWFYLBDSbdfdJUNJGTkMsBU5rCRFgSQfizCcjucatrs3H1O6Lm4LOR8=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fmozilla-firefox-club-vit-bhopal%2F">Linked in</Link>
            </div>
        </div>
    </div>
  )
}

export default Community