import React from 'react';
import '../assets/main.css';
import { motion } from "framer-motion";

function BannerLink({ text, content, delay, targetId }) {
    const handleClick = () => {
        const element = document.getElementById(targetId);
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset - 16;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <motion.li
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: delay }}
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        >
            {text}
            <p>{content}</p>
        </motion.li>
    );
}

export default BannerLink;
