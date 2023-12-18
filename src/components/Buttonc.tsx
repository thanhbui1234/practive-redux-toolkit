import Button from "react-bootstrap/Button";

const Buttonc = ({
  children,
  variant,
  onClick,
}: {
  children: any;
  variant: string;
  onClick?: () => void;
  type?: string;
}) => {
  return (
    <>
      <Button onClick={onClick} variant={variant}>
        {children}
      </Button>
    </>
  );
};

export default Buttonc;
