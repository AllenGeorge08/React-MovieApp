import React from 'react'


const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
        <div>
            <img src="src/assets/search.svg" alt="search"/>
            <input type="text" placeholder='Search through thousands of movies' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
        </div>
    </div>
  )
}

export default Search