import './App.css';
import './Col.css';
import Hero from './AllBlocks/Hero/hero';
import Mentors from './AllBlocks/Mentors/mentors';
import Header from './AllBlocks/Header/navbar';
import Learn from './AllBlocks/Learn/heading';
import Videos from './AllBlocks/Vedio/video';
import Course from './AllBlocks/Course/courseAll';
import Aside from './AllBlocks/Aside/aside';
import Footer from './AllBlocks/Footer/footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Mentors />
      <Learn />
      <Videos />
      <Course />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
