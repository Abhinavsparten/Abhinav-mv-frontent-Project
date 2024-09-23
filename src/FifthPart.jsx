import React, { useState } from 'react'
import './FifthPart.css'

function FifthPart() {
    const [selectedCard, setSelectedCard] = useState(1); // default is 1st card

    // Function to change the background when clicked
    const changeBackground = (index) => {
      setSelectedCard(index);
    };

  return (
    <>
       <div className="con bg-black text-white p-4">
      <div className="row mb-4">
        <div className="col-lg-6">
          <p className="font-bold">• Our Leader</p>
        </div>
        <div className="col-lg-6">
          <p className="custom-text">
            Each product is crafted with passion and
            <br />
            dedication. Meet our leader!
          </p>
        </div>
      </div>

      <div className="row mb-4 position-relative">
        <div className="col-lg-4 mb-4">
          <div className="half-left-shape width-70"></div>
        </div>
        <div
          className="col-lg-4 mb-4 position-relative"
          style={{ padding: 0 }}
          onClick={() => changeBackground(1)}
        >
          <div
            className="team-card row"
            style={{
              position: "absolute",
              left: "70px",
              background:
                selectedCard === 1
                  ? "linear-gradient(to right, rgba(51, 42, 188) 0%, rgba(51, 42, 188) 50%, rgba(64, 52, 235, 1) 50%, rgba(64, 52, 235, 1) 100%)"
                  : "black", // default black
            }}
          >
            <div className="col-lg-6 mb-4"></div>
            <div className="col-lg-6 mb-4">
              <h3 className="team-member-name">Cody Fisher</h3>
              <p className="team-member-role">CEO Founder</p>
              <div className="action-buttons d-flex">
                <a href="#" className="text-white icon-circle-border icon">
                  <img
                    src="https://i.postimg.cc/4dX1YJ4G/twitter-x.png"
                    alt="Icon"
                  />
                </a>
                <a
                  href="#"
                  className="text-white icon-circle-border mx-2 icon"
                >
                  <img
                    src="https://i.postimg.cc/hGsd3VgF/instagram.png"
                    alt="Icon"
                  />
                </a>
                <a href="#" className="text-white icon-circle-border icon">
                  <img
                    src="https://i.postimg.cc/FKG2KxXh/linkedin-in.png"
                    alt="Icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="half-right-shape width-70"></div>
        </div>
      </div>

      <div className="row mb-4 position-relative">
        <div className="col-lg-4 mb-4">
          <div className="half-left-shape width-100"></div>
        </div>
        <div
          className="col-lg-4 mb-4 position-relative"
          style={{ padding: 7 }}
          onClick={() => changeBackground(2)}
        >
          <div
            className="team-card row"
            style={{
              position: "absolute",
              left: "200px",
              background:
                selectedCard === 2
                  ? "linear-gradient(to right, rgba(51, 42, 188) 0%, rgba(51, 42, 188) 50%, rgba(64, 52, 235, 1) 50%, rgba(64, 52, 235, 1) 100%)"
                  : "black", // default black
            }}
          >
            <div className="col-lg-6 mb-4"></div>
            <div className="col-lg-6 mb-4">
              <h3 className="team-member-name">Kristin Watson</h3>
              <p className="team-member-role">Manager</p>
              <div className="action-buttons d-flex">
                <a href="#" className="text-white icon-circle-border icon">
                  <img
                    src="https://i.postimg.cc/4dX1YJ4G/twitter-x.png"
                    alt="Icon"
                  />
                </a>
                <a
                  href="#"
                  className="text-white icon-circle-border mx-2 icon"
                >
                  <img
                    src="https://i.postimg.cc/hGsd3VgF/instagram.png"
                    alt="Icon"
                  />
                </a>
                <a href="#" className="text-white icon-circle-border icon">
                  <img
                    src="https://i.postimg.cc/FKG2KxXh/linkedin-in.png"
                    alt="Icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="half-right-shape width-40"></div>
        </div>
      </div>

      <div className="row mb-4 position-relative">
        <div className="col-lg-4 mb-4">
          <div className="half-left-shape width-40"></div>
        </div>
        <div
          className="col-lg-4 mb-4 position-relative"
          style={{ padding: 0 }}
          onClick={() => changeBackground(3)}
        >
          <div
            className="team-card row"
            style={{
              position: "absolute",
              left: "-50px",
              background:
                selectedCard === 3
                  ? "linear-gradient(to right, rgba(51, 42, 188) 0%, rgba(51, 42, 188) 50%, rgba(64, 52, 235, 1) 50%, rgba(64, 52, 235, 1) 100%)"
                  : "black", // default black
            }}
          >
            <div className="col-lg-6 mb-4"></div>
            <div className="col-lg-6 mb-4">
              <h3 className="team-member-name">Leslie Alexander</h3>
              <p className="team-member-role">Design Leader</p>
              <div className="action-buttons d-flex">
                <a href="#" className="text-white icon-circle-border icon">
                  <img
                    src="https://i.postimg.cc/4dX1YJ4G/twitter-x.png"
                    alt="Icon"
                  />
                </a>
                <a
                  href="#"
                  className="text-white icon-circle-border mx-2 icon"
                >
                  <img
                    src="https://i.postimg.cc/hGsd3VgF/instagram.png"
                    alt="Icon"
                  />
                </a>
                <a href="#" className="text-white icon-circle-border icon">
                  <img
                    src="https://i.postimg.cc/FKG2KxXh/linkedin-in.png"
                    alt="Icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="half-right-shape width-100"></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default FifthPart