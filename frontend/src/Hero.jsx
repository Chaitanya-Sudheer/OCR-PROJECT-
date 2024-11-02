import React from 'react';

function Hero() {
  return (
    <section id="home" className="bg-blue-200 text-center py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">HEADING ABCD</h2>
        <p className="text-lg mb-8">
          Upload your documnet for OCR.
        </p>
        <a href="#ocr" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
          Get Started hehe
        </a>
      </div>
    </section>
  );
}

export default Hero;
