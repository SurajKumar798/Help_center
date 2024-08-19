import {useState} from 'react';
import './App.css';
import ContentPage from './components/Content/ContentPage';
import Header from './components/Header/Header';
import SearchBody from './components/Search/SearchBody';
import Footer from './components/Footer/Footer';

function App() {
  const[cardData, setCardData] = useState(null)
  return (
    <div className="App">
      <Header />
      <SearchBody onSearchResult = {setCardData}/>
      <ContentPage cardData={cardData} />
      <Footer />
    </div>
  );
}

export default App;
