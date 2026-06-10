// src/components/HeroSection.jsx
import React, { useState } from 'react';
import './HeroSection.css';
import './HeroSectionAnimation.css';
import useIntersectionObserver from '../hooks/UserObservationSection';

const HeroSection = () => {
    // State for form submission feedback and control
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const [heroRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Prevent multiple submissions
        if (isSubmitting) return;

        setIsSubmitting(true);
        setSubmissionMessage(''); // Clear previous messages
        setIsError(false);

        const form = e.target;
        const formData = new FormData(form);
        
        // 🛑 CRITICAL FIX: Convert FormData to JSON object for PHP script
        const data = {};
        formData.forEach((value, key) => (data[key] = value));

        // URL based on your cPanel structure: /ddp/send-mail.php
        // Using a relative path is good practice.
        const phpUrl = "https://doubledaypublisher.com/ddp/send-mail.php";

        try {
            const response = await fetch(phpUrl, {
                method: 'POST',
                // 🛑 CRITICAL: We MUST set the Content-Type header to 'application/json'
                // and send the JSON stringified data to match the PHP backend.
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), 
            });

            // The PHP script sends a JSON response, regardless of success or failure.
            const result = await response.json();
            
            if (response.ok && result.success) {
                // Success (HTTP 200 and result.success = true)
                setSubmissionMessage(result.message || 'Thank you! Your request has been received.');
                form.reset(); // Clear the form fields on success
            } else {
                // Error from the PHP script (e.g., validation failed, or mailer error)
                setIsError(true);
                setSubmissionMessage(result.message || 'Submission failed. Please try again.');
            }

        } catch (error) {
            // Network or fetch error (e.g., server unreachable, CORS issue)
            setIsError(true);
            setSubmissionMessage('A network error occurred. Please check your URL and console for details.');
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            ref={heroRef}
            className={`hero-container hero-top-adjust ${isVisible ? 'is-visible' : ''}`}
        >
            {/* Left Content */}
            <div className="hero-content">
                <h1 className="reveal-item fade-up hero-title">
                    Professional Book Writing Services!
                </h1>
                <p className="reveal-item fade-up hero-subtitle">
                    We create masterpieces and help you become a bestseller.
                </p>

                <p className="reveal-item fade-up hero-description">
                    Our book writing service is dedicated to helping authors turn their dreams
                    into published reality. Are you one of the dreamers? Allow us to transform
                    your dreams into reality with the expertise of our professional book writers!
                    Our <a href="/ghost-writing" className="ghost-link">Ghost book writing services</a> aren't
                    limited to any genre or style.
                </p>

                <div className="reveal-item fade-up main-hero-buttons">
                    <a href="tel:+19293221084" className="main-home-btn main-btn-primary">
                        Call Now
                    </a>

                    <a href="/contact-us" className="main-home-btn main-btn-secondary">
                        Get Free Consultation
                    </a>
                </div>
            </div>

            {/* Right Form */}
            <div className="hero-form-wrapper reveal-item fade-in-stagger small-form">
                <div className="hero-discount-badge">
                    <span className="hero-discount-percent">50%</span>
                    <span className="hero-discount-text">off</span>
                    <p className="hero-discount-brief">
                        Fill Out This Brief Form To Get Your <span className="bold">Discount Reserved</span>
                    </p>
                </div>

                <form className="hero-form" onSubmit={handleSubmit}>
                    {/* Inputs now have name attributes for PHP */}
                    <input type="text" placeholder="Full Name" className="form-input" name="fullName" required />
                    <input type="email" placeholder="Email" className="form-input" name="email" required />
                    
                    {/* PHONE REMOVED */}

                    <textarea placeholder="Talk About Your Project" rows="4" className="form-textarea" name="projectMessage" required></textarea>

                    <button 
                        type="submit" 
                        className="btn hero-btn-submit"
                        disabled={isSubmitting} // Disable during submission
                    >
                        {isSubmitting ? 'Sending...' : 'Lets Talk To An Expert!'}
                    </button>

                    {/* Submission Feedback Message */}
                    {submissionMessage && (
                        <p className={isError ? "error-message" : "success-message"}>
                            {submissionMessage}
                        </p>
                    )}

                    <label className="checkbox-label">
                        <input type="checkbox" className="form-checkbox" />
                        By providing a telephone number and submitting this form you consent to be contacted.
                    </label>
                </form>
            </div>
        </section>
    );
};

export default HeroSection;