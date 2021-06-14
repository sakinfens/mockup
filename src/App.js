
import Header from "./Components/Header";
import EventsBanner from "./Components/EventsBanner"
import Slider from "./Components/Slider";
import ImageCarousel from "./Components/Carousel"
import Events from "./Components/Events";
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import './App.css';
import Calendar from "./Components/Calendar";


function App() {
  return (
    <div className="App">
     
      <Header/>
      <EventsBanner/>
      <ImageCarousel/>
      <Calendar/>
      <Events/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
