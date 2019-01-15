import React, { Component } from 'react';
import { setInterval } from 'timers';



class Loader extends Component {
  constructor(props) {
    super(props);
    this.color = 'red'
  }
    
  render() {
    return (
      <div className="loader middle" style={{
        position : 'fixed'
      }}>
        <div className="preloader-wrapper big active">
          <div className="spinner-layer" style={{
            borderColor: '#000'
          }}>
            <div className="circle-clipper left">
              <div className="circle" style={{
                borderWidth : '5px'
              }}></div>
            </div><div className="gap-patch">
              <div className="circle" style={{
                borderWidth : '5px'
              }}></div>
            </div><div className="circle-clipper right">
              <div className="circle" style={{
                borderWidth : '5px'
              }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;