import { useState } from 'react';
import axios from 'axios';
import AddMemory from '../components/AddMemory';
import SearchMemory from '../components/SearchMemory';
import { Link } from 'react-router-dom';

const Home = () => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content) return;
    await axios.post(`${import.meta.env.VITE_API_BASE_URL}/memories/add`, { content });
    setContent('');
  };

  return (
    <div className="p-4 max-w-xl mx-auto bg-gray-900 min-h-screen text-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Memory Logger</h1>
        <Link 
          to="/all-memories" 
          className=" text-white px-4 py-2 underline hover:text-blue-300"
        >
          View All Memories
        </Link>
      </div>

      <AddMemory onAdd={handleSubmit} />
      <SearchMemory />
    </div>
  );
};

export default Home;