import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserByIdT, fetchUsers } from "../redux/feature/userSlice";
import { IPUser } from "../common/user";
import Buttonc from "../components/Buttonc";
import { IoIosAdd } from "react-icons/io";
import Moldan from "../components/Moldan";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const List = () => {
  const [show, setShow] = useState<Boolean>(false);
  const [propsUpdate, setUpdate] = useState<IPUser>({});
  const [typeshow, setTypeshow] = useState<string>("");
  const dispact = useDispatch();
  const user: IPUser[] = useSelector(
    (state: IPUser[]) => state?.user?.listUser
  );
  const loading = useSelector((state) => state?.user.isLoading);
  const handleDelete = (id: number) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispact(deleteUserByIdT(id));
      }
    });
  };
  useEffect(() => {
    dispact(fetchUsers());
  }, []);
  const isSuccessCreate = useSelector((state) => state?.user?.isCreateSuccess);
  useEffect(() => {
    if (isSuccessCreate == true) {
      setShow(false);
    }
  }, [isSuccessCreate]);
  if (loading === "pending") return <Loading></Loading>;
  return (
    <>
      <div className="d-flex justify-content-end align-items-center">
        <Buttonc
          onClick={() => {
            setShow(true);
            setTypeshow("ADD");
          }}
          variant="primary"
        >
          <IoIosAdd style={{ fontSize: "25px", fontWeight: "bold" }} />
          ADD
        </Buttonc>
      </div>
      <table className="table  table-bordered rounded">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Code</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {user?.map((item, index) => {
            return (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>{item.code}</td>
                <td className="d-flex gap-3">
                  <Buttonc
                    onClick={() => handleDelete(item.id as number)}
                    variant="danger"
                  >
                    Delete
                  </Buttonc>
                  <Buttonc
                    onClick={() => {
                      setTypeshow("updates");
                      setShow(true);
                      setUpdate(item);
                    }}
                    variant="success"
                  >
                    Update
                  </Buttonc>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Moldan
        propsUpdate={propsUpdate as IPUser}
        typeshow={typeshow}
        show={show as boolean}
        setShow={setShow as () => boolean}
      />
    </>
  );
};

export default List;
