import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          nesciunt id porro at blanditiis! Laudantium reiciendis facere ipsa
          corrupti placeat, dolorum labore quam iure dolore, aliquid, numquam
          neque soluta perferendis vel fugit doloribus error possimus
          repudiandae quisquam. Hic numquam, iste mollitia ad dicta esse
          inventore id amet consequatur ducimus corporis.
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
