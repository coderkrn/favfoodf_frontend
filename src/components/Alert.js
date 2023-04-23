import React from 'react'
import ReactDom from 'react-dom'

export default function Alert() {

    return ReactDom.createPortal(
        <>
            <div class="alert alert-warning alert-dismissible fade show" role="alert" style={{zIndex: "999"}}>
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </>,
        document.getElementById('alert-root')
    )
}