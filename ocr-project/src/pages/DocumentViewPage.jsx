import { useLocation } from 'react-router-dom';

function DocumentViewPage() {
  const location = useLocation();
  const files = location.state?.files || [];

  return (
    <div className="flex-grow flex flex-row p-4 space-x-4 h-full">
      {/* Left Column: Document Viewer */}
      <div className="w-1/2 bg-gray-900 p-4 rounded shadow-md overflow-y-auto h-[calc(100vh-64px)]">
        <h3 className="text-xl font-semibold mb-4 text-white">Uploaded Document</h3>
        {files.length > 0 ? (
          files.map((file, index) => (
            <div key={index} className="mb-4">
              <p className="font-medium text-gray-400 mb-2">{file.name}</p>
              <iframe
                src={URL.createObjectURL(file)}
                title={`Document Preview ${index}`}
                className="w-full h-[75vh] rounded"
                frameBorder="0"
                scrolling="auto"
              ></iframe>
            </div>
          ))
        ) : (
          <p className="text-gray-100">No document available.</p>
        )}
      </div>

      {/* Right Column: Extracted Text */}
      <div className="w-1/2 bg-gray-900 p-4 rounded shadow-md overflow-y-auto h-[calc(100vh-64px)]">
        <h3 className="text-xl font-semibold mb-4 text-white">Scanned Text</h3>
        <p className="text-gray-200">
          {/* Placeholder for extracted text */}
          The extracted text from the uploaded document should be displayed here.
        </p>
      </div>
    </div>
  );
}

export default DocumentViewPage;
