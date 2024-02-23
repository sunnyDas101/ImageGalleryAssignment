import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./imageGallery.css";

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  const options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/data/images.json");
        const data = await res.json();
        setImages(data);
      } catch (err) {
        console.log("Error fetching images: ", err);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <OwlCarousel className="owl-theme" {...options}>
        {images?.map((item, index) => (
          <div className="item" key={index}>
            <div className="img-position">
              <div className="img-size">
                <img
                  className="img-relative"
                  src={item?.image}
                  alt={item?.title}
                />
              </div>
              <div className="img-title pt-3 pb-3">
                <span>{item.title}</span>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default ImageGallery;
