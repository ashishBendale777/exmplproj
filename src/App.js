import logo from './logo.svg';
import './App.css';
import Home from './Home';
import NavScroll from './compo/NavScroll';
import 'bootstrap/dist/css/bootstrap.min.css'
import Conract from './compo/Conract';

//React use for SPA
function App() {
  return (
    <div>
      <NavScroll />
      <section id='home'>
        <Home />
      </section>
      <section id='contact'>
        <Conract />
      </section>
    </div>
  );
}

export default App;
