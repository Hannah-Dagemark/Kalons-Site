interface ButtonParams {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: ButtonParams) => {
  return (
    <div>
      <a className="" onClick={() => onClick()}>
        {label}
      </a>
    </div>
  );
};
