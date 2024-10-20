const Card = ({ icon : Icon, title, description }) => {
  return (
    <>
      <div className="flex flex-col items-center p-6 bg-white hover:bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-md border-2 hover:shadow-xl transition-all duration-500 hover:text-white">
        <div className="text-blue-500 mb-4 transition-transform duration-500 transform hover:scale-110">
          <Icon className="text-6xl" /> {/* Assuming Icon is a React component or SVG */}
        </div>
        <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-white">{title}</h3>
        <p className="text-white-600 text-center transition-colors duration-300 hover:text-white">
          {description}
        </p>
      </div>
    </>
  );
};

export default Card;
