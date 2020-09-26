const img = {
  backgroundImage: `url('/assets/img/slide/slide-1.jpg')`,
  width:"100%",
  height:"100%"
}
const img2 = {
  backgroundImage: `url('/assets/img/slide/slide-2.jpg')`,
  width:"100%",
  height:"100%"
}
const img3 = {
  backgroundImage: `url('/assets/img/slide/slide-3.jpg')`,
  width:"100%",
  height:"100%"
}
export default function Hero() {
    return (
        <section id="hero">
    <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

      <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

      <div className="carousel-inner" role="listbox">

        {/* <!-- Slide 1 --> */}
        <div className="carousel-item active" style={img}>
          <div className="carousel-container">
            <div className="container">
              <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Sailor</span></h2>
              <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
            </div>
          </div>
        </div>

        {/* <!-- Slide 2 --> */}
        <div className="carousel-item" style={img2}>
          <div className="carousel-container">
            <div className="container">
              <h2 className="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
              <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
            </div>
          </div>
        </div>

        {/* <!-- Slide 3 --> */}
        <div className="carousel-item" style={img3}>
          <div className="carousel-container">
            <div className="container">
              <h2 className="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
              <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
            </div>
          </div>
        </div>

      </div>

      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>

      <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>

    </div>
  </section>
    );
};