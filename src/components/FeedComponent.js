import React, { useState } from 'react';
import FeedItem from './FeedItem';
import './FeedComponent.css';

const FeedComponent = () => {
    const initialData = [
        {
          id: 1,
          title: 'Gropi pe Strada Principală',
          status: 'problemă majoră',
          description: 'Mai multe gropi mari au apărut pe Strada Principală, în zona comercială, provocând întârzieri în trafic și reprezentând un pericol pentru vehicule.',
          score: 5,
          likes: 8,
          dislikes: 2,
          location: 'Centru'
        },
        {
          id: 2,
          title: 'Coșuri de gunoi pline în Parcul Central',
          status: 'problemă mare',
          description: 'Coșurile de gunoi din Parcul Central sunt constant pline, atrăgând dăunători și creând un mediu nesănătos pentru vizitatori.',
          score: 3,
          likes: 5,
          dislikes: 1,
          location: 'Zona Parcului Central'
        },
        {
          id: 3,
          title: 'Lămpi stradale stricate pe Strada Ulmilor',
          status: 'problemă mică',
          description: 'Mai multe lămpi stradale de pe Strada Ulmilor sunt stricate, ducând la vizibilitate scăzută pe timp de noapte și un risc crescut de accidente și criminalitate.',
          score: 6,
          likes: 15,
          dislikes: 3,
          location: 'Zonă Suburbană'
        },
        {
          id: 4,
          title: 'Graffiti pe noile murale publice',
          status: 'rezolvat',
          description: 'Graffiti recent aplicat pe muralele proaspăt pictate de-a lungul Plimbării de pe malul râului a provocat preocupări în comunitate și solicitări pentru supraveghere sporită.',
          score: 8,
          likes: 22,
          dislikes: 2,
          location: 'Malul Râului'
        }
      ];

  const [feedData, setFeedData] = useState(initialData);

  const updateFeedItem = (id, updatedFields) => {
    setFeedData(prevData => 
      prevData.map(item => 
        item.id === id ? { ...item, ...updatedFields } : item
      )
    );
  };

  return (
    <div className="feed-container">
      <h2>Feed</h2>
      {feedData.map(item => (
        <FeedItem key={item.id} data={item} onUpdate={updateFeedItem} />
      ))}
    </div>
  );
};

export default FeedComponent;
