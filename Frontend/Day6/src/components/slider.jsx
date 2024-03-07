import { useState, useEffect } from 'react';
import '../assets/slider.css';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change image every 6 seconds (half of 3 seconds for fade out and half for fade in)

    return () => clearInterval(interval);
  }, [images]);

  const handleLuxuryClick = (e) => {
    e.preventDefault(); // Prevent the default behavior of the anchor tag
    const luxuryElement = document.getElementById('luxury');
    if (luxuryElement) {
      window.scrollTo({
        top: luxuryElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleTopBoatsClick = (e) => {
    e.preventDefault(); // Prevent the default behavior of the anchor tag
    const topBoatsElement = document.getElementById('top-boats');
    if (topBoatsElement) {
      window.scrollTo({
        top: topBoatsElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  
  const handleBudgetFriendlyClick = (e) => {
    e.preventDefault(); // Prevent the default behavior of the anchor tag
    const budgetFriendlyElement = document.getElementById('budget-friendly');
    if (budgetFriendlyElement) {
      window.scrollTo({
        top: budgetFriendlyElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={index === currentImageIndex ? 'active' : ''}
          style={{ animationDelay: `${index * 3}s` }}
        />
      ))}

      <div className="box">
  <a href="#" onClick={handleLuxuryClick}>
    Luxury
  </a>
  </div>

  <div className='box1'>
  <a href="#" onClick={handleTopBoatsClick}>
    Top Boats
  </a>
  </div>
  <div className='box2'>
  <a href="#" onClick={handleBudgetFriendlyClick}>
    Budget Friendly
  </a>
</div>
   </div>
  );
};

// Usage
const Slider = () => {
  const images = [
    'https://res.cloudinary.com/dcc7xkmex/image/upload/v1708957529/w5_ne3eso.jpg',
    'https://res.cloudinary.com/dcc7xkmex/image/upload/v1708957526/w3_ecyjbc.jpg',
    'https://res.cloudinary.com/dcc7xkmex/image/upload/v1708957530/w4_twlhly.jpg',
    'https://res.cloudinary.com/dcc7xkmex/image/upload/v1708957530/w2_lvicgj.jpg',
    'https://res.cloudinary.com/dcc7xkmex/image/upload/v1708957527/w1_igkxez.jpg',
    // Add more image URLs as needed
  ];

  return <ImageSlider images={images} />;
};

export default Slider;