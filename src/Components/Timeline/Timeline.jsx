import React from 'react';
import { MdFiberManualRecord } from 'react-icons/md';

const LiniaDeTiempo = () => {
  const timelineData = [
    { year: '2000', title: 'Médico', institution: 'UBA' },
    { year: '2003', title: 'Médico', institution: 'UBA' },
    { year: '2009', title: 'Médico', institution: 'UBA' },
    { year: '2010', title: 'Médico', institution: 'UBA' },
    { year: '2012', title: 'Médico', institution: 'UBA' },
    { year: '2022', title: 'Médico', institution: 'UBA' },
    { year: '2022', title: 'Médico', institution: 'UBA' },
    { year: '2023', title: 'Médico', institution: 'UBA' },
    { year: '2023', title: 'Médico', institution: 'UBA' },
  ];

  return (
    <div className="container">
          <div className="timeline">
      {timelineData.map((item) => (
        <div key={item.year} className="timeline__item">
          <MdFiberManualRecord className="timeline__icon" />
          <div className="timeline__content">
            <h4 className="timeline__year">{item.year}</h4>
            <h4>{item.title}</h4>
            <h5>{item.institution}</h5>
          </div>
        </div>
      ))}
    </div>
    </div>
  
  );
};

export default LiniaDeTiempo;