import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import RoomsContainer from '../components/RoomContainer';

function Rooms() {
    return (
        <div>
            <Hero hero="roomsHero">
                <Banner
                    title="Our Rooms"
                    subtitle="Never Below Expectations"
                >
                    <Link to="/" className="btn-primary">
                        Return Home
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </div>
    )
}

export default Rooms
