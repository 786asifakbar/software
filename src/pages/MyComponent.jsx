import { useEffect, useState } from 'react';

const MyComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const componentPosition = document.getElementById('animate-heading').getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (componentPosition < screenPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1
        id="animate-heading"
        className={`text-6xl text-blue-700 font-bold transition-transform duration-1000 ease-in-out ${
          isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'
        }`}
      >
        Best Software House in the Karachi 
      </h1>
      <p
        className={`mt-6 text-xl text-center transition-opacity duration-1000 ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Some animated content here
      </p>
    </div>
  );
};

export default MyComponent;