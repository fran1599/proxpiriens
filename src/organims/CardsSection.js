import Link from "next/link";
import CardsContainer from "./CardsContainer";

const CardsSection = () => {
  return (
    <>
      <section>
        <h2> Más populares:</h2>
        <CardsContainer />
      </section>

      <style jsx>
        {`
          section {
            text-align: center;
            background-color: var(--quinary-color);
            padding-bottom: 10px;

           }

          h2 {
            font-size: 1.5rem;
            padding-top: 20px;
            margin-bottom: -10px;
            font-family: "Alfa Slab One", serif;
            letter-spacing: 0.1em;
            color: #0f224c
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
