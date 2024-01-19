import React from 'react'
import './Home.css'

function Home() {
    return (
        <>
            <div className='home'>
                <div className="sec1">
                    <img src="Images/landscape.svg" alt=""/>
                    <div className='sec1Text'>
                        <h2>Download Now</h2>
                        <h3>Lorem Ipsum</h3>
                        <button>Download</button>
                    </div>
                </div>
                <div className="sec2">
                    <img src="Images\monkey.png" alt="" />
                    <p>Do it now!</p>
                </div>
            </div>
        </>
    )
}

export default Home
