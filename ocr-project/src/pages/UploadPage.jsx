import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DocumentUpload from '../components/DocumentUpload';

function UploadPage() {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (files) => {
    setUploadedFiles(files);
    // Redirect to document view page and pass the uploaded file
    navigate('/document-view', { state: { files } });
  };

  return (
    <div className="flex-grow p-4 overflow-y-auto">
      <DocumentUpload onFileUpload={handleFileUpload} />
      {uploadedFiles.length > 0 && (
        <div className="mt-4 text-center text-white-500">File uploaded. Redirecting...</div>
      )}
    </div>
  );
}

export default UploadPage;
