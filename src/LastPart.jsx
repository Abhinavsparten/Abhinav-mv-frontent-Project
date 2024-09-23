import React from 'react'
import './LastPart.css'
import { MdArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

function LastPart() {
  return (
    <>
     {/* testimonials section */}
     <div class="d-flex justify-content-center align-items-center min-vh-100 gradient">
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 text-white text-md-start mb-4 mb-md-0">
        <span class="display-6">• Testimonials</span>
      </div>
      <div class="col-12 col-md-6 d-flex flex-column justify-content-center text-white">
        <p class="lead mb-4 text-lead">
          A studio filled with passion, professionalism,<br /> and boundless creativity. 
          They exceeded my expectations with their excellent services, high-quality products, and affordable prices. I’m extremely satisfied!
        </p>
        <div class="d-flex align-items-center mb-4">
          <img aria-hidden="true" alt="profile-picture" src="https://i.postimg.cc/yYG5W5CL/avatar.png" class="rounded-circle me-2" />
          <div>
            <div class="fw-semibold">Kathryn Murphy</div>
            <div class="text-muted">Senior Marketing, Spotify</div>
          </div>
        </div>
        <div class="d-inline-flex" style={{gap: "12px"}}>
          <button class="btn btn-arrow me-2 rounded-start">
            <FaArrowLeft />
          </button>
          <button class="btn btn-arrow rounded-end">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* message and footer part */}
      <div class="bg-black text-white p-4 p-md-5 d-flex flex-column flex-md-row justify-content-between gap-4">
  <div class="col-12 col-md-6 d-flex flex-column justify-content-between mb-4 mb-md-0">
    <div>
      <h1 class="font-weight-bold mb-4">Feel free to connect<br /> with us!</h1>
      <div class="d-flex mb-4 flex-wrap">
        <a href="#" class="me-3 text-white icon-circle-border">
          <img src="https://i.postimg.cc/4dX1YJ4G/twitter-x.png" alt="X" />
        </a>
        <a href="#" class="me-3 text-white icon-circle-border">
          <img src="https://i.postimg.cc/hGsd3VgF/instagram.png" alt="Instagram" />
        </a>
        <a href="#" class="me-3 text-white icon-circle-border">
          <img src="https://i.postimg.cc/d1STJvL4/dribbble.png" alt="Dribbble" />
        </a>
        <a href="#" class="text-white icon-circle-border">
          <img src="https://i.postimg.cc/vTgxBjnM/behance.png" alt="Behance" />
        </a>
      </div>
      <div class="mb-4">
        <p class="text-white"><img src="https://i.postimg.cc/PJBV7gHR/Frame.png" class="me-2" /> 0972 663 633</p>
        <p class="text-white"><img src="https://i.postimg.cc/t4dvrvMB/Vector-6.png" class="me-2" /> hello@wefo.com</p>
      </div>
    </div>
  </div>

  <div class="col-12 col-md-6">
    <form>
      <div class="form-group mb-4">
        <label for="name" class="text-white">Name <b class="text-danger">*</b></label>
        <input type="text" id="name" class="custom-input" placeholder="Your name" required />
      </div>
      <div class="form-group mb-4">
        <label for="email" class="text-white">Email <b class="text-danger">*</b></label>
        <input type="email" id="email" class="custom-input" placeholder="Your email address" required />
      </div>
      <div class="form-group mb-4">
        <label for="message" class="text-white">Message</label>
        <textarea id="message" class="custom-input" rows="4" placeholder="Write your message here..."></textarea>
      </div>
      <button type="submit" class="btn-with-underline">Send <MdArrowOutward /></button>
    </form>
  </div>
</div>

      <div class="full-width-line"></div>

      <footer class="bg-black text-white p-3">
  <div class="d-flex justify-content-between align-items-center">
    <h3 class="mb-0 b">Wefo</h3>
    <div>
      <a href="#" class="text-white mr-3">Privacy</a>
      <a href="#" class="text-white mr-3">Term</a>
      <a href="#" class="text-white">Security</a>
    </div>
  </div>
</footer>

    </>
  )
}

export default LastPart