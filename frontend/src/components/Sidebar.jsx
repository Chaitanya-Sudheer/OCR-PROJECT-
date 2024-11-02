//import React from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  const handleNewUploadClick = () => {
    navigate('/'); // Redirect to the upload page
  };

  return (
    <aside className="w-1/4 md:w-1/5 bg-gray-900 text-white flex flex-col p-4">
      <h2 className="text-xl font-bold mb-4">OCR</h2>
      <nav className="flex flex-col space-y-2">
        <button
          onClick={handleNewUploadClick}
          className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600"
        >
          New Upload
        </button>
        <button className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600">History</button>
        <button className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600">Settings</button>
      </nav>
    </aside>
  );
}

export default Sidebar;
