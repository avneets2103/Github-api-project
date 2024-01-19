import React from 'react'
import './About.css'

function About() {
    return (
        <>
            <div className='about'>
                <div className="about1">
                    <img src="Images/cat.jpg" alt=""/>
                    <div className='info1'>
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facilis quaerat obcaecati, ipsa ab adipisci atque distinctio optio, earum quo tempora! Mollitia ab ullam fugiat molestias nesciunt excepturi quas eos quod distinctio quidem? Corrupti minus voluptatem dolorum error neque perspiciatis.
                        </p><br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facilis quaerat obcaecati, ipsa ab adipisci atque distinctio optio, earum quo tempora! Mollitia ab ullam fugiat molestias nesciunt excepturi quas eos quod distinctio quidem? Corrupti minus voluptatem dolorum error neque perspiciatis.</p>
                    </div>
                </div>
                <div className="about1">
                    <div className='info2'>
                        <h2>How we do it? </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facilis quaerat obcaecati, ipsa ab adipisci atque distinctio optio, earum quo te
                        </p><br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facilis quaerat obcaecati, ipsa ab adipisci atque distinctio optio, earum quo tempora! Mollitia ab ullam fugiat molestias nesciunt excepturi quas eos quod distinctio quidem? Corrupti minus voluptatem dolorum error neque perspiciatis.</p>
                    </div>
                    <img src="Images/work.jpg" alt=""/>
                </div>  
            </div>
        </>
    )
}

export default About
