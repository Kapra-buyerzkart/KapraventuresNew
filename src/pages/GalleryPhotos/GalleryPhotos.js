import React, { useState, useEffect, useCallback } from "react";
import "./GalleryPhotos.css";
import { useLocation } from "react-router-dom";

const GalleryPhotos = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const location = useLocation();
    const { title, images = [] } = location.state || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        document.body.classList.toggle('modal-open', selectedIndex !== null);
    }, [selectedIndex]);

    const handleKeyDown = useCallback(
        (e) => {
            if (selectedIndex !== null) {
                if (e.key === "ArrowRight") {
                    if (selectedIndex < images.length - 1) {
                        setSelectedIndex((prevIndex) => prevIndex + 1);
                    }
                } else if (e.key === "ArrowLeft") {
                    if (selectedIndex > 0) {
                        setSelectedIndex((prevIndex) => prevIndex - 1);
                    }
                } else if (e.key === "Escape") {
                    setSelectedIndex(null);
                }
            }
        },
        [selectedIndex, images.length]
    );

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <div className="gallery-photos-container">
            <h2 className="gallery-photos-title">{title}</h2>
            <div className="gallery-photos-grid">
                {images.map((img, index) => (
                    <img
                        key={img.id}
                        src={img.src}
                        alt={`Gallery ${index}`}
                        className="gallery-photos-item"
                        onClick={() => setSelectedIndex(index)}
                    />
                ))}
            </div>
            {selectedIndex !== null && (
                <div className="gallery-photos-fullscreen-overlay" onClick={() => setSelectedIndex(null)}>
                    <img
                        src={images[selectedIndex].src}
                        alt="Fullscreen"
                        className="gallery-photos-fullscreen-image"
                    />
                </div>
            )}
        </div>
    );
};

export default GalleryPhotos;
