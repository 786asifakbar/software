const Card = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border-2 border-gray-300 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
      {/* Icon Section */}
      <div className="text-blue-700 mb-4 transition-transform duration-300 transform hover:scale-110">
        <Icon className="text-6xl" /> {/* Assuming Icon is a React component or SVG */}
      </div>
      {/* Title Section */}
      <h3 className="text-2xl font-semibold mb-2 text-gray-800 transition-colors duration-300 group-hover:text-black">
        {title}
      </h3>
      {/* Description Section */}
      <p className="text-gray-600 text-center transition-colors duration-300 group-hover:text-black">
        {description}
      </p>

      {/* 3D Effect on Hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-100 to-teal-100 opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-0"></div>
    </div>
  );
};

export default Card;