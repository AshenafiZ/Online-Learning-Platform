// src/Upload.js
import React, { useState } from 'react';

const Upload = ({ addCourse }) => {
  const [courseTitle, setCourseTitle] = useState('');
  const [courseId, setCourseId] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      courseTitle,
      courseId,
      paymentAmount,
      photo,
      approved: false
    };
    addCourse(newCourse);
    setCourseTitle('');
    setCourseId('');
    setPaymentAmount('');
    setPhoto(null);
  };

  return (
    <div className="mt-16 min-h-3/4 p-4">
      <h1 className="text-2xl mb-4">Upload Course</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm">Course Title:</label>
          <input
            type="text"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm">Course ID:</label>
          <input
            type="text"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm">Payment Amount:</label>
          <input
            type="number"
            value={paymentAmount}
            onChange={(e) => setPaymentAmount(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm">Photo:</label>
          <input
            type="file"
            onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Create Course
        </button>
      </form>
    </div>
  );
};

export default Upload;
