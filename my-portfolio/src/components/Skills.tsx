import React from 'react';
import { skills } from '../data/portfolio';
import { type Skill } from '../types';

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700">{skill.name}</span>
        <span className="text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const frontendSkills = skills.filter((s) => s.category === 'xxx1');
  const backendSkills = skills.filter((s) => s.category === 'xxx2');
  const toolsSkills = skills.filter((s) => s.category === 'xxx3');

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-6xl font-bold text-center mb-12 text-white">Soundcloud</h2>
        {/* <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-6 text-center">xxx1</h3>
            {frontendSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-6 text-center">xxx2</h3>
            {backendSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-6 text-center">xxx3</h3>
            {toolsSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Artist Profile */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="450"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/victor-ferrold/sets/oezden-ferrold-unhinged&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>


        </div>

        {/* Single Track */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="450"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/akamiofficial/j-balvin-willy-william-mi-gente-akami-afro-tool-filtered-for-copyright&color=%23ff5500&auto_play=false"
          ></iframe>
        </div>
      </div>

        
      </div>
    </section>
  );
};

export default Skills;