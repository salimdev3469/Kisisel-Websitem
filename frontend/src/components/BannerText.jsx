import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function BannerText() {
    return (
        <div className="banner-text">
            <h1>Salim Serhat AKA</h1>
            <p>Full-Stack Yazılım Geliştirici</p>
            <TypeAnimation
                sequence={[
                    'Web teknolojileri için iletişime geçin.',
                    900,
                    'Mobil Sistemler için iletişime geçin.',
                    900,
                    'Bulut Sistemler için iletişime geçin.',
                    900,
                    'CRM/ERP çözümleri için iletişime geçin.',
                    900,
                ]}
                id='slogan'
                wrapper="span"
                speed={70}
                style={{ fontSize: '1.8em', display: 'inline-block', fontFamily: "Inter", }}
                repeat={Infinity}
            />
        </div>
    )
}

export default BannerText
