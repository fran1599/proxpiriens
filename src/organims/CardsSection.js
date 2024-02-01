
import CardsContainer from "./CardsContainer";
   
const CardsSection = () => {
  return (
    <>
      <section>
        <h2> MAS POPULARES:</h2>
        <CardsContainer />
      </section>

      <style jsx>
        {`
          section {
            text-align: center;
            padding-bottom: 10px;

           }

          h2 {
            font-size: 1.5rem;
            padding-top: 20px;
            margin-bottom: -10px;
            font-family: "Alfa Slab One", serif;
            letter-spacing: 0.1em;
            
          }


          @media only screen and (min-width: 767px) {
            h2 {
              font-size: 2rem;
            }

        `}
      </style>
    </>
  );
};

export default CardsSection;
