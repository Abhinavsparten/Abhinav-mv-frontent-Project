import React, { useState } from 'react'
import { MdArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import './FourthPart.css'

function FourthPart() {
    const [selectedCard, setSelectedCard] = useState(1); // default is 1st card

    // Function to change the background when clicked
    const changeBackground = (index) => {
      setSelectedCard(index);
    };

    const [activeCard, setActiveCard] = useState(0);
  
    const handleCardClick = (index) => {
      setActiveCard(index);
    };
  return (
    <>
   <div className="container-md maindiv p-4 text-light">
      <div className="row mb-4 custom-padding">
        <div className="col-md-6 text-md-start">
          <h2 className="fs-2 fw-bold">• Our Services</h2>
        </div>
        <div className="col-md-6 text-center text-md-end fs-2">
    <p className="text-close-knit">
        <span className='text-white'>We are a close-knit team of experts dedicated to crafting memorable and</span><br/>
        emotionally engaging websites, digital experiences, and native apps.
    </p>
</div>

      </div>

      <div className="row g-4 mb-4">
        {['BRAND IDENTITY', 'UX/UI DESIGN', 'WEBFLOW DEVELOPER'].map((service, index) => (
          <div className="col-md-4" key={index}>
            <div
              className="card custom-card shadow-lg"
              style={{
                backgroundColor: activeCard === index ? 'rgb(64, 52, 235)' : 'transparent',
              }}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-body">
                <h3 className="fs-4 fw-semibold mb-2">{service}  <a href="#" class="btn-send "> <MdArrowOutward /></a></h3>
                <p className="text-white mb-3">
                  We provide digital solutions such as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc., that increase the company’s values.
                </p>
                <a href="#" className="text-white d-flex align-items-center">
              
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


    </>
  )
}

export default FourthPart