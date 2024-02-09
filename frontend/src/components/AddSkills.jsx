import React, { useState } from "react";

const AddSkills = () => {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (skill && !skills.includes(skill)) {
        setSkills([...skills, skill]);
        setSkill("");
      }
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            onClick={() => removeSkill(skill)}
            className="p-2 bg-gray-200 rounded cursor-pointer"
          >
            {skill}
          </div>
        ))}
      </div>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="skill"> Add Skill</label>
          <input
            type="text"
            id="skill"
            placeholder="Enter your skill"
            className="p-2 rounded-lg"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </form>
    </div>
  );
};

export default AddSkills;