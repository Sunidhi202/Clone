import './App.css';
import Header from './components/Header';
import Heading from './components/Heading';
import Content from './components/Content';
import Course from './components/Course';
import Description from './components/Description';
import Homework from './components/Homework';
import Learning from './components/Learning';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
        <Header/>
        <Heading/>
        <Content/>
        <Course/>
        <Description/>
        <Homework/>
        <Learning/>
        <Footer/>

    </div>
  );
}

export default App;
