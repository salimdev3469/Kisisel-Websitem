import React from "react";
import Box from "@mui/material/Box";

// import local images properly
import reactLogo from "../assets/react.svg";
import microLogo from "../assets/micro.png";
import mongoLogo from "../assets/mongodb.svg";
import flutterLogo from "../assets/flutter.svg";

const images = [
    "https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_.NET_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
    "https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png",
    reactLogo,
    microLogo,
    mongoLogo,
    flutterLogo
];

export default function Carousel() {
    return (
        <Box
            sx={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                width: "100%",
                py: 2,
            }}
        >
            <Box
                sx={{
                    display: "inline-flex",
                    animation: "scroll 30s linear infinite",
                }}
            >
                {[...images, ...images].map((src, index) => (
                    <Box
                        key={index}
                        component="img"
                        src={src}
                        alt={`slide-${index}`}
                        sx={{
                            height: 80,
                            mx: 2,
                            objectFit: "contain",
                        }}
                    />
                ))}
            </Box>

            {/* Inline keyframes */}
            <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
        </Box>
    );
}
