import Input from "./Input";

export default function ExpInp({ initialList }) {
  let index = 0;
  const expInput = (
    <>
      <Input
        type="text"
        name="company"
        id="exp"
        ph={`${index + 1}. Company name`}
        onchange={handleExp}
        label="YOUR PREVIOUS EXPERIENCE"
      ></Input>
      <Input
        type="text"
        name="role"
        id="role"
        ph={`${index + 1}. Role`}
        onchange={handleExp}
      ></Input>
      <Input
        type="text"
        name="sy"
        id="sy"
        ph={`${index + 1}. Starting Year`}
        onchange={handleExp}
      ></Input>
      <Input
        type="text"
        name="ey"
        id="ey"
        ph={`${index + 1}. Ending Year`}
        onchange={handleExp}
      ></Input>
    </>
  );
  let expObj = {};
  function handleExp(e) {
    expObj["id"] = `${index}`;
    expObj[e.target.name] = e.target.value;
  }

  return <>{expInput}</>;
}
