import "./App.css";
import images from './Components/images'

import NavBar from './Components/NavBar'


function App() {
  return (
    <div>
      <h1> Tienda Flamenco </h1>
      <NavBar />
      <h2> Camisetas </h2>
      <section className="cards">
        <figure className="card">
          <a href="# " target="blank">
            <img src={images.imgAlex} alt="Alex"></img>
            <figcaption>Alex</figcaption>
            <figcaption>$9999</figcaption>
          </a>
        </figure>

        <figure className="card">
          <a href="# " target="blank">
            <img src={images.imgTT} alt="TT"></img>
            <figcaption>TT cs</figcaption>
            <figcaption>$9999</figcaption>
          </a>
        </figure>

        <figure className="card">
          <a href="# " target="blank">
            <img src={images.imgPain} alt="Pain"></img>
            <figcaption>Pain Harold</figcaption>
            <figcaption>$9999</figcaption>
          </a>
        </figure>

        <figure className="card">
          <a href="# " target="blank">
            <img src={images.imgDuraz} alt="Durazno"></img>
            <figcaption>Duraznelo</figcaption>
            <figcaption>$1000</figcaption>
          </a>
        </figure>
      </section>
      <hr />

      <h2> Pantalones </h2>
      <section>
        <figure className="card">
          <a href="# " target="blank">
            <img src={images.imgPan1} alt="Pantalon1"></img>
            <figcaption>Verde</figcaption>
            <figcaption>$1000</figcaption>
          </a>
        </figure>

        <figure className="card">
          <a href="# " target="blank">
            <img src={images.imgPan2} alt="Pantalon2"></img>
            <figcaption>Violeta</figcaption>
            <figcaption>$1000</figcaption>
          </a>
        </figure>

        <figure className="card">
          <a href="# " target="blank">
            <img src={images.imgPan3} alt="Pantalon3"></img>
            <figcaption>Gris</figcaption>
            <figcaption>$1000</figcaption>
          </a>
        </figure>

        <figure className="card">
          <a href="# " target="blank">
            <img src={images.imgPan4} alt="Pantalon4"></img>
            <figcaption>Rosa</figcaption>
            <figcaption>$1000</figcaption>
          </a>
        </figure>
      </section>
      <hr />
      <h2> Zapatillas </h2>
      <section>
        <figure className="card">
          <a href="# " target="blank">
            <img src={images.imgZap1} alt="zapas1"></img>
            <figcaption>Azul</figcaption>
            <figcaption>$1000</figcaption>
          </a>
        </figure>

        <figure className="card">
          <a href="# " target="blank">
            <img src={images.imgZap2} alt="zapas1"></img>
            <figcaption>Verde</figcaption>
            <figcaption>$1000</figcaption>
          </a>
        </figure>

        <figure className="card">
          <a href="# " target="blank">
            <img src={images.imgZap3} alt="zapas3"></img>
            <figcaption>Marrón</figcaption>
            <figcaption>$1000</figcaption>
          </a>
        </figure>

        <figure className="card">
          <a href="# " target="blank">
            <img src={images.imgZap4} alt="zapas4"></img>
            <figcaption>Naranja</figcaption>
            <figcaption>$1000</figcaption>
          </a>
        </figure>

      </section>
      <hr/>
      <h3>Argentina</h3>

    </div>
  );
}

export default App;
