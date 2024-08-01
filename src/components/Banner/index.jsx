import './index.scss';

const Banner = ({ image, altText, text, className }) => {
  return (
    <div className={`banner ${className || ''}`}>
      <img src={image} alt={altText} className="banner-image" />
      <div className="banner-overlay"></div>
      <h1 className="banner-text">{text}</h1>
    </div>
  );
};

export default Banner;
