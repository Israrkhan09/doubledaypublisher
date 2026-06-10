import React, { useState } from "react";
import { motion } from "framer-motion";
import popupImage from "../../HomeSections/images/featuredimages/popup.webp";

export const GetQuotePopup = ({ isOpen, onClose }) => {
    const [ isSubmitted , setIsSubmitted] = useState(false)
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        setIsSubmitted(true)
    }
  if (!isOpen) return null;

  return (
    <div style={overlay}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25 }}
        style={modal}
      >
        <button style={closeBtn} onClick={onClose}>
          ✕
        </button>

        <div style={content}>
          {/* LEFT FORM */}

          {/* <div style={formArea}> */}
            <form style={formArea} onSubmit={handleSubmit}>
            <h4 style={smallTitle}>LIMITED TIME OFFER</h4>
            <h2 style={title}>Get Upto 50% Discount</h2>

            <input placeholder="Your Full Name Here" style={input} />
            <input placeholder="xyz@company.com" style={input} />
            <input placeholder="(555) 000-0000" style={input} />

            <textarea placeholder="Message" rows="4" style={textarea} />

            <label style={checkbox}>
              <input type="checkbox" />
              <span>
                By checking this box, I am allowing our team to send text
                messages.
              </span>
            </label>

            <button type="submit" style={submitBtn}>SUBMIT</button>


            {
                isSubmitted&&(
                    <p style={thankyou}>
                        ✅ Thank you! Your request has been submitted successfully.
                    </p>
                )
            }
            </form>
          {/* </div> */}

          {/* RIGHT IMAGE */}

          <div style={imageArea}>
            <img src={popupImage} alt="popup" style={book1} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* -------------------- STYLES -------------------- */

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.65)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
  padding: "20px",
  cursor: "default" // 👈 important
};
const modal = {
  background: "linear-gradient(135deg,#2d8c87,#78cfc6)",
  borderRadius: "14px",
  maxWidth: "900px",
  width: "100%",
  padding: "40px",
  position: "relative",
  cursor: "default" // 👈 add this
};
const closeBtn = {
  position: "absolute",
  top: "15px",
  right: "20px",
  background: "white",
  border: "none",
  cursor: "pointer",
  fontSize: "18px",
  borderRadius: "4px",
};

const content = {
  display: "flex",
  flexWrap: "wrap",
  gap: "40px",
  alignItems: "center",
};

const formArea = {
  flex: "1",
  minWidth: "260px",
};

const smallTitle = {
  color: "white",
  fontSize: "14px",
  letterSpacing: "1px",
};

const title = {
  color: "white",
  fontSize: "30px",
  fontWeight: "700",
  marginBottom: "20px",
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "6px",
  border: "none",
};

const textarea = {
  width: "100%",
  padding: "12px",
  borderRadius: "6px",
  border: "none",
  marginBottom: "10px",
};

const checkbox = {
  display: "flex",
  gap: "8px",
  fontSize: "12px",
  color: "white",
  marginBottom: "15px",
};

const submitBtn = {
  width: "100%",
  padding: "14px",
  background: "#0A0F1F",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontWeight: "600",
  cursor: "pointer",
};

const imageArea = {
  flex: "1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "260px"
};

const thankyou = {
  marginTop: "12px",
  color: "white",
  fontSize: "14px",
  fontWeight: "500",
};
const book1 = {
  width: "320px",
  maxWidth: "100%",
  transform: "rotate(-8deg)",
  filter: "drop-shadow(0px 20px 30px rgba(0,0,0,0.25))"
};
