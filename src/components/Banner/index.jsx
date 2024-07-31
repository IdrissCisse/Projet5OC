import './index.scss';
import banner from '../../assets/images/banner.svg';
const Banner = () => {
  return (
    <div className="banner">
      <img
        src={banner}
        alt="Falaises et arbres côtiers sous un temps brumeux"
        className="banner-image"
      />
      <div className="banner-overlay"></div>
      <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default Banner;
