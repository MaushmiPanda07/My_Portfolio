// import { useState } from 'react';

// function App() {
//   const [activeTab, setActiveTab] = useState('education');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className=' bg-gray-100'>
//       <div className="flex h-[700px]">
//         {/* Sidebar Navigation */}
//         <div className="w-1/4 bg-gray-900 text-white p-4">
//           <ul className="space-y-4">
//             <li
//               className={`cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-600 ${
//                 activeTab === 'education' ? 'bg-gray-600' : ''
//               }`}
//               onClick={() => handleTabClick('education')}
//             >
//               Education
//             </li>
            
            
//             <li
//               className={`cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-600 ${
//                 activeTab === 'programmingSkills' ? 'bg-gray-600' : ''
//               }`}
//               onClick={() => handleTabClick('programmingSkills')}
//             >
//               Programming Skills
//             </li>
            
//             <li
//               className={`cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-600 ${
//                 activeTab === 'interests' ? 'bg-gray-600' : ''
//               }`}
//               onClick={() => handleTabClick('interests')}
//             >
//               Interests
//             </li>
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div className="w-3/4 p-8 transition-opacity duration-600 ease-in-out opacity-100 bg-gray-300">
//           {activeTab === 'education' && (
//             <div>
//               <h1 className="text-2xl font-bold">Education</h1>
//               <h2 className="font-bold">Graduated in ECE <span className='text-blue-900'>(May 2024)</span></h2>
//               <li>Completed my B.Tech degree in Electronics and Communication Engineering.</li>
//               <li>Learned the fundamentals of circuits, hardware, and software.</li>
//               <br />
//               <h2 className="font-bold">Diploma in Computer Science<span className='text-blue-900'>(2018 - 2021)</span></h2>
//               <li>Completed a 3-year diploma.</li>
//               <li>Explored the basics of computer systems, software engineering, and networking principles.</li>
//               <br />
//               <h2 className="font-bold">10th Board<span className='text-blue-900'>(2018)</span></h2>
//               <li>Passed the 10th grade board exams.</li>
//               <li>Achieved distinction in core subjects like Mathematics and Science.</li>
//             </div>
//           )}
          
//           {activeTab === 'programmingSkills' && (
//             <div>
//               <h1 className="text-2xl font-bold">Programming Skills</h1>
//               <div className="mt-4">
//                 <SkillBar skill="HTML/CSS" percentage={80} />
//                 <SkillBar skill="JavaScript" percentage={70} />
//                 <SkillBar skill="Tailwind CSS" percentage={70} />
//                 <SkillBar skill="Bootstrap" percentage={60} />
//                 <SkillBar skill="React" percentage={60} />
//                 <SkillBar skill="Python" percentage={70} />
//               </div>
//             </div>
//           )}
         
//           {activeTab === 'interests' && (
//             <div>
//               <h1 className="text-2xl font-bold">Interests</h1>
//               <p className="mt-2">listening to music and surfing the internet.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// function SkillBar({ skill, percentage }) {
//   return (
//     <div className="mb-4">
//       <div className="flex justify-between mb-1">
//         <span className="text-base font-medium text-gray-700">{skill}</span>
//         <span className="text-sm text-gray-500">{percentage}%</span>
//       </div>
//       <div className="w-full bg-gray-200 rounded-full h-4">
//         <div
//           className="bg-blue-600 h-4 rounded-full"
//           style={{ width: `${percentage}%` }}
//         ></div>
//       </div>
//     </div>
//   );
// }

// export default App;






import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('education');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-100">
      <div className="flex h-[700px]">
        {/* Sidebar Navigation */}
        <div className="w-1/4 bg-gray-900 text-white p-4">
          <ul className="space-y-4">
            <li
              className={`cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-600 ${
                activeTab === 'education' ? 'bg-gray-600' : ''
              }`}
              onClick={() => handleTabClick('education')}
            >
              Education
            </li>
            <li
              className={`cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-600 ${
                activeTab === 'programmingSkills' ? 'bg-gray-600' : ''
              }`}
              onClick={() => handleTabClick('programmingSkills')}
            >
              Programming Skills
            </li>
            <li
              className={`cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-600 ${
                activeTab === 'interests' ? 'bg-gray-600' : ''
              }`}
              onClick={() => handleTabClick('interests')}
            >
              Interests
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-8 transition-opacity duration-600 ease-in-out opacity-100 bg-gray-300">
          {activeTab === 'education' && (
            <div>
              <h1 className="text-2xl font-bold">Education</h1>
              <h2 className="font-bold">
                Graduated in CSE <span className="text-blue-900">(May 2024)</span>
              </h2>
              <ul className="list-disc ml-5">
                <li>Completed my B.Tech degree in Computer Science and Engineering.</li>
                <li>Developed a strong foundation in algorithms, data structures, and software development.</li>
              </ul>
              <br />
              <h2 className="font-bold">
                +2 Science <span className="text-blue-900">(2018 - 2020)</span>
              </h2>
              <ul className="list-disc ml-5">
                <li>Completed a 2-year higher secondary education in Science stream.</li>
                <li>Specialized in subjects like Physics, Chemistry, and Mathematics.</li>
              </ul>
              <br />
              <h2 className="font-bold">
                10th Board <span className="text-blue-900">(2018)</span>
              </h2>
              <ul className="list-disc ml-5">
                <li>Passed the 10th grade board exams with distinction.</li>
                <li>Excelled in core subjects like Mathematics and Science.</li>
              </ul>
            </div>
          )}

          {activeTab === 'programmingSkills' && (
            <div>
              <h1 className="text-2xl font-bold">Programming Skills</h1>
              <div className="mt-4">
                <SkillBar skill="HTML/CSS" percentage={80} />
                <SkillBar skill="JavaScript" percentage={70} />
                <SkillBar skill="Tailwind CSS" percentage={70} />
                <SkillBar skill="Bootstrap" percentage={60} />
                <SkillBar skill="React" percentage={60} />
                <SkillBar skill="Java" percentage={80} />
              </div>
            </div>
          )}

          {activeTab === 'interests' && (
            <div>
              <h1 className="text-2xl font-bold">Interests</h1>
              <p className="mt-2">
                I love listening to music, painting, traveling, exploring new places, learning about emerging
                technologies, and reading books or online articles.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SkillBar({ skill, percentage }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700">{skill}</span>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-600 h-4 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default App;



























