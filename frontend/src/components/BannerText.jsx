import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function BannerText() {
    return (
        <div className="banner-text">
            <h1>Salim Serhat AKA</h1>
            <p>Full-Stack Yazılım Geliştirici</p>
            <TypeAnimation
                sequence={[
                    'Web ve Mobil Sistemler için buradayız.',
                    900,
                    'Gömülü Sistemler için buradayız.',
                    900,
                    'Dağıtık Sistemler için buradayız.',
                    900,
                    'Bulut Sistemler için buradayız.',
                    900,
                ]}
                id='slogan'
                wrapper="span"
                speed={60}
                style={{ fontSize: '2em', display: 'inline-block', fontFamily: "Inter", }}
                repeat={Infinity}
            />
        </div>
    )
}

export default BannerText
