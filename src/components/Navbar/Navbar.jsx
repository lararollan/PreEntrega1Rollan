import "./Navbar.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">EcoSimuladores</a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse container" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul class="dropdown-menu">
          <h6 class="dropdown-header">Simuladores</h6>
            
            <li><a class="dropdown-item" href="#">Accesos vasculares</a></li>
            <li><a class="dropdown-item" href="#">Bloqueos nerviosos</a></li>
            <div class="dropdown-divider"></div>
              <h6 class="dropdown-header">Cursos</h6>
               <a class="dropdown-item" href="#">Cursos Presenciales</a>
              <a class="dropdown-item" href="#">Cursos Virtuales</a>
            
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Quiénes somos?</a>
        </li>
        
      </ul>
      <i className="bi bi-cart cartIcon"  ></i>
      <span className="number-icon badge rounded-pill">0</span>
     
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar
