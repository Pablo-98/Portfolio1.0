import './index.css';
import React from 'react';
import logo from './images/cat.jpg';
  
function App() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img className="logo" src= {logo}/>
                    </div>
                    <li><a href="#courses">Certifications</a></li>
                    <li><a href="#tutorials">Projects</a></li>
                    <li><a href="#jobs">About me </a></li>
                    <li><a href='#student'>hi</a></li>
                </ul>
  
                
            </nav>
  
           
           
        </div>
    )
}
export default App;
