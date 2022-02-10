import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import { Route, Routes } from "react-router-dom"
import GenresInDb from "./GenresInDb"
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import TopBar from './TopBar';
import NotFound from './NotFound';
function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        <div className='conteiner'>

          <TopBar />
          <Routes>
            <Route path='/genres' element={<GenresInDb />} />
            <Route path='/lastmovie' element={<LastMovieInDb />} />
            <Route path='/content' element={<ContentRowMovies />} />
            <Route path='/' element={<ContentWrapper />} />            
            <Route path='*' element={<NotFound />} />
          </Routes>

          {/* <ContentWrapper /> */}
        </div>

      </div>
    </React.Fragment>
  );
}

export default App;
