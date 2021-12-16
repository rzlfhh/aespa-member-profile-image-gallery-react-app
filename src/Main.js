import './css/Main.css';
import Karina from './images/Karina.jpg';
import Gigi from './images/Giselle.jpg';
import Winter from './images/Winter1.jpg';
import Ning from './images/Ningning1.jpg';

function Main() {
  return (
    <div className="card-aespa">
        <div className="cards">
          <img src={Karina} alt="pics-member" />
          <div className='overlay'>
            <h3>Karina</h3>
          </div>
      </div>
      <div className="cards">
        <img src={Gigi} alt="pics-member" />
        <div className='overlay'>
            <h3>Gissele</h3>
          </div>
      </div>
      <div className="cards">
        <img src={Winter} alt="pics-member" />
        <div className='overlay'>
            <h3>Winter</h3>
          </div>
      </div>
      <div className="cards">
        <img src={Ning} alt="pics-member" />
        <div className='overlay'>
            <h3>Ning Ning</h3>
          </div>
      </div>

    </div>
  );
}

export default Main;