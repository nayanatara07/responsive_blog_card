import React from 'react';
import './BlogCard.css'; 

const BlogCard = () => {
  return (
    <div className="container">
      <div className="row align-items-stretch retro-layout">
        <div className="col-md-4">
          <div className="h-entry mb-30 v-height gradient">
            <div
              className="featured-img"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e')"
              }}
            ></div>
            <div className="text">
              <span className="date">Apr. 14th, 2022</span>
              <h2>Exploring Python for Data Science: Beginner to Advanced</h2>
            </div>
          </div>

          <div className="h-entry v-height gradient">
            <div
              className="featured-img"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')"
              }}
            ></div>
            <div className="text">
              <span className="date">Apr. 14th, 2022</span>
              <h2>Mastering JavaScript: A Comprehensive Guide</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="h-entry img-5 h-100 gradient">
            <div
              className="featured-img"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1')"
              }}
            ></div>
            <div className="text">
              <span className="date">Apr. 14th, 2022</span>
              <h2>Web Development Best Practices for 2024: A Full Guide</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="h-entry mb-30 v-height gradient">
            <div
              className="featured-img"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1640187128454-1d7c462ede26')"
              }}
            ></div>
            <div className="text">
              <span className="date">Apr. 14th, 2022</span>
              <h2>The Future of AI in Gaming: Trends and Predictions</h2>
            </div>
          </div>

          <div className="h-entry v-height gradient">
            <div
              className="featured-img"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1593305841991-05c297ba4575')"
              }}
            ></div>
            <div className="text">
              <span className="date">Apr. 14th, 2022</span>
              <h2>Building Your First Mobile Game: Tips and Tricks</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
