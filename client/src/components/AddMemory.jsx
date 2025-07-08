import { useState } from 'react';
import axios from 'axios';

const AddMemory = ({ onAdd }) => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content) return;
    await axios.post(`${import.meta.env.VITE_API_BASE_URL}/memories/add`, { content });
    setContent('');
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Type your memory here..."
        className="w-full p-2 border border-gray-700 rounded mb-2 bg-gray-800 text-gray-100"
      ></textarea>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Memory
      </button>
    </form>
  );
};

export default AddMemory;