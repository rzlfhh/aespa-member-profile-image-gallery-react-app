import './css/Header.css';
import {Helmet} from "react-helmet";

function Header() {
  return (
    <header className="App-header">

        <Helmet>
          <meta charSet="utf-8" />
          <title>AESPA Member</title>
          <link rel="icon" href="https://kpopping.com/documents/54/0/400/first_Aespa_official_symbol_logo-removebg-preview.webp" />
        </Helmet>
      
        <h2>Aespa Yeppi Yeppi</h2>

        <nav>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>contact</a></li>
        </nav>
    </header>
  );
}

export default Header;
