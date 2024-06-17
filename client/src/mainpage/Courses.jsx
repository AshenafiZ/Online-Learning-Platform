// src/Courses.js
import React from 'react';

const Courses = ({ courses }) => {
  const approvedCourses = courses.filter(course => course.approved);

  return (
    <div className="mt-16 min-h-3/4 p-4">
      <h1 className="text-2xl mb-4">Courses</h1>
      {approvedCourses.length === 0 ? (
        <p>No approved courses available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {approvedCourses.map((course, index) => (
            <div key={index} className="p-4 border rounded-md">
              <img src={course.photo} alt={course.courseTitle} className="w-full h-40 object-cover mb-2" />
              <h2 className="text-xl font-bold">{course.courseTitle}</h2>
              <p>Course ID: {course.courseId}</p>
              <p>Payment Amount: ${course.paymentAmount}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
