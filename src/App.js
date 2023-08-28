import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
// import Movie_app from "./pages/Movie_app";
import NotFound from "./pages/NotFound";
// import Tv from "./pages/Tv";
import Header from "./components/Header";
import MovieDetail from "./pages/MovieDetail";
// import { HashRouter as Router, Switch} from "react-router-dom";

function App() {
  return (
    <div className="root-wrap">
    <BrowserRouter basename={Process.env.PUBLIC_URL}>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Movie_app" element={<Movie_app />} /> */}
        {/* <Route path="/movie" element={<Movies />} /> */}
        {/* <Route path="/movie/:title" element={< />} /> */}
        <Route path="/MovieDetail" element={<MovieDetail />} />
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
