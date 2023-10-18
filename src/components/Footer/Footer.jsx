import "./Footer.css";
import Row from 'react-bootstrap/Row';

import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
    return (
        <div className="container-fluid fixed-bottom footer py-2">
      <footer className=" text-center py-3">
        
       <Row>
          <div
            className="col-md-4 footer__redes d-flex align-items-center justify-content-center"
          >
            <h5 className="footer__redes__texto pe-3">Seguinos en redes!</h5>
            <ul className="nav footer__redes__lista d-flex">
              <li className="footer__redes__item">
                <a href="https://www.instagram.com/"
                 
                  ><i className="footer__redes__icono bi bi-instagram"></i></a>
              </li>
              <li className="footer__redes__item">
                <a href="https://www.facebook.com/"
                  ><i className="footer__redes__icono bi bi-facebook"></i></a>
              </li>
              <li className="footer__redes__item">
                <a href="https://www.linkedin.com/feed/"
                  ><i className="footer__redes__icono bi bi-linkedin"></i></a>
              </li>
            </ul>
          </div>
          <div
            className="col-md-4 footer__redes d-flex align-items-center justify-content-center"
          >
            <p className="brand">&copy; {new Date().getFullYear()} Ecosimuladores</p>
          </div>
          <div
            className="col-md-4 footer__mail d-flex align-items-center justify-content-center"
          >
            <i className="footer__mail__icono bi bi-envelope-at"></i>
            <h6>ecosimuladores@ejemplo.com</h6>
          </div>
        </Row>
      </footer>
      </div>
    );
  };
  
  export default Footer;