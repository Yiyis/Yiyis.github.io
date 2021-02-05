import './style.css';
import Lottie from 'react-lottie';
import animation from './animation.json';

function App() {
  const bodymovinOptions = {
    renderer: "svg",
    loop: false,
    autoplay: true,
   animationData: animation
 }
  return (
    <div className="App">
    <div id="header-nav">
      <a href="#menu" className="menu-link">
        <span className="bar1"></span>
        <span className="bar2"></span>
        <span className="bar3"></span>
      </a>
      <nav id="menu" className="navbutton three" role="navigation">
        <ul>
          <li><a href="index.html" id="active">Hello!</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="about.html">About</a></li>
        </ul>
      </nav>
    </div>
    <div id="introcontainer">
      <p className="block">
        Maker | Developer | Designer
      </p>
    </div>
    <div className="container">
    <div className="bm">
         <Lottie options={bodymovinOptions} />
         </div>
      <div className="line">
        <div className="square" id="square">Y</div>
        <div className="square">I</div>
        <div className="square">Y</div>
        <div className="square">I</div>
        <div className="square">S</div>
        <div className="square">H</div>
        <div className="square">A</div>
        <div className="square">O</div>
      </div>
    </div>
    </div>
  );
}

export default App;
