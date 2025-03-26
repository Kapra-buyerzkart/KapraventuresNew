import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./GalleryTitles.css";
import { GoldInaugurationImages, HoliImages } from "../../constants/GalleryImages";

const GalleryTitles = () => {
    const navigate = useNavigate();

    const location = useLocation();

    const titles = [
        {
            id: 1,
            name: "Holi Celebration 2025",
            images: [
                { id: 1, src: HoliImages.Holi1, alt: "Office Celebration Image" },
                { id: 2, src: HoliImages.Holi2, alt: "Office Celebration Image" },
                { id: 3, src: HoliImages.Holi3, alt: "Office Celebration Image" },
                { id: 4, src: HoliImages.Holi4, alt: "Office Celebration Image" },
                { id: 5, src: HoliImages.Holi5, alt: "Office Celebration Image" },
                { id: 6, src: HoliImages.Holi6, alt: "Office Celebration Image" },
            ],
        },
        {
            id: 2,
            name: "Inauguration Ceremony of Kapra Gold and Diamonds, Thripunithura",
            images: [
                { id: 1, src: GoldInaugurationImages.GoldInauguration1, alt: "Office Celebration Image" },
                { id: 2, src: GoldInaugurationImages.GoldInauguration2, alt: "Office Celebration Image" },
                { id: 3, src: GoldInaugurationImages.GoldInauguration3, alt: "Office Celebration Image" },
                { id: 4, src: GoldInaugurationImages.GoldInauguration4, alt: "Office Celebration Image" },
                { id: 5, src: GoldInaugurationImages.GoldInauguration5, alt: "Office Celebration Image" },
                { id: 6, src: GoldInaugurationImages.GoldInauguration6, alt: "Office Celebration Image" },
                { id: 7, src: GoldInaugurationImages.GoldInauguration7, alt: "Office Celebration Image" },
                { id: 8, src: GoldInaugurationImages.GoldInauguration8, alt: "Office Celebration Image" },
                { id: 9, src: GoldInaugurationImages.GoldInauguration9, alt: "Office Celebration Image" },
                { id: 10, src: GoldInaugurationImages.GoldInauguration10, alt: "Office Celebration Image" },
            ],
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="gallery-titles-container">
            <h2 className="gallery-titles-title">Gallery</h2>
            <div className="gallery-titles-sections">
                {titles.map((title) => (
                    <div key={title.id} className="gallery-titles-section">
                        <img src={title.images[0].src} alt={title.images[0].alt} className="gallery-titles-image" />
                        <h3 className="gallery-titles-name">{title.name}</h3>
                        <button
                            onClick={() => navigate('/gallery-events/photos', { state: { title: title.name, images: title.images } })}
                            className="gallery-titles-button"
                        >Click Here</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryTitles;