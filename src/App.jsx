import './App.css';

import CountDown from './components/CountDown';
import PictureAvatar from './components/PictureAvatar/PictureAvatar';

const App = () => {

  const fechaCuentaRegresiva = '2024-01-28T00:00:00';
  const fechaFiesta = "28 de Enero de 17 a 19:30"
  const salonName =  'Salón Traviesos';
  const salonAddress = 'Domingo Zipoli 916 B° Escobar';

  const linkMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.723287813425!2d-64.22441922362556!3d-31.394192595180236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298c178b4b527%3A0x832be3c0084313fb!2sFiestas%20Infantiles%20Traviesos!5e0!3m2!1ses-419!2sar!4v1705323969936!5m2!1ses-419!2sar";

  const openLink = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdGxh4TDjFjVkQ2nFRzNan5ii-9zCYHsI41lQyWlJPiIkyNjg/viewform', '_blank');
  }

  const openCopyright = () => {
    window.open('https://alejo-gomez.com.ar', '_blank');
  }


  return (
    <>
      <PictureAvatar/>
      <h1 className="title">¡Te invito a mi fiesta!</h1>

      <div className="subtitle">
        {/* <h2>¡Te invito a mi fiesta!</h2> */}
        <h3>{fechaFiesta}</h3>
      </div>

      <CountDown targetDate={fechaCuentaRegresiva} />

      <button onClick={openLink} className="btn-confirmar">
        Confirmar asistencia
      </button>

      <div className="salon-container">
        <h4>{salonName}</h4>
        <p>{salonAddress}</p>

        <iframe
          className="google-maps-iframe"
          src={linkMap}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <p className="copyrigth">
        Realizado por <span onClick={openCopyright}>CrabDesigns</span>
      </p>
    </>
  );
}

export default App
