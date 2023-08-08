import React from 'react';
import { MdFiberManualRecord } from 'react-icons/md';

const LiniaDeTiempo = () => {
  const timelineData = [
    { id: 1, year: '2000', title: 'Médico', institution: 'UBA' },
    { id: 2, year: '2003', title: 'Médico residente de cardiología', institution: 'Hospital Durand' },
    { id: 3, year: '2009', title: 'Fellow de electrofisiología cardíaca', institution: 'Fund. Favaloro' },
    { id: 4, year: '2010', title: 'Especialista en medicina deportiva', institution: 'UBA' },
    { id: 5, year: '2012', title: 'Especialista en administración hospitalaria', institution: 'UBA' },
    { id: 6, year: '2022', title: 'Jefe de la unidad de internación coronaria', institution: 'Hospital Pirovano' },
    { id: 7, year: '2022', title: 'Jefe de centro de electrofisiología y marcapasos', institution: 'Hospital Pirovano' },
    { id: 8, year: '2023', title: 'Jefe de la división de cardiología', institution: 'Hospital Pirovano' },
    { id: 9, year: '2023', title: 'Titular y Fundador de la Asociación de Médicos Deportólogos de Argentina', institution: 'AMDARG' },
  ];

  return (
  <div className="timeline">
    {timelineData.map((item) => (
      <div key={item.id} className="timeline__item">
        <h4 className="timeline__year">{item.year}</h4>
        <div className="dot">
          <MdFiberManualRecord className="timeline__icon" />
        </div>
        <div className="line-horizontal-left"></div>
        <div className="line-horizontal-right"></div>
        <div className="timeline__content">
          <h4 className='timeline__title'>{item.title}</h4>
          <h5>{item.institution}</h5>
        </div>
      </div>
    ))}
  </div>
  );
};

export default LiniaDeTiempo;