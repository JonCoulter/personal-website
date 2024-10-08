import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Grid } from '@mui/material';

import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

import Resume from './pages/Resume/Resume';
import Teaching from './pages/Teaching/Teaching';

import './App.css'
import './index.css'

export default function App() {
  return (
    <Container className='top-50'>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className='main-content container-shadow'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/teaching" element={<Teaching />} />
              </Routes>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}
