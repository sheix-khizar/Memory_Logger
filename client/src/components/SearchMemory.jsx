import { useState } from 'react';
import axios from 'axios';

const SearchMemory = () => {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!keyword) return;
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/memories/search?keyword=${keyword}`);
    setResults(res.data);
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSearch} className="mb-2">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search memory by keywords.... e.g friend, fruit, favourite"
          className="w-full p-2 border border-gray-700 rounded mb-2 bg-gray-800 text-gray-100"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Search
        </button>
      </form>
      {results.length > 0 && (
        <div className="mt-2">
          <h3 className="font-bold mb-2">Search Results:</h3>
          <ul className="space-y-1">
            {results.map((memory) => (
              <li key={memory._id} className="p-2 rounded hover:bg-gray-800">
                {memory.content}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchMemory;