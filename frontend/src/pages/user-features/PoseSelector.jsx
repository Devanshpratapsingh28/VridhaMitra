import React from 'react';
import baddha_konasana from '../../assets/Baddha_konasana.jpg';
import malasana from '../../assets/Malasana.jpeg';
import vajrasana from '../../assets/Vajrasana.jpg';
import balasana from '../../assets/Balasana.jpg';
import coming_soon from '../../assets/coming_soon.jpeg';

const PoseSelector = ({ selectedPose, onChange }) => {
  const poses = [
    { id: 'baddha_konasana', name: 'Baddha Konasana', thumbnail: baddha_konasana },
    { id: 'malasana', name: 'Malasana', thumbnail: malasana },
    { id: 'vajrasana', name: 'Vajrasana', thumbnail: vajrasana },
    { id: 'balasana', name: 'Balasana', thumbnail: balasana },
    { id: 'coming_soon', name: 'Coming Soon', thumbnail: coming_soon },
  ];

  return (
    <div style={{ padding: '20px',color: 'black', backgroundColor:'#4a6fa5', borderRadius: '8px'}}>
      <h3>Currently the following poses are supported:</h3>
      <div style={{ 
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        overflowX: 'auto',
        padding: '10px 0'
      }}>
        {poses.map(pose => (
          <div 
            key={pose.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              border: selectedPose === pose.id ? '2px solid black' : '1px solid #ddd',
              borderRadius: '8px',
              padding: '10px',
              minWidth: '120px'

            }}
            onClick={() => onChange(pose.id)}
          >
            <div style={{ marginBottom: '8px' }}>
              <img 
                src={pose.thumbnail} 
                alt={pose.name}
                style={{ 
                  width: '100px', 
                  height: '100px', 
                  objectFit: 'cover',
                  borderRadius: '4px'
                }}
              />
            </div>
            <span style={{ textAlign: 'center', color:'white' }}>{pose.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoseSelector;