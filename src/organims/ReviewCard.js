import React from 'react';
import styled from 'styled-components';

const ReviewContainer = styled.div`
  text-align: center;
  font-family: 'SF Pro Display, sans-serif';

  h2 {
    margin-bottom: 20px;
  }

  .reviews-container {
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-around;
    margin-top: 20px;
  }

  .review {
    border: 1px solid #ccc;
    padding: 20px;
    width: calc(20% - 20px);
    margin-bottom: 20px;
  }

  .profile-pic {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-bottom: 10px;
  }

  .rating {
    color: #f39c12;
    font-size: 1.5em;
    margin-bottom: 10px;
  }
`;

const Review = ({ name, rating, image, comment }) => (
  <div className="review">
    <img src={image} alt={`${name}'s profile`} className="profile-pic" />
    <h3>{name}</h3>
    <div className="rating">{Array.from({ length: rating }, (_, index) => <span key={index}>⭐</span>)}</div>
    <p>{comment}</p>
  </div>
);

function App() {
  return (
    <ReviewContainer>
      <h2>Las mejores Experiencias</h2>
      <div className="reviews-container">
        <Review
          name="Laura S."
          rating={5}
          image="/img/profiles/Laura-profile.jpg"
          comment='"Con una amiga compramos el paquete de 6 días a las Cataratas del Iguazú. Es súper recomendable y lo volvería a repetir."'
        />
        <Review
          name="Andy B."
          rating={5}
          image="/img/profiles/Andy-profile.webp"
          comment='"Fuimos a avistar ballenas a Puerto Madryn con mi esposa. Fue mágico."'
        />
        <Review
          name="Nora G."
          rating={5}
          image="/img/profiles/Nora-profile.webp"
          comment='"Pensaba que las excursiones no eran para mí, pero pude encontrarme con la naturaleza y disfrutar de principio a fin"'
        />
        <Review
          name="Vivian W."
          rating={5}
          image="/img/profiles/Vivian-profile.webp"
          comment='"Excelente en todos los aspectos. Ya estoy pensando cuál va a ser el próximo destino que voy a conocer"'
        />
        <Review
          name="Jorge D."
          rating={5}
          image="/img/profiles/Jorge-profile.jpeg"
          comment='"En mis próximas vacaciones ya sé con qué empresa voy a viajar @proxpirienstravel"'
        />
      </div>
    </ReviewContainer>
  );
}

export default App;

