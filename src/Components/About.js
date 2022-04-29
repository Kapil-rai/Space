import React from 'react'
import "../Components/about.css"
export default function About() {
    return (
        <div style={{ position: "relative" }}>
            <img src={require("../images/earth.jpg")} alt="" ></img>
            <div className='abs'>
                <h2 >About</h2>
                <p >Explore is a space transportation service launched in the year 2047, which is open to public for their Intergalactic travels and Exploration.
                    Since it's establishment the company has sucessfully ventured 100000+ customers to Space Exploration Missions.We are a strong team of 50K+ members
                    across the galaxy.
                    No matter where each of us stands on this planet we call home, we all look up to the same place.
                    That’s why we believe space belongs to everyone: the adventurous, the audacious, and the curious.
                    When we witness the majesty and fragility of Earth from space, something inside us shifts. We believe this transformation will bring countless benefits to life on our beautiful planet.
                    When you secure your reservation to space, you gain access to our Future Astronaut community.
                    You’ll be connected to more than 700 pioneers from around the world who share a love of adventure and a passion for positive change. Prepare for your journey together with our program of incredible events and experiences.
                </p>
            </div>

        </div>
    )
}
