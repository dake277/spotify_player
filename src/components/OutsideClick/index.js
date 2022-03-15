import React from 'react'

const OutsideClick = (ref, callback) => {
    function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
            callback()
        }
    }

    React.useEffect(() => {
        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    })
}

export default OutsideClick