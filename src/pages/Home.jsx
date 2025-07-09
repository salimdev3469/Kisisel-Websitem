import React from 'react'
import Banner from '../components/Banner'
import SectionTitleSeperator from '../components/SectionTitleSeperator';
import Carousel from '../components/Carousel';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import '../assets/main.css';
import ContactForm from '../components/Contact';
import SelectActionCard from '../components/SocialMediaLink';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <SectionTitleSeperator text="Çözüm Sunduğum Alanlar" id="first" />
            <Carousel />
            <SectionTitleSeperator text="Projelerim" id="second" />
            <Projects />
            <SectionTitleSeperator text="Deneyimlerim" id="third" />
            <Timeline />
            <SectionTitleSeperator text="İletişim ve CV" id="forth" />
            <section id="contact">
                <ContactForm />
                <SelectActionCard />
            </section>
            <Footer />
        </>
    )
}

export default Home
