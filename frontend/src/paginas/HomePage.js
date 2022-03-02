import '../estilos/components/pages/HomePage.css'

import React from 'react';
const HomePage = (props) => {
    return (
        <main className="holder">
        <div className="homeimg">
            <img src="img/home/img01.jpg" alt="transportesx" />
        </div>
        <div className="columnas">
            <div className="bienvenidos left">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id nihil alias deleniti natus quod provident quo reprehenderit amet, laboriosam eum? Harum impedit illo eveniet temporibus, atque velit optio quibusdam animi!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum voluptas labore, libero maiores fuga tenetur dolor! Sapiente, pariatur, optio cupiditate nostrum fugiat nemo, excepturi architecto odio exercitationem eligendi veritatis sit!</p>

            </div>
            <div className="testimonios right">
                <h2>
                    Testimonios
                </h2>
                <div className="testimonio">
                    <span className="cita">Sitio web recomendado
                    </span>
<span className="autor">
    Juan Gomez
</span>
                </div>

            </div>

        </div>

    </main>
    );
}
export default HomePage;