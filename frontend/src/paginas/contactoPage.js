import React, { useState } from 'react';
import axios from 'axios';

// import { use } from './../../../backend/routes/api';

import '../estilos/components/pages/contactoPage.css'


const contactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder">
        <div className="columna left">
            <h2>Contacto Rápido</h2>
            <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} />
                </p>
                <p>
                    <label for="telefono">Teléfono</label>
                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                </p>
                <p className="acciones"><input type="submit" value="Enviar" /></p>

            </form>
            {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}

        </div>
        <div className="columna right">
            <h2>Información de Contacto</h2>
            <p>Agradecemos tu consulta, responderemos lo antes posible.</p>
            <ul>
                <li>Celular: 223 5915329</li>
                <li>Email: contacto@transportesx.com</li>
                <li>Facebook: /TransportesX</li>
                <li>Twitter: @TransportesXonline</li>
                
            </ul>
        </div>
    </main>
    );
}
export default contactoPage;