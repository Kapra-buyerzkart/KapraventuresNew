import React, { useState, useEffect } from "react";
import "./GalleryPhotos.css";
import { useLocation } from "react-router-dom";

const GalleryPhotos = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const location = useLocation();
    const { title, images } = location.state || {};
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        // Lock scroll when fullscreen overlay is open
        if (selectedImage) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [selectedImage]);

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
                        onClick={() => setSelectedImage(img.src)}
                    />
                ))}
            </div>
            {selectedImage && (
                <div className="gallery-photos-fullscreen-overlay" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="Fullscreen" className="gallery-photos-fullscreen-image" />
                </div>
            )}
        </div>
    );
};

export default GalleryPhotos;
