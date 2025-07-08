import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-gray-100 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Memory Logger
        </Link>
        
        <nav className="flex space-x-4">
          <Link 
            to="https://github.com/sheix-khizar" 
            target='blank'
            className="px-3 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            Github
          </Link>
          <Link 
            to="https://www.linkedin.com/" 
            target='blank'
            className="px-3 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            Linkedin
          </Link>
          <Link 
            to="#" 
            className="px-3 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            Book me a coffee
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;