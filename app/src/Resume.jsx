import resDataBase from "./Data/resume";
import ExpInp from "./ExpInp";
import Input from "./Input";
import { useState } from "react";

function Resume() {
  const [initial, setInitial] = useState(resDataBase);
  let newInitial = { experience: [] };

  const nameInp = (
    <Input
      type="text"
      name="name"
      id="name"
      ph="Name"
      onchange={handleChange}
      label="YOUR NAME:"
    ></Input>
  );

  const eduInp = (
    <Input
      type="text"
      name="education"
      id="edu"
      label="YOUR EDUCATION:"
      onchange={handleChange}
      ph="Education"
    ></Input>
  );

  const skillsInp = (
    <Input
      type="text"
      name="skills"
      id="skills"
      onchange={handleChange}
      ph="Skills"
      label="YOUR SKILLS:"
    ></Input>
  );

  const achInp = (
    <Input
      type="text"
      name="achievements"
      id="ach"
      onchange={handleChange}
      ph="Achievements"
      label="YOUR ACHIEVEMENTS:"
    ></Input>
  );

  const expInput = (
    <>
      <Input
        type="text"
        name="company"
        id="exp"
        ph="Company name"
        onchange={handleExp}
        label="YOUR PREVIOUS EXPERIENCE"
      ></Input>
      <Input
        type="text"
        name="role"
        id="role"
        ph="Role"
        onchange={handleExp}
      ></Input>
      <Input
        type="text"
        name="sy"
        id="sy"
        ph="Starting Year"
        onchange={handleExp}
      ></Input>
      <Input
        type="text"
        name="ey"
        id="ey"
        ph="Ending year"
        onchange={handleExp}
      ></Input>
    </>
  );

  const form = (
    <>
      <form id="form">
        {nameInp}
        {/* <ExpInp initialList={newInitial}></ExpInp> */}
        {expInput}
        {achInp}
        {eduInp}
        {skillsInp}
      </form>
    </>
  );

  const [experience, setExperience] = useState({
    id: "",
    company: "",
    role: "",
    sy: "",
    ey: "",
  });

  const [output, setOutput] = useState(form);

  function handleChange(e) {
    newInitial[e.target.name] = e.target.value;
    console.log(newInitial);
  }
  // let newExperience = {};

  function handleExp(e) {
    let newExperience = experience;
    newExperience[e.target.name] = e.target.value;
    // newExperience.id = initial.experience.length + 1;
    console.log(newExperience);

    setExperience({
      ...newExperience,
    });
  }

  let formShown = undefined;
  function handleSubmit(e) {
    e.preventDefault();
    let subButton = document.getElementById("form");
    if (formShown === undefined) {
      subButton.style.display = "none";
      formShown = false;
      newInitial.experience.push(experience);
    } else if (formShown === false) {
      formShown = true;
      subButton.style.display = "inline";
    } else if (formShown === true) {
      subButton.style.display = "none";
      formShown = false;
    }
    console.log(newInitial);
    // newInitial.experience.push(experience);
    // console.log(newInitial);
    /*
    setInitial({ ...newInitial });

    const resOutput = (
      <>
        <div>
          <h1>Name: {resDataBase.name}</h1>
          <h2>Education: {resDataBase.education}</h2>
          <h2>
            Experience:{" "}
            {resDataBase.experience.map((exp) => {
              return (
                <div>
                  Previous Company: {exp.company} <br />
                  Role: {exp.role} <br />
                  Starting year: {exp.sy} <br />
                  Ending Year: {exp.ey} <br />
                </div>
              );
            })}
          </h2>
          <h2>Achievements: {resDataBase.achievements}</h2>
          <h2>skills: {resDataBase.skills}</h2>
        </div>
        <button onClick={handleSubmit}>Update Button</button>
      </>
    );
    setOutput(resOutput);
 */
  }

  return (
    <>
      {output}
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Resume;
