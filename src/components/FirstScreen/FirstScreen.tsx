import React from 'react';
import './FirstScreen.scss'

const FirstScreen: React.FC = () => {
  return (
    <div className="first-screen">
      <div className="container">
        <h1 className="first-screen_title">
          A selection of projects that <b>pioneer tech</b> and <b>marketing</b>
          to help brands stay ahead.
        </h1>
      </div>
    </div>
  );
}

export default FirstScreen;
