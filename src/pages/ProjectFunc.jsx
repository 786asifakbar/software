import { useEffect, useState, useRef } from 'react';
import './SoftwareHousePage.css';

const SoftwareHousePage = () => {
  const words = [
    { text: 'Client Focus', color: 'from-blue-400 to-blue-600' },
    { text: 'Innovation', color: 'from-green-300 to-green-500' },
    { text: 'Quality Assurance', color: 'from-purple-400 to-purple-600' },
    { text: 'Collaboration', color: 'from-yellow-300 to-yellow-500' },
    { text: 'Custom Solutions', color: 'from-red-400 to-red-600' },
    { text: 'Reliability', color: 'from-gray-400 to-gray-500' },
    { text: 'Support', color: 'from-teal-400 to-teal-600' },
    { text: 'Growth', color: 'from-pink-300 to-pink-500' },
    { text: 'Agility', color: 'from-indigo-400 to-indigo-600' },
  ];

  const statistics = [
    { label: 'Projects Completed', value: 95, suffix: '%' },
    { label: 'Client Satisfaction', value: 98, suffix: '%' },
    { label: 'Ongoing Projects', value: 12, suffix: '' },
    { label: 'Years of Experience', value: 10, suffix: '+' },
    { label: 'Team Members', value: 50, suffix: '+' },
  ];

  const [counts, setCounts] = useState(statistics.map(() => 0));
  const statsRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
  }, []);

  useEffect(() => {
    if (isInView) {
      const intervalIds = statistics.map((stat, index) => {
        return setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index] < stat.value) {
              newCounts[index] += 1;
            }
            return newCounts;
          });
        }, 30);
      });

      return () => intervalIds.forEach((id) => clearInterval(id));
    }
  }, [isInView, statistics]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 p-6">
      {/* Word Bubbles Section */}
      <div className="flex flex-wrap gap-6 justify-center max-w-4xl mb-10">
        {words.map((word, index) => (
          <div
            key={index}
            className={`word-bubble bg-gradient-to-br ${word.color} text-white font-semibold py-3 px-5 rounded-xl shadow-lg transform transition-transform hover:scale-105`}
          >
            {word.text}
          </div>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="flex justify-center w-full">
        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center max-w-2xl">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="stat-bubble bg-gradient-to-br from-gray-50 to-gray-200 shadow-xl rounded-xl p-6 border border-gray-300 transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
            >
              <div className="text-4xl font-extrabold text-gray-700">
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-gray-600 mt-2 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftwareHousePage;
