import React, { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";
// import { KapraContext } from "../../context/KapraContext";
import AlertModal from "../AlertModal/AlertModal";
import Loader from "../Loader/Loader";

const Contact = () => {
    const form = useRef();
    // const { setLoading } = useContext(KapraContext);

    const [modalMessage, setModalMessage] = useState(""); // State to store modal message
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const [loading, setLoading] = useState(false)

    const sendEmail = async (e) => {
        e.preventDefault();
        try {
            // You can set loading here if you want to show the loader
            setLoading(true);

            // Await the emailjs call
            await emailjs.sendForm(
                'service_7jl9vzt',
                'template_lp69qwh',
                form.current,
                'OJYb3dLrdEjTQ1kRt'
            );

            // If successful, set the modal message and show it
            setModalMessage('Message sent successfully!');
            setShowModal(true);

            // Reset the form after submission
            // form.current.reset();
            // setLoading(false);
        } catch (error) {
            setModalMessage('Failed to send message. Please try again.');
            setShowModal(true);
            console.error('Error:', error.text); // Log the error message for debugging
            // setLoading(false);
        } finally {
            setLoading(false)
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>{
            loading ? <Loader /> : (
                <section id="contact" className="contact">
                    {/* {console.log("showModal", showModal)}
                    {console.log("modalMessage", modalMessage)} */}
                    <h2>CONTACT US</h2>
                    <form ref={form} className="contact-form" onSubmit={sendEmail}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="from_name"
                                name="from_name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="from_email"
                                name="from_email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="from_phone"
                                name="from_phone"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="from_message"
                                name="from_message"
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>

                    {showModal && <AlertModal message={modalMessage} onClose={closeModal} />}
                </section>
            )
        }
        </>
    );
};

export default Contact;
