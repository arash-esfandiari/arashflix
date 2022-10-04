import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';

function App() {
    return (
        <div className="App">
            {/* Nav */}
            <Banner />
            <Row title="ARASHFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow='true' />
            <Row title="Trending now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies " fetchUrl={requests.fetchActionMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
}

export default App;
