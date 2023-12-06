import { images } from '../../next.config';
import React from 'react';




const Inscripcion = () => {
  return (
    <div className="inscripcion">
      <div className="programa-recompensas"></div>
      <div className="seccion-recompensas">
        <h1>¡Sumate a nuestro programa de recompensas!</h1>
        <button>Quiero Inscribirme</button>
      </div>
    </div>
  );
};


<style jsx>
        {`
          inscripcion {
            position: relative;
            height: 100vh; 
            background-image: url('./proxpiriens/public/fondo-inscribirse.png'); 
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          programa-recompensas{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
          }

          h1 {
            font-size: 2em;
            margin-bottom: 20px;
          }
          
          button {
            padding: 10px 20px;
            font-size: 1em;
            background-color: #B3426C; 
            color: #FFFFFF;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          button:hover {
            background-color: #45a049; 
          }        

        `}
      </style>

 
export default Inscripcion;
