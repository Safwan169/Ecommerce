import React from 'react'

const GlobalButton = ({ text }) => {
    return (
        <div className="flex space-x-4 justify-center py-4">

            <button
                className={`px-6 py-3 bg-red-600 text-white font-bold uppercase tracking-wide duration-500 hover:bg-[#333333] transition `}
            >
                {text}
            </button>
        </div>
    )
}

export default GlobalButton
