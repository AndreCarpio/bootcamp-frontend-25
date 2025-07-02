import "./Button.css";

export const Button = ({ children, type, onClick }) => {
  return (
    <button className={`defaultButton ${type}`} onClick={onClick}>
      {children}
    </button>
  );
};
