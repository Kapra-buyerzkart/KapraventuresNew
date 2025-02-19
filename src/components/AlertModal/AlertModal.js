import React from "react";
import "./AlertModal.css";

const AlertModal = ({ message, onClose, color = "black" }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h3 style={{ color }}>{message}</h3>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default AlertModal;
