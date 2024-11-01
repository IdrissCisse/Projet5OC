import { useState, useEffect } from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import './App.scss';
import accommodationsData from '../../assets/accommodations.json';
import homeBannerImage from '../../assets/images/homeBanner.webp';

function Home() {
  const [logements, setLogements] = useState([]);
  useEffect(() => {
    setLogements(accommodationsData);
  }, []);

  return (
    <div className="App">
      <Banner
        image={homeBannerImage}
        altText="Bannière de la page d'accueil"
        text="Chez vous, partout et ailleurs"
      />
      <div className="cards-container">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            cover={logement.cover}
            title={logement.title}
            id={logement.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
