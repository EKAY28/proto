import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div className="home">
      <div className="cover">
        <h1>Welcome to CQA Review Center for Social Work</h1>
        <p>We provide high-quality review materials for social work licensure exams.</p>
      </div>

      <div className="content">
       
        <div className="description">
          <h2>About Us</h2>
          <p>
            CQA Review Center for Social Work is a trusted provider of review materials for social work licensure exams. We have been in the industry for over 10 years, helping aspiring social workers pass their exams with flying colors. Our materials are designed by experts in the field and are regularly updated to stay current with the ever-evolving social work landscape.
          </p>

          <div className="box-container">
            <div className="mission-box">
              <h3>MISSION:</h3>
              <p>PROVIDE EXCELLENT REVIEW TO STUDENTS</p>
            </div>
            <div className="vision-box">
              <h3>VISION:</h3>
              <p>BRIDGING INSTRUMENT TO SUCCESSFUL PROFESSION</p>
            </div>
            <div className="goals-box">
              <h3>GOALS:</h3>
              <ul>
                <li>PRODUCE PROFESSIONAL SOCIAL WORKERS AND EDUCATORS</li>
                <li>PROVIDE QUALITY REVIEW TO SOCIAL WORK AND EDUCATION GRADUATES</li>
              </ul>
            </div>
          </div>
          <h2>Our Services</h2>
          <div className="services-container">
            <div className="service">
              <img src="https://via.placeholder.com/150x150?text=Service+1" alt="Service 1" />
              <h3>Service 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
            </div>
            <div className="service">
              <img src="https://via.placeholder.com/150x150?text=Service+2" alt="Service 2" />
              <h3>Service 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
            </div>
            <div className="service">
              <img src="https://via.placeholder.com/150x150?text=Service+3" alt="Service 3" />
              <h3>Service 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
            </div>
            <div className="service">
              <img src="https://via.placeholder.com/150x150?text=Service+4" alt="Service 4" />
              <h3>Service 4</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
            </div>
            <div className="service">
              <img src="https://via.placeholder.com/150x150?text=Service+5" alt="Service 5" />
              <h3>Service 5</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
            </div>
            <div className="service">
              <img src="https://via.placeholder.com/150x150?text=Service+5" alt="Service 5" />
              <h3>Service 6</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
             </div>
             </div>
                    <div>
                          <h2>What our students say about us</h2>
                          <Carousel>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src="https://via.placeholder.com/800x400?text=First+testimonial"
                              alt="First testimonial"
                            />
                            <Carousel.Caption>
                              <h3>John Doe</h3>
                              <p>"This review center helped me pass my social work licensure exam on the first try. Highly recommended!"</p>
                                  </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src="https://via.placeholder.com/800x400?text=Second+testimonial"
                              alt="Second testimonial"
                            />
                            <Carousel.Caption>
                              <h3>Jane Doe</h3>
                              <p>"I was skeptical about review centers at first, but CQA Review Center really exceeded my expectations. The materials were top-notch and the instructors were knowledgeable and supportive."</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src="https://via.placeholder.com/800x400?text=Third+testimonial"
                              alt="Third testimonial"
                            />
                            <Carousel.Caption>
                              <h3>Bob Smith</h3>
                              <p>"I'm so glad I found CQA Review Center. Without their help, I don't think I would have passed my exam. Thank you for everything!"</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                        </Carousel>
                        </div>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; CQA Review Center for Social Work. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;