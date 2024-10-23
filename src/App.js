import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Stack from './components/Stack';
import ProjectLayout from './components/Projects/ProjectLayout';
import ProjectTwo from './components/Projects/ProjectTwo';
import ProjectOne from './components/Projects/ProjectOne'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/stack' element={<Stack/>}/>
        <Route path='/projects'element={<ProjectLayout/>}>
          <Route path='/projects/project-one' element={<ProjectOne/>}/>
          <Route path='/projects/project-two' element={<ProjectTwo/>}/>
        </Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
