import React from 'react'
import './home.css'
import Cardone from './Card'
export default function Home() {
    return (
        <div>
            <div className='text'>
                <h2 style={{ marginTop: "6rem" }}>Earth</h2>
                <p>
                    Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.
                    <br />
                    Namesake
                    The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means “the ground.”
                    <br />
                    Potential for Life
                    Earth has a very hospitable temperature and mix of chemicals that have made life abundant here. Most notably, Earth is unique in that most of our planet is covered in liquid water, since the temperature allows liquid water to exist for extended periods of time. Earth's vast oceans provided a convenient place for life to begin about 3.8 billion years ago.
                    <br />
                    Some of the features of our planet that make it great for sustaining life are changing due to the ongoing effects of climate change. To find out more visit our sister website, climate.nasa.gov.
                    <br />
                    Size and Distance
                    With a radius of 3,959 miles (6,371 kilometers), Earth is the biggest of the terrestrial planets and the fifth largest planet overall.
                    <br />
                    From an average distance of 93 million miles (150 million kilometers), Earth is exactly one astronomical unit away from the Sun because one astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. This unit provides an easy way to quickly compare planets' distances from the Sun.

                    It takes about eight minutes for light from the Sun to reach our planet.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero magnam deserunt quibusdam eum. Eius consequuntur, alias libero eligendi repellat vel voluptatem quae, ullam impedit praesentium fugit. Optio porro neque amet placeat, asperiores sunt quae laboriosam tenetur tempora laudantium deserunt numquam esse dignissimos sapiente. Nobis reprehenderit corporis ex voluptate pariatur nisi blanditiis minus dolorem eum deleniti modi, id iste ullam?

                </p>
            </div>

            <div className='moons'>
                <Cardone />
                <Cardone />
                <Cardone />
            </div>

        </div>
    )
}
