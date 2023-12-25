import Form from "react-bootstrap/Form";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUserT } from "../redux/feature/userSlice";
import { IPUser } from "../common/user";
type input = {
  name: string;
  description: string;
  code: number;
  email: string;
  address: {
    xa: string;
    huye: string;
  };
};

const FormAdd = () => {
  const dispact = useDispatch();
  const { register, handleSubmit } = useForm<input>({});
  const onSubmit: SubmitHandler<input> = (data) => {
    dispact(createUserT(data as IPUser));
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" {...register("email")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" {...register("name")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" {...register("description")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Code</Form.Label>
          <Form.Control type="text" {...register("code")} />
        </Form.Group>

        <button className="btn btn-danger">Create</button>
      </form>
    </>
  );
};

export default FormAdd;
