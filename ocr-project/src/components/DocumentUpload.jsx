//import React from 'react';

function DocumentUpload({ onFileUpload }) {
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    onFileUpload(files);
  };

  return (
    <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 p-8 rounded-md bg-gray-900">
      <p className="text-white-700 font-semibold mb-2">Upload Document</p>
      <p className="text-white-500 mb-4 text-sm">Supports all file types (PDF, DOCX, Images, etc.)</p>
      <input
        type="file"
        onChange={handleFileChange}
        className="block w-full text-sm text-white-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-600 file:text-white hover:file:bg-gray-500"
        multiple
      />
    </div>
  );
}

export default DocumentUpload;
