import React from 'react';
// Assume you will use an external map service (like Google Maps embed)
// import ContactMap from './ContactMap'; 
import './MainContact.css';

const ContactUs = () => {
    // Your defined contact information
    const contactInfo = {
        email: 'info@doubledaypublishers.com',
        phone: '(929) 322-1084',
        location: 'Plano City, Texas',
    };

    return (
        // Main container with a class for full-width professional styling
        <section className="contact-section">
            <div className="contact-container">
                
                {/* === COLUMN 1: INTRO & CONTACT DETAILS (The Luxury Info Panel) === */}
                <div className="contact-details-panel">
                    <h2 className="contact-details-title">
                        Connect with Our Team
                    </h2>
                    
                    <h3 className="contact-subtitle">
                        Begin Your Confidential Literary Consultation
                    </h3>
                    
                    <p className="contact-intro-text">
                        Your story deserves professional attention. Reach out today to discuss your project requirements, goals, and timeline. We ensure all inquiries are reviewed and handled with the utmost discretion.
                    </p>
                    
                    {/* Direct Contact List */}
                    <div className="contact-list">
                        <div className="contact-item">
                            <span className="contact-icon">📧</span>
                            <div className="contact-info">
                                <h4>Email Correspondence</h4>
                                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <span className="contact-icon">📞</span>
                            <div className="contact-info">
                                <h4>Direct Line</h4>
                                <a href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`}>{contactInfo.phone}</a>
                                <p className="contact-hours">Available Monday – Friday</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <span className="contact-icon">📍</span>
                            <div className="contact-info">
                                <h4>Headquarters</h4>
                                <p>{contactInfo.location}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* === COLUMN 2: CONTACT FORM (The Functional Input Area) === */}
                <div className="contact-form-panel">
                    <form className="luxury-contact-form">
                        
                        {/* Form Heading */}
                        <h4 className="form-header">Inquire About Your Project</h4>
                        
                        {/* Name Field */}
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        
                        {/* Email Field */}
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" required />
                        </div>

                        {/* Inquiry Type (Professional Qualifier) */}
                        <div className="form-group">
                            <label htmlFor="inquiry">Inquiry Type</label>
                            <select id="inquiry" name="inquiry" required>
                                <option value="" disabled selected>Select a Service</option>
                                <option value="ghostwriting">Ghostwriting</option>
                                <option value="editing">Editing & Manuscript Review</option>
                                <option value="branding">Author Branding & Marketing</option>
                                <option value="general">General Inquiry</option>
                            </select>
                        </div>
                        
                        {/* Message Field */}
                        <div className="form-group">
                            <label htmlFor="message">Project Brief / Message</label>
                            <textarea id="message" name="message" rows="3" required></textarea>
                        </div>
                        
                        {/* Submit Button */}
                        <button type="submit" className="submit-button">
                            Schedule Consultation
                        </button>
                        
                        <p className="privacy-note">
                            By submitting, you agree to our <a href="/privacy">Privacy Policy</a>.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;