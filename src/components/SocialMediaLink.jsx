import { SocialIcon } from 'react-social-icons';

const socialLinks = [
    { url: 'https://www.linkedin.com/in/salim-serhat-aka-32b98b318/', name: 'LinkedIn' },
    { url: 'https://github.com/salimdev3469', name: 'GitHub' },
];

export default function SocialLinks() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                alignItems: 'center',
            }}
        >
            {socialLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textDecoration: 'none',
                        color: '#333',
                    }}
                >
                    <SocialIcon
                        url={link.url}
                        style={{ height: 80, width: 80 }}
                        target="_blank"         // React-social-icons bazen bunu da ister
                        rel="noopener noreferrer"
                    />
                    <span
                        style={{
                            marginTop: '8px',
                            fontSize: '36px',
                            fontWeight: 'bold',
                        }}
                    >
                        {link.name}
                    </span>
                </a>
            ))}
        </div>
    );
}
