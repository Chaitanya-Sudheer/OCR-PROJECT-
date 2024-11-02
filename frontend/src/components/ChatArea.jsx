import { useState } from 'react';
import DocumentUpload from './DocumentUpload';

function ChatArea() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (files) => {
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  return (
    <div className="flex flex-col flex-grow p-4 overflow-y-auto">
      <DocumentUpload onFileUpload={handleFileUpload} />
      <div className="mt-6 space-y-4">
        {uploadedFiles.length > 0 ? (
          uploadedFiles.map((file, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-md">
              <p className="text-gray-800 font-medium">{file.name}</p>
              <p className="text-sm text-gray-500">Size: {file.size} bytes</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No files uploaded yet.</p>
        )}
      </div>
    </div>
  );
}

export default ChatArea;
