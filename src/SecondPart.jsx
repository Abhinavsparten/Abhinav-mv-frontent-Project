import React from 'react'
import './SecondPart.css'
import { MdArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

function SecondPart() {
  return (
    <>
        <div className="full-height">
      <div className="row w-100 justify-content-center">
        <div className="col-md-6 d-flex flex-column align-items-center align-items-md-start text-center text-md-start">
          <p className="fw-semibold who-are-we">• Who are we?</p>
          <div className="d-flex justify-content-center w-100">
            <div className="rounded-full"></div>
          </div>
        </div>

        <div className="col-md-6 d-flex flex-column align-items-center align-items-md-start text-center text-md-start mt-4 mt-md-0">
          <p className="text-muted-foreground">
            <span className='text-white'>We create mind-blowing visuals, brands,<br />
              websites, and products</span> that help startups<br />
              and innovative companies gain more<br />
              exposure.
          </p>
          <a href="#" className="project-btn mt-3">Learn more <MdArrowOutward /></a>
        </div>
      </div>
      {/* Wefo studio image */}
      <div className="custom-div container-fluid"></div>
    </div>

    </>
  )
}

export default SecondPart