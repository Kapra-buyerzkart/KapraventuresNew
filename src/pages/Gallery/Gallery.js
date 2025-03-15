import React, { useState, useEffect } from "react";
import "./Gallery.css";
import { useLocation } from "react-router-dom";
import GalleryImages from "../../constants/GalleryImages";


const images = [
    { id: 1, src: GalleryImages.Image1, alt: "Office Celebration 1" },
    { id: 2, src: GalleryImages.Image2, alt: "Office Celebration 2" },
    { id: 3, src: GalleryImages.Image3, alt: "Office Celebration 3" },
    { id: 4, src: GalleryImages.Image4, alt: "Office Celebration 4" },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        // Lock scroll when fullscreen overlay is open
        if (selectedImage) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [selectedImage]);

    return (
        <div className="gallery-container">
            <h2 className="gallery-title">Gallery</h2>
            <div className="gallery-grid">
                {images.map((img, index) => (
                    <img
                        key={img.id}
                        src={img.src}
                        alt={`Gallery ${index}`}
                        className="gallery-item"
                        onClick={() => setSelectedImage(img.src)}
                    />
                ))}
            </div>
            {selectedImage && (
                <div className="fullscreen-overlay" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="Fullscreen" className="fullscreen-image" />
                </div>
            )}
        </div>
    );
};

export default Gallery;
