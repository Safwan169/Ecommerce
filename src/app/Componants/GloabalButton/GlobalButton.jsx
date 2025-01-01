import React from 'react'

const GlobalButton = ({ text }) => {
    return (
        <div className="flex  space-x-4 justify-center py-4">

            <button
                className={`lg:px-6 lg:py-3 px-5 py-3 text-[14px] bg-red-700 text-white font-normal lg:font-bold uppercase tracking-wide duration-500 hover:bg-[#333333] transition `}
            >
                {text}
            </button>
        </div>
    )
}

export default GlobalButton
