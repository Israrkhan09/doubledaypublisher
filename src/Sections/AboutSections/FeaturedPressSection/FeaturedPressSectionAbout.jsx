import React from "react";

import logo1 from "../Images/aboutcarousel/bl-1.png";
import logo2 from "../Images/aboutcarousel/bl-2.png";
import logo3 from "../Images/aboutcarousel/bl-3.png";
import logo4 from "../Images/aboutcarousel/bl-4.png";
import logo5 from "../Images/aboutcarousel/bl-5.png";
import logo6 from "../Images/aboutcarousel/bl-6.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const FeaturedPressSectionAbout = () => {

// const [name,setName] = useState("");
// const [email,setEmail] = useState("");
// const [submitted,setSubmitted] = useState(false);

// const handleSubmit = (e)=>{
// e.preventDefault();

// if(!name || !email){
// alert("Please fill all fields");
// return;
// }

// setSubmitted(true);
// setName("");
// setEmail("");
// };

  return (
    <>
      <style>
        {`

/* SECTION */
.press-section{
padding:60px 20px 40px;
position:relative;
z-index:2;
}

/* FORCE BACKGROUND LAYER */

.press-section::before{
content:"";
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background:#e3f1ed;
z-index:-1;
}

/* LIGHT MODE */

body.light-mode .press-section::before{
background:#e3f1ed;
}

/* DARK MODE */

body.dark-mode .press-section::before{
background:#e3f1ed;
}

/* LOGO CAROUSEL */

.press-carousel{
overflow:hidden;
width:100%;
margin-bottom:40px;
}

.press-track{
display:flex;
align-items:center;
gap:120px;
width:max-content;
animation:scroll 25s linear infinite;
}

.press-logo{
height:40px;
object-fit:contain;
flex-shrink:0;
transition:0.3s;
}

.press-logo:hover{
transform:scale(1.05);
}

/* FORM */

.press-form-container{
max-width:1100px;
margin:auto;
background:white;
border-radius:16px;
display:flex;
overflow:hidden;
box-shadow:0 10px 30px rgba(0,0,0,0.1);
}

/* INPUT */

.press-input{
flex:1;
padding:22px 24px;
border:none;
outline:none;
font-size:16px;
border-right:1px solid #e5e7eb;
}

/* SUBMIT BUTTON */

.press-submit{
background:#0f3b36;
color:white;
border:none;
padding:0 40px;
font-weight:600;
cursor:pointer;
font-size:16px;
}

/* THANK YOU MESSAGE */

.press-message{
text-align:center;
margin-top:15px;
font-size:16px;
color:#0f3b36;
font-weight:600;
}

/* ANIMATION */

@keyframes scroll{
0%{
transform:translateX(0);
}
100%{
transform:translateX(-50%);
}
}

/* RESPONSIVE */

@media(max-width:768px){

.press-form-container{
flex-direction:column;
}

.press-input{
border-right:none;
border-bottom:1px solid #e5e7eb;
}

.press-submit{
padding:18px;
}

.press-track{
gap:60px;
}

}

`}
      </style>

      <section className="press-section">

        {/* LOGO CAROUSEL */}

        <div className="press-carousel">
          <div className="press-track">
            {[...logos, ...logos].map((logo, i) => (
              <img key={i} src={logo} alt="press" className="press-logo" />
            ))}
          </div>
        </div>

        {/* FORM */}

        {/* <form className="press-form-container" onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Name"
            className="press-input"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email*"
            className="press-input"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <button className="press-submit" type="submit">
            SUBMIT
          </button>

        </form> */}
{/* 
        {submitted && (
          <div className="press-message">
            Thank you! Your request has been submitted.
          </div>
        )} */}

      </section>
    </>
  );
};

export default FeaturedPressSectionAbout;