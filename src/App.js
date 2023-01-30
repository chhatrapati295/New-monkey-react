import './App.css';
import React, { Component, useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
	BrowserRouter ,
	Routes,
	Route,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  // state = {
  //   progress : 10
  // }
  const[myprogress,setMyProgress] = useState(10)
  
    return (
      <div>
       <BrowserRouter>
       <LoadingBar
        color='#f11946'
        progress={myprogress}
        height={3}
      />
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<News setProgress={setMyProgress} key='General' category={'General'}/>}/>
        <Route exact path='/Business' element={<News setProgress={setMyProgress} key='Business' category={'Business'}/>}/>
        <Route exact path='/Sports' element={<News setProgress={setMyProgress} key='Sports' category={'Sports'}/>}/>
        <Route exact path='/Health' element={<News setProgress={setMyProgress} key='Health' category={'Health'}/>}/>
        <Route exact path='/Entertainment' element={<News setProgress={setMyProgress} key='Entertainment' category={'Entertainment'}/>}/>
        <Route exact path='/Science' element={<News setProgress={setMyProgress} key='Science' category={'Science'}/>}/>
        <Route exact path='/Technology' element={<News setProgress={setMyProgress} key='Technology' category={'Technology'}/>}/>
      </Routes>
       </BrowserRouter>
      </div>
    )
}
export default App
