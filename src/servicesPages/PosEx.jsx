
import { FaCheckCircle, FaRegChartBar, FaClipboardList, FaShoppingCart } from 'react-icons/fa';

const PosEx = () => {
  return (
    <div className="bg-white min-h-screen p-8 relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url(./back.png)' }} // Add your background image here
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Side */}
        <div className="transition-transform duration-700 ease-in-out transform hover:translate-x-4 hover:shadow-xl opacity-100 p-6 bg-white rounded-lg shadow-md backdrop-blur-md">
          <h2 className="text-center mb-8 text-5xl font-extrabold text-transparent bg-clip-text 
                       bg-gradient-to-r from-blue-600 to-purple-600 tracking-wide text-shadow-lg">
            <FaShoppingCart className="mr-2 text-5xl" />
            Point of Sale (POS) Solutions
          </h2>
          <p className="text-gray-700 my-4">
            At Logic Tech, we provide state-of-the-art POS solutions designed to streamline your retail operations. Our POS systems offer seamless integration with your inventory, sales, and customer management processes, enhancing your business efficiency.
          </p>

          <p className="text-gray-700 my-4">
            We offer customizable POS systems that cater to various industries including retail, hospitality, and services. Our solutions are equipped with features such as sales reporting, inventory tracking, and customer relationship management to help you optimize your operations.
          </p>

          <p className="text-gray-700 my-4">
            Our POS solutions are designed to be user-friendly and easily adaptable to your business needs. Whether you're looking for a simple register or a full-fledged system with advanced analytics, we provide solutions that can scale with your business growth.
          </p>

          <p className="text-gray-700 my-4">
            With our POS systems, you can expect improved transaction accuracy, faster checkouts, and better customer insights. We also offer ongoing support to ensure your system operates smoothly and efficiently.
          </p>

          {/* Icons */}
          <div className="grid grid-cols-3 gap-4 my-4">
            <div className="transform transition hover:scale-110 duration-500">
              <img
                src="https://th.bing.com/th/id/OIP.4wlQS5UmStS_6-FxmmPLugHaEq?w=304&h=192&c=7&r=0&o=5&pid=1.7"
                alt="POS Register"
                className="w-12"
              />
            </div>
            <div className="transform transition hover:scale-110 duration-500">
              <img
                src="https://th.bing.com/th/id/OIP.9O4Z-ySNHWDszMOxmffJlQHaHB?w=173&h=180&c=7&r=0&o=5&pid=1.7"
                alt="Inventory Management"
                className="w-12"
              />
            </div>
            <div className="transform transition hover:scale-110 duration-500">
              <img
                src="https://th.bing.com/th/id/OIP.hU3dE088rrmDLvKaEmNwiwHaGL?w=213&h=180&c=7&r=0&o=5&pid=1.7"
                alt="Sales Analytics"
                className="w-12"
              />
            </div>
          </div>

          {/* Text with check icons */}
          <div className="grid grid-cols-2 gap-4 mt-6 text-gray-700">
            <div className="flex items-center transform transition hover:scale-105 duration-500">
              <FaCheckCircle className="text-blue-600 mr-2" />
              POS Register
            </div>
            <div className="flex items-center transform transition hover:scale-105 duration-500">
              <FaCheckCircle className="text-blue-600 mr-2" />
              Inventory Management
            </div>
            <div className="flex items-center transform transition hover:scale-105 duration-500">
              <FaCheckCircle className="text-blue-600 mr-2" />
              Sales Reporting
            </div>
            <div className="flex items-center transform transition hover:scale-105 duration-500">
              <FaCheckCircle className="text-blue-600 mr-2" />
              Customer Management
            </div>
            <div className="flex items-center transform transition hover:scale-105 duration-500">
              <FaCheckCircle className="text-blue-600 mr-2" />
              Receipt Printing
            </div>
            <div className="flex items-center transform transition hover:scale-105 duration-500">
              <FaCheckCircle className="text-blue-600 mr-2" />
              Sales Analytics
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="transition-transform duration-700 ease-in-out transform hover:scale-105 hover:shadow-xl">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <img
              src="./pos.png"
              alt="POS"
              className="object-cover w-full rounded-lg shadow-lg transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosEx;