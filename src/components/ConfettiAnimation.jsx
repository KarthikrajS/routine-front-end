import React from 'react'

const ConfettiAnimation = ({height, width}) => {
    return (

        <div >
            <h2 className="text-xl font-semibold text-indigo-600 mb-3">🎇 Reward Animations</h2>
            <div className="flex items-center justify-evenly">
                <img alt="Reward Animation" className="rounded-xl shadow-lg" height={height} src="https://storage.googleapis.com/a1aa/image/1GzAQY7vEspHM1Et3J28fq3AsHLEo0Yo3jqWjLKi0i7ZERfTA.jpg" width={width} />
                <img alt="Reward Animation" className="rounded-xl shadow-lg" height={height} src="https://storage.googleapis.com/a1aa/image/1GzAQY7vEspHM1Et3J28fq3AsHLEo0Yo3jqWjLKi0i7ZERfTA.jpg" width={width} />
                <img alt="Reward Animation" className="rounded-xl shadow-lg" height={height} src="https://storage.googleapis.com/a1aa/image/1GzAQY7vEspHM1Et3J28fq3AsHLEo0Yo3jqWjLKi0i7ZERfTA.jpg" width={width} />
            </div>
        </div>
    )
}

export default ConfettiAnimation