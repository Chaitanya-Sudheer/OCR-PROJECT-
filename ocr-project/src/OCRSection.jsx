import  { useState } from 'react';

function OCRSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [extractedText, setExtractedText] = useState('');

  const handleImageUpload = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
    //OCR STUFF HERE
    setExtractedText('Extracted text .........')
  };

  return (
    <section id="ocr" className="container mx-auto py-20 text-center">
      <h3 className="text-3xl font-bold mb-6">Upload an Image for OCR</h3>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4"
      />
      {selectedImage && (
        <div className="mt-6">
          <img src={selectedImage} alt="Selected" className="w-1/2 mx-auto mb-4 rounded-lg" />
          <p className="bg-gray-100 p-4 rounded-lg shadow-md">
            {extractedText || "No text extracted yet."}
          </p>
        </div>
      )}
    </section>
  );
}

export default OCRSection;
