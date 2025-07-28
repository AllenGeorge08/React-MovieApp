import './App.css';
import React, { useState } from 'react';
import './index.css';
import Search from './components/Search.jsx';

const App = () =>{

  const [searchTerm, setSearchTerm] = useState('');

return (

  <main>
      <div className='pattern'>
      <div className="wrapper">
      <header>
   
        <img src="src/assets/hero-img.png" alt="Hero Banner" />
        <h1>Find <span className='text-gradient'>Movies</span> You'll enjoy Without the Hassle</h1>
      </header>


      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    </div>
  </div>
</main>

)
}



export default App




