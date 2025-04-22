import React, { useEffect, useState } from 'react';

const Loader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []); 

  if (!loading) return children;

  return (
    <>
        <div className="bg-[#002748] w-full h-screen flex items-center justify-center fixed">
            <img src="assets/logo.svg" alt="Loading..." className="w-[200px] h-[200px] animate-ping"/>
            <div className="bg-[white]/1 w-full h-full absolute backdrop-blur-md flex justify-center items-center">
                <img src="assets/electra-logo.svg" alt="Loading..." className="animate-bounce"/>
            </div>
        </div>
    </>
  );
};

export default Loader;