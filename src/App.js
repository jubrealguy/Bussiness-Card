import './App.css';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <div className='card'>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
