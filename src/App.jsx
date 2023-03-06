import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CounterButton from './Components/CounterButton';
import AboutPage from './pages/About.page';
import ArticlesPage from './pages/Articles.page';
import HomePage from './pages/Home.page';
import NotFoundPage from './pages/NotFound.page';

const App = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    setContentLoaded(true);
  }, []);

  return (
    <>
      {contentLoaded && (
        <>
          <h1>Server Side Rendering - course</h1>
          <CounterButton />
          <ul className='ul-navbar'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>about</Link></li>
            <li><Link to='/articles'>articles</Link></li>
          </ul>
          <Routes>
            <Route index path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/articles' element={<ArticlesPage />} />
            <Route path='/*' element={<NotFoundPage />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
