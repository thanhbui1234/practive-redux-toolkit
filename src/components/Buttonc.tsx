import Button from "react-bootstrap/Button";

function Buttonc({ children, variant }: { children: any; variant: string }) {
  return (
    <>
      <Button variant={{ variant }}>{children}</Button>
    </>
  );
}

export default Buttonc;
