import "./Footer.css";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
    return (
        <div class="container-fluid fixed-bottom footer py-2">
      <footer className=" text-center py-3">
        
       <Row>
          <div
            class="col-md-4 footer__redes d-flex align-items-center justify-content-center"
          >
            <h5 class="footer__redes__texto pe-3">Seguinos en redes!</h5>
            <ul class="nav footer__redes__lista d-flex">
              <li class="footer__redes__item">
                <a
                 
                  ><i class="footer__redes__icono bi bi-instagram"></i></a>
              </li>
              <li class="footer__redes__item">
                <a 
                  ><i class="footer__redes__icono bi bi-facebook"></i></a>
              </li>
              <li class="footer__redes__item">
                <a
                  ><i class="footer__redes__icono bi bi-linkedin"></i></a>
              </li>
            </ul>
          </div>
          <div
            class="col-md-4 footer__redes d-flex align-items-center justify-content-center"
          >
            <p className="brand">&copy; {new Date().getFullYear()} Ecosimuladores</p>
          </div>
          <div
            class="col-md-4 footer__mail d-flex align-items-center justify-content-center"
          >
            <i class="footer__mail__icono bi bi-envelope-at"></i>
            <h6>ecosimuladores@ejemplo.com</h6>
          </div>
        </Row>
      </footer>
      </div>
    );
  };
  
  export default Footer;