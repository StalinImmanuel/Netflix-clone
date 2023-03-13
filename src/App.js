
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/navbar/Navbar';
import { Action,Comedy,Horror,Originals,Romanatic,Trending } from './Urls';
import Rowpost from './components/Rowpost/Rowpost';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={Originals} title='Netflix Originals'/>
      <Rowpost url={Trending} title='Trending' isSmall/>

      <Rowpost url={Action} title='Action' isSmall/>

      <Rowpost url={Horror} title='Horror' isSmall/>
      <Rowpost url={Comedy} title='Comedy' isSmall/>

      <Rowpost url={Romanatic} title='Romance' isSmall/>

      {/* <Rowpost url={Document} title='Documenteries' isSmall/> */}
    </div>
  );
}

export default App;
