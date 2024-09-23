import { useState } from 'react'
import './App.css'
import { MdArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import SecondPart from './SecondPart';
import ThirdPart from './ThirdPart';
import FourthPart from './FourthPart';
import FifthPart from './FifthPart';
import LastPart from './LastPart';
function App() {
  const [count, setCount] = useState(0)


    const [activeCard, setActiveCard] = useState(0);
  
    const handleCardClick = (index) => {
      setActiveCard(index);
    };
  
    const [isNavActive, setIsNavActive] = useState(false);

    const toggleMenu = () => {
      setIsNavActive(!isNavActive);
    };
  

  return (
    <>
    {/* firt part */}

<div class="m-0">
  <div class="main">
  <header className="header">
  <div className="d-flex justify-content-between align-items-center">
    <button className="menu-toggle d-block d-md-none me-3" aria-label="Toggle navigation" onClick={toggleMenu}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </button>
    <h1 className="logo mb-0">Wefo</h1>
  </div>

  {/* Sidebar for mobile view */}
  <nav className={`sidebar ${isNavActive ? 'active' : ''}`}>
    <button className="close-btn" aria-label="Close navigation" onClick={toggleMenu}>
      &times; {/* Close icon */}
    </button>
    <ul>
      <li><a href="#">Add Project</a></li>
      <li><a href="#">Our Works</a></li>
      <li><a href="#">Category</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

  <nav className="nav d-none d-md-block">
    <ul>
    <li><a href="#">Add Project</a></li>
      <li><a href="#">Our Works</a></li>
      <li><a href="#">Category</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

  <a href="#" className="project-btn  d-md-block">Start a project <MdArrowOutward /></a>
</header>




    <div class="p-5 text-center text-md-left">
      <h1 class="heading display-4 ">
        We create award<br />winning websites
      </h1>
      <p class="mt-4 lead max-w-2xl mx-auto mx-md-0">
        Based in San Francisco, we’re a digital <br /> products design & development studio
        <br />that is passionate about the creation of high<br /> applicability of digital experiences.
      </p>
      <div class="mt-6 d-flex flex-column flex-md-row justify-content-center justify-content-md-start">
        <button type="submit" class="btn-with-underline">
          Explore <MdArrowOutward />
        </button>
      </div>
    </div>


    <div class="image-container">
      <img src="https://i.postimg.cc/Tw9nZPDN/Frame-125.png" alt="Your Image" class="right-image" />
    </div>
  </div>
</div>
  
  {/* Other parts   */}

      <SecondPart></SecondPart>
      <ThirdPart></ThirdPart>
      <FourthPart></FourthPart>
      <FifthPart></FifthPart>
      <LastPart></LastPart>

    </>
  )
}

export default App
