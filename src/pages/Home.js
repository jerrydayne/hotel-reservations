import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';

import {Link} from 'react-router-dom';
import FeaturedRooms from '../components/FeaturedRooms';

function Home() {
    return (
        <>
        <Hero>
            <Banner 
                title="Luxurious Rooms"
                subtitle="Delux Rooms Starting At $299">
                <Link to="/rooms" className="btn-primary">
                    Our Rooms
                </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        </>
    )
}

export default Home
