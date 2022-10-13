import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NotableDrops from "./components/NotableDrops";
import MeetMoringa from "./components/MeetMoringa";
import Footer from "./components/Footer";
import TopCollections from "./components/TopCollections";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Hero />
      <NotableDrops />
      <TopCollections />      
      {/* Top collections */}
      {/* Trending in all categories */}
      {/* Create and sell your NFTs */}
      {/* Resources for getting started */}
      {/* Browse by category */}
      <MeetMoringa />
      <Footer />
    </div>
  );
}

export default App;
