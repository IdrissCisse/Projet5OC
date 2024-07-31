import { useState, useEffect } from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import './App.scss';
import accommodationsData from '../../assets/accommodations.json';

function Home() {
  const [logements, setLogements] = useState([]);
  useEffect(() => {
    setLogements(accommodationsData);
  }, []);

  return (
    <div className="App">
      <Banner />
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
