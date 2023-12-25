import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserByIdT, updateUserByIdT } from "../redux/feature/userSlice";
import { toast } from "react-toastify";
import { IPUser } from "../common/user";
import Loading from "../components/Loading";
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
const FormUpdate = ({
  propsUpdate,
  setShow,
}: {
  propsUpdate: IPUser;
  setShow: () => boolean;
}) => {
  const dispact = useDispatch();
  const loading = useSelector((state) => state?.user?.isLoading);
  const isSuccess = useSelector((state) => state?.user?.isCreateSuccess);

  const { reset, register, handleSubmit } = useForm<input>({});
  const onSubmit: SubmitHandler<input> = async (data) => {
    const rest = dispact(updateUserByIdT(data));
    if (rest) {
      setShow(isSuccess);
    }
  };
  useEffect(() => {
    reset(propsUpdate);
  }, [propsUpdate.id]);

  if (loading === "pending") return <Loading></Loading>;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            defaultValue={propsUpdate.email}
            type="text"
            {...register("email")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            {...register("name")}
            defaultValue={propsUpdate.name}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            {...register("description")}
            defaultValue={propsUpdate.description}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Code</Form.Label>
          <Form.Control
            type="text"
            {...register("code")}
            defaultValue={propsUpdate.code}
          />
        </Form.Group>

        <button className="btn btn-danger">Create</button>
      </form>
    </>
  );
};

export default FormUpdate;
