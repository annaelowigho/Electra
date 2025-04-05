import React from 'react'

const Map = ({ 
    query = '1 dbs rd',
    width = 'w-[100%]',
    height = 'h-[100%]'
  }) => {
  return (
    <div className={`max-w-full overflow-hidden text-red-500 ${width} ${height}`}>
      <div 
        id="my-map-canvas" 
        className="h-full w-full max-w-full"
      >
        <iframe
          className="h-full w-full border-0"
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(query)}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
          allowFullScreen
        />
      </div>
      <a
        className="googlecoder"
        rel="nofollow"
        href="https://www.bootstrapskins.com/themes"
        id="inject-map-data"
      >
      </a>
    </div>
  )
}

export default Map