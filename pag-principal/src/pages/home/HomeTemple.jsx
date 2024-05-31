import React from 'react';
import './homeTemple.css';
import { Link } from 'react-router-dom';

function HomeTemple() {
  return (
    <div className="homeTemple">
      <header>
        <div className="container">
          <p className="logo">EDUSEX</p>
          <img src="https://w7.pngwing.com/pngs/899/367/png-transparent-gender-symbol-female-gender-miscellaneous-purple-woman.png" alt="imagen" />
          <nav>
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#contacto">Contact</a>
            <Link to={'/login'}>Login</Link>
            
          </nav>
        </div>
      </header>

        <section id="hero">
          <h1>SALUD SEXUAL <br />Y REPRODUCTIVA</h1>
          <button><Link to={'/registrar'}>¡Registrate!</Link></button>
        </section>

        <section id="sexualidad">
          <div className="container">
            <h2>“Descubre, aprende, disfruta: tu bienestar sexual importa"</h2>
            <div className="explorar">
              <div className="carta">
              <a href="#descripcion-sexualidad">
          <button><Link to={'/Chat'}>chat</Link></button>
              </a>
              </div>
              <div className="carta">
                <button><a href="#tips">Ver tips</a></button>
              </div>
              <div className="carta">
                <button><Link to={'/Game'}>juega</Link></button>
              </div>
            </div>
          </div>
        </section>

      <section id="anticonceptivos">
        <div className="container" id='about'>
          <div className="img-container"></div>
          <div className="texto">
            <h2>¿Qué es la sexualidad?</h2>
            <p>La sexualidad es una parte fundamental de la experiencia humana que abarca aspectos físicos, emocionales y sociales relacionados con el deseo, la intimidad y la reproducción.</p>

            <h2>¿Cómo vivir mi sexualidad correctamente?</h2>
            <p>Vivir la sexualidad de manera saludable implica respetar tus propios deseos y límites, comunicarte abiertamente con tu pareja, practicar sexo seguro y tomar decisiones informadas sobre tu salud sexual y reproductiva.</p>

            <h2>¿Qué debo hacer?</h2>
            <p>Para vivir una sexualidad plena y responsable, es importante educarte sobre anticonceptivos, enfermedades de transmisión sexual (ETS) y consentimiento sexual. También es recomendable visitar regularmente a un profesional de la salud para realizar chequeos y recibir orientación personalizada.</p>
          </div>
        </div>
      </section>

      <section id="descripcion-sexualidad">
  <div className="container">
    <h2 className="titulo-centrado">SEXUALIDAD</h2>
    <p>El cuerpo es la dimensión física a través de la cual existen los seres humanos. Es una herramienta para manifestar los sentidos, las emociones y el placer. El cuerpo siente, tiene necesidades, exige amor propio y es el lugar que permite la reproducción de la especie. De igual manera, el bienestar físico, psicológico y emocional se hace evidente a través de él. A lo largo de la vida, el cuerpo experimenta cambios que van marcando diferentes etapas en el desarrollo de las personas, siendo estas: Prenatal Infancia Niñez Adolescencia Juventud Adultez Vejez Por su parte, la sexualidad es la unión de lo biológico, lo social, lo psicológico y lo cultural. Es todo aquello que tiene que ver con el comportamiento, las actitudes y los sentimientos de la persona; forma parte fundamental de la personalidad del individuo y está orientada por la razón, la voluntad y las demás dimensiones y valores del ser humano. Educar para la sexualidad significa desarrollar competencias en las personas, niños y adolescentes, para la toma de decisiones responsables, informadas y autónomas sobre el propio cuerpo; basadas en el respeto a la dignidad de todo ser humano, de manera que se valore la diversidad de identidades y formas de vida. Esto es importante porque con ello se promueve la vivencia y construcción de relaciones de pareja, familiares y sociales pacíficas, equitativas y democráticas.</p>
  </div>
</section>

<section id="metodos-anticonceptivos">
  <div className="container" id='tips'>
  <h2 className="titulo-centrado">MÉTODOS ANTICONCEPTIVOS</h2>
    <div className="metodo-anticonceptivo">
      <div className="metodo metodo-1">
        <h3><i class="fas fa-male"></i> <i class="fas fa-female"></i> Preservativo (masculino y femenino)</h3>
        <p>
          <strong>Explicación:</strong> Funda delgada de látex o poliuretano que se coloca sobre el pene erecto o dentro de la vagina antes de la actividad sexual para evitar que los espermatozoides lleguen al óvulo.
          <br />
          <strong>Efectividad:</strong> 98% si se usa correctamente.
        </p>
      </div>

      <div className="metodo metodo-2">
        <h3><i class="fas fa-pills"></i> Píldoras anticonceptivas</h3>
        <p>
          <strong>Explicación:</strong> Medicamentos hormonales tomados diariamente para prevenir la ovulación.
          <br />
          <strong>Efectividad:</strong> 91%-99% si se toman correctamente.
        </p>
      </div>

      <div className="metodo metodo-3">
        <h3><i class="fas fa-baby-carriage"></i> DIU (Dispositivo Intrauterino)</h3>
        <p>
          <strong>Explicación:</strong> Pequeño dispositivo de plástico o metal colocado en el útero que impide que los espermatozoides lleguen al óvulo o la implantación del óvulo fecundado.
          <br />
          <strong>Efectividad:</strong> DIU de cobre 99%, DIU hormonal 99.8%.
        </p>
      </div>

      <div className="metodo metodo-4">
        <h3><i class="fas fa-hand-holding-medical"></i> Implante anticonceptivo</h3>
        <p>
          <strong>Explicación:</strong> Pequeño dispositivo insertado bajo la piel del brazo que libera progestina para evitar la ovulación.
          <br />
          <strong>Efectividad:</strong> 99%.
        </p>
      </div>

      <div className="metodo metodo-5">
        <h3><i class="fas fa-clock"></i> Anticonceptivo de emergencia (pastilla del día después)</h3>
        <p>
          <strong>Explicación:</strong> Usado después de una relación sexual sin protección para interferir con la fertilización o la implantación.
          <br />
          <strong>Efectividad:</strong> Más efectivo si se toma dentro de las primeras 24 horas.
        </p>
      </div>

      <div className="metodo metodo-6">
        <h3><i class="fas fa-calendar-alt"></i> Método de Billings (método del moco cervical)</h3>
        <p>
          <strong>Explicación:</strong> Observación del moco cervical para determinar los días fértiles. Se evita el sexo o se usa protección en esos días.
          <br />
          <strong>Efectividad:</strong> Menos confiable, tasa de fracaso del 20% o más.
        </p>
      </div>
    </div>
  </div>
</section>

      <section id="contact">
        <div className="container">
          <h2 id='contacto'>Contacto</h2>
          <form>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" />
            <button type="submit">Enviar</button>
          </form>
          <div className="nombres">
            <h3>INTEGRANTES</h3>
            <ul>
              <li>Campiño Velez Salomé</li>
              <li>Mesa Escobar Jhan Carlos</li>
              <li>Montoya Pacheco Carlos Andres</li>
              <li>Zapata Suarez Santiago</li>
            </ul>
          </div>
          <p className="derechos">Todos los derechos de autor reservados</p>
          <p className="derechos">©Corporación universitaria adventista</p>
        </div>
      </section>
    </div>


  );
}

export default HomeTemple;