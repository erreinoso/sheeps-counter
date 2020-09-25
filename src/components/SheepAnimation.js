import React from 'react';

class SheepAnimation extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="sheep">
          <div className="legs">
            <div className="leg leg-1"></div>
            <div className="leg leg-2"></div>
            <div className="leg leg-3"></div>
            <div className="leg leg-4"></div>
          </div>
          <div className="wool">
            <div className="wool-toplayer">
              <div className="piece-of-wool piece-of-wool-2"></div>
              <div className="piece-of-wool piece-of-wool-3"></div>
              <div className="piece-of-wool piece-of-wool-4"></div>
              <div className="piece-of-wool piece-of-wool-5"></div>
              <div className="piece-of-wool piece-of-wool-6"></div>
              <div className="piece-of-wool piece-of-wool-7"></div>
              <div className="piece-of-wool piece-of-wool-8"></div>
              <div className="piece-of-wool piece-of-wool-9"></div>
              <div className="piece-of-wool piece-of-wool-10"></div>
            </div>
          </div>
          <div className="head">
            <div className="head-face-front"></div>
            <div className="head-face"></div>
            <div className="ear ear-1"></div>
            <div className="ear ear-2"></div>
            <div className="snout"></div>
            {/* sin css */}
            <div className="eye eye-1">
              <div className="glow"></div>
            </div>
            <div className="eye eye-2">
              <div className="glow"></div>
            </div>
            <div className="wool-head">
              <div className="piece-of-wool piece-of-wool-1"></div>
              <div className="piece-of-wool piece-of-wool-2"></div>
              <div className="piece-of-wool piece-of-wool-3"></div>
              <div className="piece-of-wool piece-of-wool-4"></div>
            </div>
          </div>
        </div>
        <div className="floor"></div>
      </header>
    );
  }
}

export default SheepAnimation;
