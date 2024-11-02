import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import UploadPage from './pages/UploadPage';
import DocumentViewPage from './pages/DocumentViewPage';

function App() {
  return (
    <Router>
      <div className="flex h-screen w-screen bg-gray-800">
        <Sidebar />
        <div className="flex-grow flex flex-col overflow-hidden">
          <Routes>
            <Route path="/" element={<UploadPage />} />
            <Route path="/document-view" element={<DocumentViewPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
