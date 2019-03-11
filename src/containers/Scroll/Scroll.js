import React from 'react';
import './Scroll.css'

const Scroll = (props) => {
  return (
    <div className="scroll-container" style={{overflowY: 'scroll', maxHeight: '750px'}}>
      {props.children}
    </div>
  );
}

export default Scroll;
