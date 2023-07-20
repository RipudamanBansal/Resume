// import Button from "./Button";
import initialRes from "./Data/resume";
import "./Resume.css";
import { useState } from "react";

function Resume() {
  // making an experience db
  const [experience, setExperience] = useState({
    id: "",
    expcom: "",
    exprole: "",
    expsy: "",
    expey: "",
  });

  //to make an initial object to store the data
  const [initial, setInitial] = useState(initialRes);

  //to make a function for a button to add following three div on click
  //1.
  const expInput = (
    <>
      <input
        type="text"
        name="company"
        id="exp"
        placeholder="COMPANY NAME"
        onChange={handleExp}
      />
      <input
        type="text"
        name="role"
        placeholder="YOUR ROLE"
        onChange={handleExp}
      />
      <input
        type="text"
        name="sy"
        placeholder="STARTING YEAR"
        onChange={handleExp}
      />
      <input
        type="text"
        name="ey"
        placeholder="ENDING YEAR"
        onChange={handleExp}
      />
    </>
  );

  //2.
  const skillsInp = (
    <>
      <input type="text" name="skills" id="skills" onChange={handleChange} />
    </>
  );

  //3.
  const eduInp = (
    <>
      <input type="text" name="education" id="edu" onChange={handleChange} />
    </>
  );
  let newInitial = initial;

  // functions to access input data:
  function handleChange(e) {
    newInitial[e.target.name] = e.target.value;
  }

  function handleExp(e) {
    let newExperience = experience;
    newExperience[e.target.name] = e.target.value;
    newExperience.id = initial.experience.length + 1;
    setExperience({
      ...newExperience,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    newInitial.experience.push(experience);
    setInitial({ ...newInitial });
    console.log(initial);

    setOutput(
      <div>
        <h1>Name: {initialRes.name}</h1>
        <h2>Education: {initialRes.education}</h2>
        <h2>
          Experience:{" "}
          {initialRes.experience.map((exp) => {
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
        <h2>Achievements: {initialRes.achievements}</h2>
        <h2>skills: {initialRes.skills}</h2>
      </div>
    );
  }

  // to stop buffering on click for new buttons {experimental}
  function stopBuffer(e) {
    e.preventDefault();
  }

  // to add div for exp, skills etc.
  function addDiv(e, toAdd) {
    e.preventDefault();
    return <>{toAdd}</>;
  }

  // a form to fill your info for resume
  const [output, setOutput] = useState(
    <>
      <form>
        <label htmlFor="name">YOUR NAME:</label>
        <input type="text" name="name" id="name" onChange={handleChange} />
        <br />
        <br />

        <label htmlFor="exp">YOUR PREVIOUS EXPERIENCE:</label>
        {expInput}
        {/* <button
          onClick={(e) => {
            e.preventDefault()
            return { expInput };
          }}
        >
          Add more Experience
        </button> */}
        <br />
        <br />
        <label htmlFor="ach">YOUR ACHIEVENMENTS:</label>
        <input
          type="text"
          name="achievements"
          id="ach"
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="edu">YOUR EDUCATION:</label>
        {eduInp}
        <br />
        <br />

        <label htmlFor="skills">YOUR SKILLS:</label>
        {skillsInp}
        <br />
        <br />

        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </>
  );
  return <>{output}</>;
}

export default Resume;
