import React, { useEffect, useState } from "react";
import "./WebsLeadsInfo.css";
import ToniVideo from "../../assets/services/ToniVideo.jpg";

export const WebsLeadsInfo = () => {
    const [isMobile, setIsMobile] = useState(
        window.innerWidth / window.innerHeight <= 3 / 4
    );

    // Function to handle window resize events and determine if the screen has a mobile-like (vertical) or desktop-like (horizontal) aspect ratio
    const handleResize = () => {
        setIsMobile(window.innerWidth / window.innerHeight <= 3 / 4);
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            className={`websandleads-container ${
                isMobile ? "websandleads-container-mobile" : ""
            }`}
        >
            <img
                src={ToniVideo}
                alt="Toni video"
                className="websandleads-video"
            />

            <div>
                <p className="websandleads-title">
                    Aumenta tu visibiliad y tus ventas
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    impedit nihil odio fuga aliquam voluptas, et culpa vitae
                    cupiditate quam, neque sunt dicta quibusdam ad quaerat
                    deleniti ipsam ullam? Maiores?
                </p>
                <ul className="websandleads-advantajes">
                    <li>ventaja 1</li>
                    <li>ventaja 2</li>
                    <li>ventaja 3</li>
                </ul>
            </div>
        </div>
    );
};
