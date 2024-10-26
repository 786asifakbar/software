import { FaChartLine, FaClipboardCheck, FaUserCog, FaBoxes, FaDollarSign, FaClipboardList } from 'react-icons/fa';

const ErpEx = () => {
  return (
    <div className="bg-white min-h-screen p-8 flex flex-col items-center relative">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: 'url(./back.png)' }} // Add your background image here
      />
      <div className="relative z-10 max-w-screen-xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div className="p-6 bg-white shadow-lg rounded-lg backdrop-blur-md transition-transform duration-500 hover:scale-105">
          <h1 className="text-center mb-8 text-5xl font-extrabold text-transparent bg-clip-text 
                       bg-gradient-to-r from-blue-600 to-purple-600 tracking-wide text-shadow-lg">
            <FaChartLine className="mr-2" />
            Enterprise Resource Planning (ERP)
          </h1>
          <p className="text-gray-800 mt-4">
            At Logic Tech, we provide comprehensive ERP solutions to streamline your business operations. Our ERP systems integrate various functions, including finance, HR, supply chain, and more, into a single cohesive platform. This integration helps you manage and analyze business processes efficiently.
          </p>
          <p className="text-gray-800 mt-4">
            We customize ERP solutions to meet your specific business needs, ensuring that your ERP system supports your strategic goals and operational requirements. Our approach includes detailed planning, implementation, and ongoing support to ensure seamless integration and optimal performance.
          </p>
          <p className="text-gray-800 mt-4">
            Our ERP solutions offer real-time data insights, enabling you to make informed decisions and drive business growth. We focus on enhancing productivity, reducing costs, and improving overall business efficiency through our advanced ERP technology.
          </p>
          <p className="text-gray-800 mt-4">
            With our ERP systems, you can expect enhanced data accuracy, better collaboration, and improved scalability, helping your business stay competitive in a rapidly changing market.
          </p>

          {/* Icons representing ERP technologies/services */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-4">
            <div className="flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg">
              <FaDollarSign className="w-16 h-16 text-blue-600" />
              <span className="text-gray-800 mt-2">Finance</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg">
              <FaUserCog className="w-16 h-16 text-blue-600" />
              <span className="text-gray-800 mt-2">HR</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg">
              <FaBoxes className="w-16 h-16 text-blue-600" />
              <span className="text-gray-800 mt-2">Supply Chain</span>
            </div>
          </div>

          {/* Services List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {[
              { icon: <FaClipboardCheck className="text-blue-600 mr-2" />, label: 'Finance Management' },
              { icon: <FaClipboardList className="text-blue-600 mr-2" />, label: 'HR Management' },
              { icon: <FaBoxes className="text-blue-600 mr-2" />, label: 'Supply Chain Management' },
              { icon: <FaClipboardCheck className="text-blue-600 mr-2" />, label: 'Inventory Management' },
              { icon: <FaChartLine className="text-blue-600 mr-2" />, label: 'Reporting & Analytics' },
            ].map((service, index) => (
              <div key={index} className="flex items-center transition-transform transform hover:scale-105 hover:shadow-lg">
                {service.icon}
                <span className="text-gray-800">{service.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="p-6">
          <div className="relative group transform transition-transform duration-1000 hover:scale-105">
            <img
              src="\erp.png"
              alt="ERP"
              className="w-full h-auto rounded-lg shadow-lg transition-transform"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-blue-200/50 to-transparent opacity-30 group-hover:opacity-50 transition-opacity"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErpEx;