import React from 'react'

function search({handleInput, search}) {
    return (
        <section className="searchbox-wrap">
            <input type="text" 
            placeholder="Search your movie..." 
            className="searchbox" 
            onChange={handleInput}
            onKeyPress={search}/>
        </section>
    )
}

export default search
