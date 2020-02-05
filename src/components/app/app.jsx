import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  const {movieName, movieGenre, movieReleaseDate} = props; // eslint-disable-line react/prop-types
  return (
    <Main movieName={movieName} movieGenre={movieGenre} movieReleaseDate={movieReleaseDate}/>
  );
};

export default App;
