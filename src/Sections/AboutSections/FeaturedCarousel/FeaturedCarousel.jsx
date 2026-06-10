import React from "react";

import logo1 from "../Images/2-3.png";
import logo2 from "../Images/3-3.png";
import logo3 from "../Images/4.png";
import logo4 from "../Images/5-3.png";
import logo5 from "../Images/6.png";

const logos = [logo1, logo2, logo3, logo4, logo5];

const FeaturedCarousel = () => {

  return (
    <>
    
    <style>
      {`

      .featured-section{
        padding:20px 20px;
        display:flex;
        justify-content:center;
        position:relative;
        z-index:1;
        background:transparent;
      }

      /* LIGHT MODE */

      body.light-mode .featured-section{
        background:#F7F9FC;
      }

      /* DARK MODE */

      body.dark-mode .featured-section{
        background:transparent;
      }

      .featured-container{
        background:#8ed0c6;
        border-radius:30px;
        padding:20px 30px;
        width:100%;
        max-width:1300px;
        display:flex;
        align-items:center;
        gap:60px;
      }

      .featured-title{
        font-size:28px;
        font-weight:700;
        color:#0f172a;
        white-space:nowrap;
      }

      .featured-wrapper{
        overflow:hidden;
        width:100%;
      }

      .featured-track{
        display:flex;
        align-items:center;
        gap:120px;
        width:max-content;
        animation:scroll 20s linear infinite;
      }

      .featured-logo{
        height:100px;
        width:210px;
        object-fit:contain;
        flex-shrink:0;
      }

      @keyframes scroll{
        0%{
          transform:translateX(0);
        }
        100%{
          transform:translateX(-50%);
        }
      }

      @media(max-width: 1024px) {
        .featured-container {
          gap: 30px;
          padding: 20px 20px;
        }
      }

      @media(max-width: 768px) {
        .featured-container {
          flex-direction: column;
          align-items: center;
          gap: 20px;
          text-align: center;
          padding: 20px 15px;
          border-radius: 20px;
        }
        .featured-title {
          font-size: 22px;
          white-space: normal;
        }
        .featured-track {
          gap: 60px;
        }
        .featured-logo {
          height: 60px;
          width: 120px;
        }
      }
      `}
    </style>

    <section className="featured-section">

      <div className="featured-container">

        <h2 className="featured-title">
          AS FEATURED IN
        </h2>

        <div className="featured-wrapper">

          <div className="featured-track">

            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="featured"
                className="featured-logo"
              />
            ))}

          </div>

        </div>

      </div>

    </section>

    </>
  );
};

export default FeaturedCarousel;