import React from "react";
import Box from "@mui/material/Box";

const images = [
    "https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_.NET_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
    "/src/assets/react.svg",
    "https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png",
    "/src/assets/micro.png",
    "/src/assets/mongodb.svg",
    "/src/assets/flutter.svg"
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
