import "./InputText.css";

export const InputText = ({ placeholder, ref }) => {
  return (
    <>
      <input
        className="customInputText"
        type="text"
        placeholder={placeholder}
        ref={ref}
      />
    </>
  );
};
