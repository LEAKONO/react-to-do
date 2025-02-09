import React from 'react'

function Search({search,setSearch}) {

  return (
    <input 
    type='text'
    placeholder='Search Item' 
    onChange={(e)=>setSearch(e.target.value)}
    value={search}/>
  )
}

export default Search
