import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./../Style/carousel.css"
import {SliderData} from "./../Data/SliderData"
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function ImageCarousel(){
  return(
    <div className="image-carousel">
    <Carousel responsive={responsive} containerClass="carousel-container" infinite={true} > 
    

    
            {SliderData.map((events, id) => (
              <div className="carousel-content">
                <div>
                  <img src={events.image}></img>
                </div>
                <div className= "carousel-card">
                    <div className="dates">
                      <h2>{events.eventInfo.month}</h2>
                      <h3>{events.eventInfo.date}</h3>
                        <div className="date">
                            <p>{events.eventInfo.time}</p>
                        </div>
                    </div>
                    <div className="card-info ">
                        <h4>{events.eventInfo.eventTitle}</h4>
                        <h5>{events.eventInfo.location}</h5>
                        <h6>{events.eventInfo.directions}</h6>
                        <p>{events.eventInfo.paragraph}</p>
                        <div>
                        <h1>Read More</h1>
                        </div>
                        
                    </div>
            
                </div>
                </div>
                
            
                ))}
      
      
    
    </Carousel>
    </div>
    
  )
}

export default ImageCarousel;