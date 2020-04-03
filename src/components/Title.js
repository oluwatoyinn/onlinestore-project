import React from 'react'

function Title({name,title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto text-title my-2 text-center">
                <h1 className="text-uppercase font-weight-bold">
                    {name} <strong className="text-blue"> {title} </strong>
                </h1>
            </div>
        </div>
    )
}

export default Title
