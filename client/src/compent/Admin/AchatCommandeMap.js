import React from 'react'

const AchatCommandeMap = ({el}) => {
    return (
        <div>
            <p>wissem</p>
            <div style={{width:"150px"}}>
            <img src={process.env.PUBLIC_URL +`/uploads/${el.Image}` }/>
            <p>{el.email}</p>
            </div>
        </div>
    )
}

export default AchatCommandeMap
