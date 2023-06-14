import './App.css';
import Header from './Components/Header';
import SubHeader from './Components/SubHeader';
import FirstMain from './Components/FirstMain';
import SecondMain from './Components/SecondMain';
import ForWho from './Components/ForWho';
import ThirdMain from './Components/ThirdMain';
import Card from './Components/Card';
import Promisses from './Components/Promisses';
import Biography from './Components/Biography';
import Help from './Components/Help';
import Footer from './Components/Footer';

  function App() {
   return (
    <div className="App">
      <Header />
      <SubHeader />
      <FirstMain />
      <SecondMain />
      <ForWho />
      <ThirdMain />
      <Card />
      <Promisses />
      <Biography />
      <Help />
      <Footer />
    </div>
  );
}

export default App;
