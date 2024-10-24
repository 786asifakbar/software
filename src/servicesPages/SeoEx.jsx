

const SeoEx = () => {
  return (
    <div className="bg-blue-50 min-h-screen p-8 perspective-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div className="animate-fadeInLeft opacity-0 transform transition-transform duration-500 hover:rotate-3d">
          <h4 className="text-3xl font-bold text-blue-600 flex items-center mb-4">
            <span className="mr-2">📈</span>
            Search Engine Optimization (SEO)
          </h4>
          <p className="text-gray-700 my-4">
            Our SEO experts at Logic Tech utilize the latest techniques to improve your website's visibility on search engines like Google. We focus on both on-page and off-page SEO strategies to enhance your rankings, drive organic traffic, and increase conversions.
          </p>
          <p className="text-gray-700 my-4">
            We start by conducting comprehensive keyword research to identify the most relevant and high-performing keywords for your business. Our team then optimizes your website's content, meta tags, and structure to align with these keywords, ensuring your site is search-engine-friendly.
          </p>
          <p className="text-gray-700 my-4">
            In addition to on-page optimization, we build high-quality backlinks and create compelling content that resonates with your target audience. Our goal is to establish your brand as an authority in your industry while boosting your search engine rankings.
          </p>
          <p className="text-gray-700 my-4">
            We also provide detailed analytics and reporting, giving you insight into your SEO performance and helping you make informed decisions for future marketing efforts.
          </p>

          {/* Icons representing SEO technologies/services */}
          <div className="flex space-x-4 my-4">
            <div className="hover:scale-110 transition-transform duration-300 hover:rotate-3d">
              <img
                src="https://th.bing.com/th?id=OIP.Zx_gLV0_bAixP2Tj4rUdFAHaHa&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2"
                alt="SEO Optimization"
                className="w-12"
              />
            </div>
            <div className="hover:scale-110 transition-transform duration-300 hover:rotate-3d">
              <img
                src="https://th.bing.com/th?id=OIP.KE7ptiArqRb_mAMSx1H4dgHaHa&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2"
                alt="Keyword Research"
                className="w-12"
              />
            </div>
            <div className="hover:scale-110 transition-transform duration-300 hover:rotate-3d">
              <img
                src="https://th.bing.com/th?id=OIP.ncOUIaKm4lRql9ZryXZPvgHaHa&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2"
                alt="Backlink Building"
                className="w-12"
              />
            </div>
          </div>

          {/* Text items */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <p className="flex items-center hover:scale-105 transition-transform duration-300 hover:rotate-3d">
              <span className="text-blue-600 mr-2">✔️</span> SEO Optimization
            </p>
            <p className="flex items-center hover:scale-105 transition-transform duration-300 hover:rotate-3d">
              <span className="text-blue-600 mr-2">✔️</span> Keyword Research
            </p>
            <p className="flex items-center hover:scale-105 transition-transform duration-300 hover:rotate-3d">
              <span className="text-blue-600 mr-2">✔️</span> Backlink Building
            </p>
            <p className="flex items-center hover:scale-105 transition-transform duration-300 hover:rotate-3d">
              <span className="text-blue-600 mr-2">✔️</span> Content Optimization
            </p>
            <p className="flex items-center hover:scale-105 transition-transform duration-300 hover:rotate-3d">
              <span className="text-blue-600 mr-2">✔️</span> Analytics & Reporting
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="animate-fadeInRight opacity-0 transform transition-transform duration-500 hover:rotate-3d">
          <div className="transform hover:scale-110 transition-transform duration-500">
            <img
              src="./seo.png"
              alt="SEO"
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoEx;