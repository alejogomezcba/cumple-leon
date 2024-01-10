import './App.css';

import CountDown from './components/CountDown';
import PictureAvatar from './components/PictureAvatar/PictureAvatar';

const App = () => {

  const targetDate = '2024-01-28T00:00:00';

  const openLink = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdGxh4TDjFjVkQ2nFRzNan5ii-9zCYHsI41lQyWlJPiIkyNjg/viewform', '_blank');
  }

  const openCopyright = () => {
    window.open('https://alejo-gomez.com.ar', '_blank');
  }


  return (
    <>
      <PictureAvatar/>
      <h1 className="title">León</h1>

      <div className="subtitle">
        <h2>¡Te invito a mi fiesta!</h2>
        <h3>28 de Enero de 17 a 19:30</h3>
      </div>

      <CountDown targetDate={targetDate} />

      <div className="salon-container">
        <h4>Salón Traviesos</h4>
        <p>Domingo Zipoli 916 B° Escobar</p>

        <iframe
          className="google-maps-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.7229395760096!2d-64.22436802362556!3d-31.394202195180725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298c178a91017%3A0x83a802872632abdd!2sDomingo%20Z%C3%ADpoli%20916%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1704856353871!5m2!1ses-419!2sar"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <button onClick={openLink} className="btn-confirmar">
        Confirmar asistencia
      </button>

      <p className="copyrigth">
        Realizado por <span onClick={openCopyright}>CrabDesigns</span>
      </p>
    </>
  );
}

export default App
