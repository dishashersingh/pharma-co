import React, { useState } from "react";

const PrescriptionUpload = () => {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-xl font-bold">Upload Prescription</h2>
        <input type="file" onChange={handleUpload} className="mt-4"/>
        {file && <p className="mt-2 text-sm text-gray-500">{file.name}</p>}
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">Submit</button>
      </div>
    </div>
  );
};

export default PrescriptionUpload;
