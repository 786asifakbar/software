
import { FaChartLine, FaCheckCircle } from 'react-icons/fa';
import { IoAnalyticsOutline } from 'react-icons/io5';

const SeoEx = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('./back.png')] bg-fixed flex justify-center items-center p-8">
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-all duration-500 ease-in-out max-w-5xl w-full grid md:grid-cols-2 gap-8">
        
        {/* Left Side */}
        <div>
          <div className="text-4xl font-semibold text-blue-600 mb-6 flex items-center gap-2">
            <FaChartLine className="text-blue-500" />
            Search Engine Optimization (SEO)
          </div>
          <p className="text-gray-700 my-4 leading-relaxed">
            Our SEO experts at Logic Tech utilize the latest techniques to improve your website's visibility on search engines. We focus on both on-page and off-page SEO strategies to enhance your rankings, drive organic traffic, and increase conversions.
          </p>
          <p className="text-gray-700 my-4 leading-relaxed">
            Starting with comprehensive keyword research, we identify the most relevant keywords for your business. We then optimize content, meta tags, and structure to align with these keywords, making your site search-engine-friendly.
          </p>
          <p className="text-gray-700 my-4 leading-relaxed">
            Our high-quality backlinks and compelling content resonate with your audience, establishing authority while boosting search engine rankings.
          </p>
          <p className="text-gray-700 my-4 leading-relaxed">
            Detailed analytics and reporting provide insights into your SEO performance, helping you make informed marketing decisions.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mt-6 text-gray-600 text-lg">
            {[
              'SEO Optimization',
              'Keyword Research',
              'Backlink Building',
              'Content Optimization',
              'Analytics & Reporting',
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <FaCheckCircle className="text-blue-600" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="relative group">
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg overflow-hidden shadow-lg transform hover:rotate-3 hover:scale-105 transition-all duration-700 ease-in-out">
            <img
              src="./seo.png"
              alt="SEO illustration"
              className="object-center w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>
          <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg text-indigo-500 group-hover:rotate-12 transition-transform duration-500">
            <IoAnalyticsOutline size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoEx;
