import React from 'react';
import './Updates.css';

function Updates() {
  return (
    <div className="Updates">
      <div className="container">
        <h1 className="mt-5 mb-4">Updates & Announcements</h1>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <img src="https://picsum.photos/id/237/500/300" alt="Update 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">New Course Available</h5>
                <p className="card-text">We are excited to announce our new course on Programming in Python. With this course, you can enhance your coding skills and take a step towards a successful career in software development.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <img src="https://picsum.photos/id/250/500/300" alt="Update 2" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">New Schedule for Review Classes</h5>
                <p className="card-text">Starting from next week, we are changing the schedule of our review classes for the upcoming board exam. Please check the updated timetable for more details.</p>
                <a href="#" className="btn btn-primary">View Timetable</a>
              </div>
            </div>
          </div>
        </div>
        
        <hr />
        
        <div className="row mt-4">
          <div className="col-md-12">
            <h2>Recent Announcements</h2>
            <ul className="list-group mt-3">
              <li className="list-group-item">We will be closed on Monday, August 30th, for National Heroes Day. Regular classes will resume on Tuesday.</li>
              <li className="list-group-item">The registration deadline for the September board exam is on August 31st. Please make sure to register on or before the deadline.</li>
              <li className="list-group-item">Congratulations to our board exam passers from the August exam. Keep up the good work!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Updates;