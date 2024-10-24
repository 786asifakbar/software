import { useNavigate } from 'react-router-dom';
import { FaCode, FaPenFancy, FaChartLine, FaSearch, FaCloud, FaMobileAlt, FaDatabase, FaLock, FaCreditCard } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    icon: <FaCode className="text-6xl text-blue-500 transition-transform duration-300 group-hover:text-white group-hover:scale-110" />,
    description: 'We build robust and scalable web applications using cutting-edge technologies to enhance your online presence.',
    link: '/WebDevelopment'
  },
  {
    title: 'Graphic Designing',
    icon: <FaPenFancy className="text-6xl text-blue-500 transition-transform duration-300 group-hover:text-white group-hover:scale-110" />,
    description: 'Our creative team designs visually stunning graphics that effectively communicate your brand identity.',
    link: '/GraphicsDesign'
  },
  {
    title: 'Digital Marketing',
    icon: <FaChartLine className="text-6xl text-blue-500 transition-transform duration-300 group-hover:text-white group-hover:scale-110" />,
    description: 'Boost your business with our expert digital marketing strategies, including SEO, PPC, and social media.',
    link: '/DigitalMarketing'
  },
  {
    title: 'SEO',
    icon: <FaSearch className="text-6xl text-blue-500 transition-transform duration-300 group-hover:text-white group-hover:scale-110" />,
    description: 'Increase your website’s search engine rankings and online visibility with our data-driven SEO techniques.',
    link: '/SeoEx'
  },
  {
    title: 'ERP Solutions',
    icon: <FaDatabase className="text-6xl text-blue-500 transition-transform duration-300 group-hover:text-white group-hover:scale-110" />,
    description: 'Streamline your business processes with our tailored ERP solutions to enhance productivity and efficiency.',
    link: '/ErpEx'
  },
  {
    title: 'Cloud Solutions',
    icon: <FaCloud className="text-6xl text-blue-500 transition-transform duration-300 group-hover:text-white group-hover:scale-110" />,
    description: 'Leverage scalable cloud infrastructure to securely manage your business operations with ease.',
    link: '/CloudSolutions'
  },
  {
    title: 'AWS Services',
    icon: <FaCloud className="text-6xl text-blue-500 transition-transform duration-300 group-hover:text-white group-hover:scale-110" />,
    description: 'Optimize your cloud infrastructure with our reliable and scalable AWS services tailored to your needs.',
    link: '/AwsEx'
  },
  {
    title: 'Web & Mobile Development',
    icon: <FaMobileAlt className="text-6xl text-blue-500 transition-transform duration-300 group-hover:text-white group-hover:scale-110" />,
    description: 'We create responsive web and mobile applications that deliver seamless user experiences across all devices.',
    link: '/WebAppDevelopment'
  },
  {
    title: 'Blockchain Development',
    icon: <FaLock className="text-6xl text-blue-500 transition-transform duration-300 group-hover:text-white group-hover:scale-110" />,
    description: 'Secure your digital assets and business operations with our cutting-edge blockchain solutions.',
    link: '/Blockchain'
  },
  {
    title: 'POS Solutions',
    icon: <FaCreditCard className="text-6xl text-blue-500 transition-transform duration-300 group-hover:text-white group-hover:scale-110" />,
    description: 'Optimize your retail operations with our reliable and user-friendly point-of-sale systems.',
    link: '/PosEx'
  },
];

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="py-20" 
      style={{
        backgroundImage: 'url("./banner.png")', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-6 bg-white bg-opacity-80 rounded-lg">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
          Our Services
        </h1>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Explore our diverse range of services designed to elevate your business to the next level with cutting-edge solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group service-card relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 p-6 shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-tr hover:from-blue-300 hover:to-blue-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 group-hover:opacity-90 transition duration-500"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="icon-container mb-6">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-white">
                  {service.title}
                </h2>
                <p className="mb-6 text-gray-600 group-hover:text-gray-100">
                  {service.description}
                </p>
                <button
                  className="mt-4 px-6 py-2 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-gray-200 hover:text-blue-800 transition"
                  onClick={() => navigate(service.link)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;