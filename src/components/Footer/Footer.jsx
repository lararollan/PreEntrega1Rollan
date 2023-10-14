import "./Footer.css";

const Footer = () => {
    return (
        <div class="container-fluid fixed-bottom footer py-2">
      <footer className=" text-center py-3">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Ecosimuladores</p>
        </div>
      </footer>
      </div>
    );
  };
  
  export default Footer;