import "./input.css";

export default function Input({ type, id, name, label, ph, onchange }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        onChange={onchange}
        placeholder={ph}
      />
    </>
  );
}
