
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Datos del formulario:', formData);
    
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Nombre y Apellido:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Correo electrónico:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Consulta:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="8"
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>

    <style jsx>{`
        form {
          max-width: 400px;
          min-height: 100vh;
          margin: 0 auto;
        }

        label {
          display: block;
          margin-bottom: 10px;
        }

        input,
        textarea {
          width: 100%;
          padding: 8px;
          margin-bottom: 15px;
          box-sizing: border-box;
          border-radius: 10px;
        }

        textarea {
          resize: none;
        }

        button {
          background-color: #4caf50;
          color: white;
          padding: 10px 15px;
          border: none;
          cursor: pointer;
          border-radius: 5px; 
          transition: background-color 0.3s ease;

        }

        button:hover {
          background-color: #45a049; 
        }
      `}</style>

    </>
  );
};

export default ContactForm;