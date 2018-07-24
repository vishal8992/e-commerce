import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Admin Portal",
      content: "Content from state..."
    }
  }

  render() {
    return (
      <div>
        <div className= "parallax"></div>
        <div className="abc1">
          <h3 className="abc2">Parallax Demo</h3>
          <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
        </div>
        <div className="parallax2"></div>
        <div className="abc3">
          <h3 className="abc4">Parallax Demo</h3>
        </div>
        <div className="container">
          <h2>Carousel Example</h2>
        </div>
        <div className="parallax3"></div>
      </div>
    );
  }
}

export default Home;
