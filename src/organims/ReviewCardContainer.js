import React from 'react';
import ReviewCard from './ReviewCard';

const reviews = [
  { author: 'Laura S.', comment: '"Con una amiga compramos el paquete de 6 días a las Cataratas del Iguazú. Es súper recomendable y lo volvería a repetir"', rating: 5, imageUrl:'../../public/img/profiles/Laura-profile.jpg'},
  { author: 'Andy B.', comment: '"Fuimos a avistar ballenas a Puerto Madryn con mi esposa. Fue mágico"', rating: 5, imageUrl: '../../public/img/profiles/Andy-profile.webp' },
  { author: 'Nora G.', comment: '"Pensaba que las excursiones no eran para mí, pero pude encontrarme con la naturaleza y disfrutar de principio a fin"', rating: 5, imageUrl: '../../public/img/profiles/Nora-profile.webp'},
  { author: 'Vivian W.', comment: '"Excelente en todos los aspectos. Ya estoy pensando cuál va a ser el próximo destino que voy a conocer"', rating: 5, imageUrl: '../../public/img/profiles/Vivian-profile.webp'},
  {author: 'Jorge D', comment: '"En mis próximas vacaciones ya sé con qué empresa voy a viajar @proxpirienstravel"', rating: 5, imageUrl: '../../public/img/profiles/Jorge-profile.jpeg' }

];

const App = () => {
  return (
    <div className="app">
      <h1>Las mejores Experiencias</h1>
      <div className="review-container">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewCardContainer;