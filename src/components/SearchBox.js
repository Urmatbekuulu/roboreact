import React from 'react';

const SearchBox = ({search})=>{

    return(
        <input
            className='pa3 ba b--green bg-lightest-blue'
            type='search'
            placeholder={"Search"} onChange={search}/>
    );
}
export default SearchBox;