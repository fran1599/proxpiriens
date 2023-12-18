

import ContactForm from "@/organims/ContactForm"


const contacto = () => {
  return (
    <> 
    <div>
      <h1>CONTACTO</h1>
      <br/>
      <p>Completa con tus datos, y a la brevedad nos comunicaremos..</p>
      <ContactForm />
    </div>

    <style jsx>{` 
       
        h1 {
          text-align: center;
          margin-top: 80px;
        }

        p {
          margin-left: 10px;
          margin-bottom: 30px;
        }
      `}</style>
    </>

  );
};

export default contacto
  