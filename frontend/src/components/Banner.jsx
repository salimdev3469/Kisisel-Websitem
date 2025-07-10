import React from 'react';
import '@/assets/main.css';
import BannerLink from './BannerLink';
import BannerText from './BannerText';

function Banner() {
    return (
        <section className='banner'>
            <BannerText />

            <div className="banner-links">
                <BannerLink
                    text="Projelerim"
                    content="Projelerimi görüntülemek için tıklayın."
                    delay={0.2}
                    targetId="second"
                />

                <BannerLink
                    text="Deneyimlerim"
                    content="Deneyimlerimi görüntülemek için tıklayın."
                    delay={0.4}
                    targetId="third"
                />

                <BannerLink
                    text="İletişim"
                    content="İletişim bilgilerimi görmek için tıklayın."
                    delay={0.6}
                    targetId="forth"
                />
            </div>
        </section>
    )
}

export default Banner;
