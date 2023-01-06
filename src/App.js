import React from "react";
import { Route, Routes, Navigate} from "react-router-dom";
import { HTMLCourses, CSSCourses, JSCourses } from "./data/courses";

//App components
import Header from "./components/Header"
import Home from "./components/Home";
import About from "./components/About"; 
import Courses from "./components/Courses";
import Teachers from "./components/Teachers";
import CourseContainer from './components/courses/CourseContainer';
import NotFound from './components/NotFound';
import Featured from "./components/Featured";

function App() {

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={ <Home />  } />
        <Route path="/about" element={ <About /> } />
        <Route path="/home" element={ <Home />} />
        <Route path="/courses" element={ <Courses /> }>
            <Route index element={<Navigate replace to="html"/>} />
            <Route path="html" element={<CourseContainer data={ HTMLCourses }/>}/>
            <Route path="css" element={<CourseContainer data={ CSSCourses } />}/>
            <Route path="javascript" element={<CourseContainer data={ JSCourses } />}/>
        </Route> 
        <Route path="/teachers" element={ <Teachers /> } />
        <Route path="/teachers/:topic/:name" element={ <Featured /> }/>
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;














