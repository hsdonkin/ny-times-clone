import React, { Component } from 'react';
import Header from './../components/Header';
import BriefBar from './../components/BriefBar';
import LeftCol from './../components/LeftCol';
import RightCol from './../components/RightCol';


class Home extends Component {

  render() {
    return (
      <React.Fragment>
        <LeftCol />
        <RightCol />
      </React.Fragment>
    );
  }

}

export default Home;
