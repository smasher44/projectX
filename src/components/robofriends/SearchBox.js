import React from 'react';

const SearchBox = ({onsearchChange}) => {
    return(
        <div className='pa2'>
            <input 
            className= 'tc pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='search robots' 
            onChange={onsearchChange}
            /> 
        </div>     
    ); 
}

export default SearchBox;



