import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./../Style/calendar.css"
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Calendar(){
  return(
    <div className="calendar">
    <Carousel responsive={responsive} containerClass="calendar-container" infinite={true} > 
    

      <div><h1>January</h1></div>
      <div><h1>February</h1></div>
      <div><h1>March</h1></div>
      <div><h1>April</h1></div>
      <div><h1>May</h1></div>
      <div><h1>June</h1></div>
      <div><h1>July</h1></div>
      <div><h1>August</h1></div>
      <div><h1>September</h1></div>
      <div><h1>October</h1></div>
      <div><h1>November</h1></div>
      <div><h1>December</h1></div>
      
    
    </Carousel>
    </div>
    
  )
}

export default Calendar;