import './App.css';
import Row from './Row';
import requests from './request';

function App() {
    return (
        <div className="App">
            <h1>Baba velam kon</h1>
            <Row title="ARASHFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="Trending now" fetchUrl={requests.fetchTrending} />
        </div>
    );
}

export default App;
