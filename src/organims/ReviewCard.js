

const ReviewCard = () => {
  return (
    <>
  <div className="review-container">
    <h1>LAS MEJORES <span style={{ color: '#b3426c' }}>EXPERIENCIAS</span></h1>
    <div className="reviews-container">
      
      <div className="review">
        <img src="/img/profiles/Laura-profile.jpg" alt="Laura's profile" className="profile-pic" />
        <h3>Laura S.</h3>
        <div className="rating">
          {Array.from({ length: 5 }, (_, index) => <span key={index}>⭐</span>)}
        </div>
        <p>"Con una amiga compramos el paquete de 6 días a las Cataratas del Iguazú. Es súper recomendable y lo volvería a repetir."</p>
      </div>
      
      <div className="review">
        <img src="/img/profiles/Andy-profile.webp" alt="Andy's profile" className="profile-pic" />
        <h3>Andy B.</h3>
        <div className="rating">
          {Array.from({ length: 5 }, (_, index) => <span key={index}>⭐</span>)}
        </div>
        <p>"Fuimos a avistar ballenas a Puerto Madryn con mi esposa. Fue mágico."</p>
      </div>
      
      <div className="review">
        <img src="/img/profiles/Nora-profile.webp" alt="Nora's profile" className="profile-pic" />
        <h3>Nora G.</h3>
        <div className="rating">
          {Array.from({ length: 5 }, (_, index) => <span key={index}>⭐</span>)}
        </div>
        <p>"Pensaba que las excursiones no eran para mí, pero pude encontrarme con la naturaleza y disfrutar de principio a fin"</p>
      </div>
      
      <div className="review">
        <img src="/img/profiles/Vivian-profile.webp" alt="Vivian's profile" className="profile-pic" />
        <h3>Vivian W.</h3>
        <div className="rating">
          {Array.from({ length: 5 }, (_, index) => <span key={index}>⭐</span>)}
        </div>
        <p>"Excelente en todos los aspectos. Ya estoy pensando cuál va a ser el próximo destino que voy a conocer"</p>
      </div>
      
      <div className="review">
        <img src="/img/profiles/Jorge-profile.jpeg" alt="Jorge's profile" className="profile-pic" />
        <h3>Jorge D.</h3>
        <div className="rating">
          {Array.from({ length: 5 }, (_, index) => <span key={index}>⭐</span>)}
        </div>
        <p>"En mis próximas vacaciones ya sé con qué empresa voy a viajar @proxpirienstravel"</p>
      </div>

    </div>
  </div>

  <style jsx>{`
        .review-container {
          text-align: center;
          font-family: "SF Pro Display, sans-serif";
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center; 
        }
        
        h1 {
          margin-top: 80px;
          margin-bottom: 50px;
          font-size: 2em;
        }
        
        .reviews-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          margin-top: 20px;
        }
        
        .review {
          border: 1px solid #ddd;
          background-color: #fff;
          border-radius: 8px;
          padding: 20px;
          width: calc(20% - 20px);
          margin-bottom: 20px;
          transition: transform 0.3s ease-in-out;
        }

        .review:hover {
          transform: scale(1.05);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

        @media only screen and (max-width: 768px) {
          .review {
            width: calc(33.33% - 20px);
          }
        }

        @media only screen and (max-width: 480px) {
          .review {
            width: calc(100% - 20px);
          }
        }

      `}</style>  
</>
  );
};
export default ReviewCard;