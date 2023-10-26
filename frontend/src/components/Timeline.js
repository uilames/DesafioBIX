import React, { useEffect, useState } from 'react';

const Timeline = ({ funcionarioId }) => {
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/funcionarios/linha-do-tempo/${funcionarioId}/`)
      .then((response) => response.json())
      .then((data) => {
        setTimelineData(data);
        setLoading(false);
      });
  }, [funcionarioId]);

  return (
    <div>
      {loading ? (
        <p>Carregando a linha do tempo...</p>
      ) : (
        <div>
          {timelineData.map((event, index) => (
            <div key={index} className="timeline-event">
              <div className="event-date">
                <strong>Data de Evento:</strong> {event.data_evento}
              </div>
              <div className="event-description">
                <strong>Descrição:</strong> {event.descricao}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;

