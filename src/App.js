import './App.css'
import Banner from './component/Banner/Banner'
import NavBar from './component/navbar/NavBar'
import RowPost from './component/Row/RowPost'
import { netflix_originals,Horror,romance,comedy,documentry,action, trending } from './urls';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={trending} title="Trending"/>
      <RowPost url={netflix_originals}  title="Netflix Originals" isSmall/>
      <RowPost url={action} title="Actions" isSmall />
      <RowPost url={Horror} title="Horror" isSmall />
      <RowPost url={romance} title="Romance" isSmall />
      <RowPost url={documentry} title="Documentry" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
    </div>
  );
}

export default App;
