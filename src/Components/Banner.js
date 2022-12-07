import React from "react";

const Banner = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner jaimataran">
          <div class="carousel-item active" data-bs-interval="5000">
            <img src="./images/Seedling_1.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="4000">
            <img src="./images/2.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="./images/3.png" class="d-block w-100" data-bs-interval="4000" alt="..." />
          </div>
          {/* <div class="carousel-item">
            <img src="./images/Seedling_4.png"  data-bs-interval="4000" class="d-block w-100" alt="..." />
          </div> */}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Banner;
