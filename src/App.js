import React from 'react';
import Header from "./components/Header";
import Summary from "./components/Summary";
import Education from "./components/Education";
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExtraCurricular from './components/ExtraCurricular';
import References from './components/References';

function App() {
  // Sample data for props
  const resumeData = {
    name: "Hanvitha",
    email: "phanvitha7772@gmail.com",
    contact: "9052727778",
    summaryText: "Intermediate skilled Python and Java Programmer, Passionate to have in-depth knowledge of latest technologies",
    educationInfo: "Pursuing Bachelor's in Computer Science Engineering from Malla Reddy University",
    skills: ["html","css","javascript"],
    projects: ["Ecommerce WebApplication using HTML,CSS,JavaScript Portfolio Website using HTML,CSS"],
    activities: ["Participated in Smart India Hackathon"],
    references: [
      { name: "hanvithalinkedin", url: "https://www.linkedin.com/in/hanvitha-putnala-b7862b2b4/" },
    ]
  };

  return (
    <div className="App">
      <Header name={resumeData.name} email={resumeData.email} contact={resumeData.contact} /><hr/>
      <Summary summaryText={resumeData.summaryText} /><hr/>
      <Education educationInfo={resumeData.educationInfo} /><hr/>
      <Skills skills={resumeData.skills} /><hr/>
      <Projects projects={resumeData.projects} /><hr/>
      <ExtraCurricular activities={resumeData.activities} /><hr/>
      <References references={resumeData.references} />
    </div>
  );
}

export default App;
