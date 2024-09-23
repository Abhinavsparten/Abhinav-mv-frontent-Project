import React from 'react'
import './ThirdPart.css'
import { MdArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";


function ThirdPart() {
  return (
    <>
   <section class="p-4 container-md mt-5">
    <div class="row g-4">
        <div class="col-12 col-md-6 d-flex flex-column">
            <div class="mb-4">
           
            <div class="bg-card rounded-lg shadow-lg p-4">
                    <div class="h-40 bg-secondary rounded-lg mb-2"></div>
                </div>
                <div class="text-group">
                    <p class="text-white mt-2 inline-block mr-2">Development</p>
                    <p class="text-white mt-2 inline-block mr-2">UI/UX</p>
                    <p class="text-white mt-2 inline-block">Illustration</p>
                </div>
                <h4 class="h5 font-weight-bold">Roboto Landing page</h4>
            </div>
            <div class="mb-4">
                <div class="bg-card rounded-lg shadow-lg p-4">
                    <div class="h-40 bg-secondary rounded-lg mb-2"></div>
                </div>
                <div class="text-group">
                    <p class="text-white mt-2 inline-block mr-2">UI/UX</p>
                    <p class="text-white mt-2 inline-block">Illustration</p>
                </div>
                <h4 class="h5 font-weight-bold">Poppin App Design</h4>
            </div>
        </div>

        <div class="col-12 col-md-6 d-flex flex-column">
            <h2 class="h4 font-weight-bold mb-4">• Featured Works</h2>
            <h1 class="b mb-6">Take a look at <br /> our projects</h1>
            <div class="mb-4">
                <div class="bg-card rounded-lg shadow-lg p-4">
                    <div class="h-40 bg-secondary rounded-lg mb-2"></div>
                    <button type="submit" class="btn-with-underline">View Projects <MdArrowOutward /></button>
                </div>
                <div class="text-group">
                    <p class="text-white mt-2 inline-block mr-2">Development</p>
                    <p class="text-white mt-2 inline-block mr-2">UI/UX</p>
                    <p class="text-white mt-2 inline-block">Illustration</p>
                </div>
                <h4 class="h5 font-weight-bold">Roboto Landing page</h4>
                <h4 class="h5 font-weight-bold">Groteck Website</h4>
            </div>
            <div class="mb-4">
                <div class="bg-card rounded-lg shadow-lg p-4">
                    <div class="h-40 bg-secondary rounded-lg mb-2"></div>
                </div>
                <div class="text-group">
                    <p class="text-white mt-2 inline-block mr-2">Branding</p>
                    <p class="text-white mt-2 inline-block mr-2">UI/UX</p>
                </div>
                <h4 class="h5 font-weight-bold">Roboto Landing page</h4>
                <h4 class="h5 font-weight-bold">Helvetica Branding</h4>
            </div>
        </div>
    </div>
</section>



    </>
  )
}

export default ThirdPart