import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




const Sliders = ({ items ,itemshow }) => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: itemshow,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <>
      <Carousel
        className=" object-contain h-screen"
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-50-px"
      >
        {items.map((item) => (

          <div className=" max-w-sm h-40 bg-white rounded-lg overflow-hidden shadow-lg" key={item.id}>
            <img className=" object-contain bg-cover bg-center w-full h-40" src={item.image} alt={item.name} />
          </div>

        ))}
      </Carousel>;
    </>
  );
}

export default Sliders;
