import React from 'react'

const SearchFriend = (props) => {

    const onInputChange = (e) => {
        props.search(e.target.value)
    }

    return(
        <div>
            <label>Encuentra tus amigos: </label>
            <input
            id='input-search-friend'
            type='search'
            onChange={(e) => onInputChange(e)}
            />
        </div>
    )
}

export default SearchFriend