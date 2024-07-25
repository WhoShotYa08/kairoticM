import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/landing.css";

const LandingScreen = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div data-spy="scroll" data-target=".navbar" data-offset="50">
      <div id="Benvenuti">
        {/* Start navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar fixed-top navbar-light bg-light">
          <a className="navbar-brand" href="#Benvenuti">
            <img
              src="/images2/logo.png"
              width="50"
              height="50"
              className="d-inline-block"
              alt=""
            />{" "}
            Italian Restaurant
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#Benvenuti">
                  Benvenuti
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Ristorante">
                  Ristorante
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Menu">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Prenotazione">
                  Prenotazione
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#DoveSiamo">
                  Dove Siamo
                </a>
              </li>
              <li className="nav-item">
                <a href="../index.html" className="language" rel="en-En">
                  <img
                    src="images/english.ico"
                    className="flag"
                    alt="English"
                  />
                </a>
                <a href="index.html" className="language" rel="it-IT">
                  <img src="images2/italy.ico" className="flag" alt="Italiano" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* End Navigation Bar */}
        {/* Start Carousel */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100 img-fluid img-slider"
                src="/images2/slider1.jpg"
                alt="First slide"
              />
              <div className="carousel-caption">
                <h2>Benvenuti!</h2>
                <p>...</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 img-fluid img-slider"
                src="/images2/slider2.jpg"
                alt="Second slide"
              />
              <div className="carousel-caption">
                <h2>Cucina Tradizionale Italiana</h2>
                <p>...</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 img-fluid img-slider"
                src="images2/slider3.jpg"
                alt="Third slide"
              />
              <div className="carousel-caption">
                <h2>Prodotti Selezionati</h2>
                <p>...</p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      {/* End of Carousel */}
      {/* Ristorante */}
      <div className="container">
        <div className="row" id="Ristorante">
          <div className="col navMenu">
            <h2 className="text-center">~ Ristorante ~</h2>
          </div>
        </div>
        <div className="row bg-light">
          <div className="col-md-6">
            <h3>Location</h3>
            <p>
              Grazie per esserti fermato. Siamo l'ultimo autentico ristorante
              italiano a Milano, che serve deliziosi piatti della cucina
              italiana cucinati dai migliori chef. Ti bastano pochi minuti per
              navigare attraverso il nostro sito Web e controllare il nostro
              menu. Speriamo che ti unirai presto a noi per una superba
              esperienza culinaria italiana.
            </p>
            <h5>Un'esperienza unica</h5>
            <p>
              Grazie per esserti fermato. Siamo l'ultimo autentico ristorante
              italiano a Milano, che serve deliziosi piatti della cucina
              italiana cucinati dai migliori chef. Ti bastano pochi minuti per
              navigare attraverso il nostro sito Web e controllare il nostro
              menu. Speriamo che ti unirai presto a noi per una superba
              esperienza culinaria italiana.
            </p>
          </div>
          <div className="col-md-6" data-aos="fade-up">
            <img
              className="img-fluid"
              src="images2/location.jpg"
              alt="Location"
            />
          </div>
        </div>
        <div className="row bg-light">
          <br />
        </div>
        <div className="row bg-light">
          <div className="col-md-6 order-md-1 order-2" data-aos="fade-up">
            <img className="img-fluid" src="images2/cucina.jpg" alt="Cucina" />
          </div>
          <div className="col-md-6 order-md-12 order-1">
            <h3>Cucina</h3>
            <p>
              Grazie per esserti fermato. Siamo l'ultimo autentico ristorante
              italiano a Milano, che serve deliziosi piatti della cucina
              italiana cucinati dai migliori chef. Ti bastano pochi minuti per
              navigare attraverso il nostro sito Web e controllare il nostro
              menu. Speriamo che ti unirai presto a noi per una superba
              esperienza culinaria italiana.
            </p>
            <h5>Un'esperienza unica</h5>
            <p>
              Grazie per esserti fermato. Siamo l'ultimo autentico ristorante
              italiano a Milano, che serve deliziosi piatti della cucina
              italiana cucinati dai migliori chef. Ti bastano pochi minuti per
              navigare attraverso il nostro sito Web e controllare il nostro
              menu. Speriamo che ti unirai presto a noi per una superba
              esperienza culinaria italiana.
            </p>
          </div>
        </div>
        {/* End of Ristorante */}
        {/* Start of Menu */}
        <div className="row" id="Menu">
          <div className="col navMenu">
            <h2 className="text-center">~ Menu ~</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4" data-aos="slide-up">
            <div className="card view zoom">
              <img
                className="card-img-top img-fluid"
                src="images2/menu-carne.jpg"
                alt="Menu di Carne"
              />
              <div className="card-body">
                <h5 className="card-title">~ Menu di Carne ~</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Bocconcini di carne in nido di sfoglia
                  </li>
                  <li className="list-group-item">
                    Bruschette con maiale al curry
                  </li>
                  <li className="list-group-item">Uova al prosciutto</li>
                  <li className="list-group-item">Vitello tonnato</li>
                  <li className="list-group-item">
                    Fesa di tacchino marinata con olive
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="slide-up">
            <div className="card">
              <img
                className="card-img-top img-fluid"
                src="images2/menu-pesce.jpg"
                alt="Menu di Pesce"
              />
              <div className="card-body">
                <h5 className="card-title">~ Menu di Pesce ~</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Carpaccio di polpo</li>
                  <li className="list-group-item">Impepata di cozze</li>
                  <li className="list-group-item">Insalata di mare</li>
                  <li className="list-group-item">Sautè di cozze</li>
                  <li className="list-group-item">Zuppa di pesce</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="slide-up">
            <div className="card">
              <img
                className="card-img-top img-fluid"
                src="images2/menu-vegano.jpg"
                alt="Menu Vegano"
              />
              <div className="card-body">
                <h5 className="card-title">~ Menu Vegano ~</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Tofu impanato</li>
                  <li className="list-group-item">Uova alla contadina</li>
                  <li className="list-group-item">
                    Fusilli alla carbonara vegana
                  </li>
                  <li className="list-group-item">
                    Farfalle integrali con piselli
                  </li>
                  <li className="list-group-item">Penne al pomodoro fresco</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End of Menu */}
        {/* Start of Prenotazione */}
        <div className="row" id="Prenotazione">
          <div className="col navMenu">
            <h2 className="text-center">~ Prenotazione ~</h2>
          </div>
        </div>
        <div className="row bg-light">
          <div className="col-md-6">
            <h3>Location</h3>
            <p>
              Grazie per esserti fermato. Siamo l'ultimo autentico ristorante
              italiano a Milano, che serve deliziosi piatti della cucina
              italiana cucinati dai migliori chef. Ti bastano pochi minuti per
              navigare attraverso il nostro sito Web e controllare il nostro
              menu. Speriamo che ti unirai presto a noi per una superba
              esperienza culinaria italiana.
            </p>
            <h5>Un'esperienza unica</h5>
            <p>
              Grazie per esserti fermato. Siamo l'ultimo autentico ristorante
              italiano a Milano, che serve deliziosi piatti della cucina
              italiana cucinati dai migliori chef. Ti bastano pochi minuti per
              navigare attraverso il nostro sito Web e controllare il nostro
              menu. Speriamo che ti unirai presto a noi per una superba
              esperienza culinaria italiana.
            </p>
          </div>
          <div className="col-md-6" data-aos="fade-up">
            <img
              className="img-fluid"
              src="images2/location.jpg"
              alt="Location"
            />
          </div>
        </div>
        <div className="row bg-light">
          <br />
        </div>
        <div className="row bg-light">
          <div className="col-md-6 order-md-1 order-2" data-aos="fade-up">
            <img className="img-fluid" src="images2/cucina.jpg" alt="Cucina" />
          </div>
          <div className="col-md-6 order-md-12 order-1">
            <h3>Cucina</h3>
            <p>
              Grazie per esserti fermato. Siamo l'ultimo autentico ristorante
              italiano a Milano, che serve deliziosi piatti della cucina
              italiana cucinati dai migliori chef. Ti bastano pochi minuti per
              navigare attraverso il nostro sito Web e controllare il nostro
              menu. Speriamo che ti unirai presto a noi per una superba
              esperienza culinaria italiana.
            </p>
            <h5>Un'esperienza unica</h5>
            <p>
              Grazie per esserti fermato. Siamo l'ultimo autentico ristorante
              italiano a Milano, che serve deliziosi piatti della cucina
              italiana cucinati dai migliori chef. Ti bastano pochi minuti per
              navigare attraverso il nostro sito Web e controllare il nostro
              menu. Speriamo che ti unirai presto a noi per una superba
              esperienza culinaria italiana.
            </p>
          </div>
        </div>
        {/* End of Prenotazione */}
        {/* Start of Dove Siamo */}
        <div className="row" id="DoveSiamo">
          <div className="col navMenu">
            <h2 className="text-center">~ Dove Siamo ~</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  title="gmap"
                  className="gmap_iframe"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=milano&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
