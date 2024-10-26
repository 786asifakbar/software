import { FaCheckCircle } from 'react-icons/fa';
import { SiSolidity, SiRust, SiEthereum, SiPolkadot } from 'react-icons/si';

const BlockChain = () => {
  return (
    <div 
      className="min-h-screen p-8 flex items-center justify-center"
      style={{
        backgroundImage: 'url("./background.jpg")', // Replace with your background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-6 bg-white bg-opacity-90 rounded-xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - 3D Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group transform transition duration-1000 hover:rotate-y-12 hover:rotate-x-6 hover:scale-105">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-white rounded-3xl shadow-2xl transform group-hover:rotate-x-0 group-hover:rotate-y-0 transition-all duration-1000 ease-in-out">
                <img
                  src="./block.png"
                  alt="Blockchain Illustration"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="text-left space-y-6">
            <h1 className="text-center mb-8 text-5xl font-extrabold text-transparent bg-clip-text 
                       bg-gradient-to-r from-blue-600 to-purple-600 tracking-wide text-shadow-lg">
              Blockchain Development
            </h1>
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              Embark on a revolutionary journey with our blockchain development services, where we specialize in crafting decentralized solutions using cutting-edge technologies. Our expertise extends to Solidity for Ethereum and Rust for Substrate, ensuring robust and secure smart contract development.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {/* 3D Animated Feature Blocks with Icons */}
              <div className="flex flex-col items-center text-center transform transition hover:scale-110 hover:rotate-y-6 hover:rotate-x-6 duration-700">
                <div className="w-16 h-16 mb-2 text-blue-600">
                  <SiSolidity className="w-full h-full" />
                </div>
                <span className="text-blue-600 font-semibold">Solidity</span>
              </div>

              <div className="flex flex-col items-center text-center transform transition hover:scale-110 hover:rotate-y-6 hover:rotate-x-6 duration-700">
                <div className="w-16 h-16 mb-2 text-blue-600">
                  <SiRust className="w-full h-full" />
                </div>
                <span className="text-blue-600 font-semibold">Rust</span>
              </div>

              <div className="flex flex-col items-center text-center transform transition hover:scale-110 hover:rotate-y-6 hover:rotate-x-6 duration-700">
                <div className="w-16 h-16 mb-2 text-blue-600">
                  <SiEthereum className="w-full h-full" />
                </div>
                <span className="text-blue-600 font-semibold">Ethereum</span>
              </div>

              <div className="flex flex-col items-center text-center transform transition hover:scale-110 hover:rotate-y-6 hover:rotate-x-6 duration-700">
                <div className="w-16 h-16 mb-2 text-blue-600">
                  <SiPolkadot className="w-full h-full" />
                </div>
                <span className="text-blue-600 font-semibold">Polkadot</span>
              </div>
            </div>

            {/* Service Features */}
            <div className="mt-8 grid grid-cols-2 gap-4 text-lg text-gray-700">
              <p className="flex items-center transform hover:scale-105 transition duration-500">
                <FaCheckCircle className="w-6 h-6 text-blue-600 mr-2" />
                Decentralized Solutions
              </p>
              <p className="flex items-center transform hover:scale-105 transition duration-500">
                <FaCheckCircle className="w-6 h-6 text-blue-600 mr-2" />
                Secure Smart Contracts
              </p>
              <p className="flex items-center transform hover:scale-105 transition duration-500">
                <FaCheckCircle className="w-6 h-6 text-blue-600 mr-2" />
                Ethereum & Polkadot
              </p>
              <p className="flex items-center transform hover:scale-105 transition duration-500">
                <FaCheckCircle className="w-6 h-6 text-blue-600 mr-2" />
                Substrate Framework
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockChain;
