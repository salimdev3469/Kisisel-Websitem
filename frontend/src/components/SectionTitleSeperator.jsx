import React from 'react'
import '../assets/main.css'

function SectionTitleSeperator({ text, id }) {
    return (
        <h3 id={id} className='section-title'>
            {text}
        </h3>
    )
}

export default SectionTitleSeperator
