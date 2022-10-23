import './App.scss';
import Collection from './Components/Collection/Collection';
import Faq from './Components/Faq/Faq';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Rarity from './Components/Rarity/Rarity';
import Roadmap from './Components/Roadmap/Roadmap';
import Team from './Components/Team/Team';
import Top from './Components/Top/Top';

function App() {
  return (
    <div className="App">
      <Header/>
      <Top/>
      <Collection/>
      <Rarity/>
      <Roadmap/>
      <Team/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
