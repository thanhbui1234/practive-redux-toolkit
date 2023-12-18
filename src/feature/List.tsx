import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/feature/userSlice";
import { IPUser } from "../common/user";
import Buttonc from "../components/Buttonc";
import { IoIosAdd } from "react-icons/io";
import Moldan from "../components/Moldan";
import { toast } from "react-toastify";
const List = () => {
  const [show, setShow] = useState<Boolean>(false);
  const [propsUpdate, setUpdate] = useState<number | null>(null);
  const [typeshow, setTypeshow] = useState<string>("");
  const dispact = useDispatch();
  const user: IPUser = useSelector((state: IPUser[]) => state?.user?.listUser);
  const handleDelete = () => {};
  useEffect(() => {
    dispact(fetchUsers());
  }, []);
  const isSuccessCreate = useSelector((state) => state?.user?.isCreateSuccess);
  useEffect(() => {
    if (isSuccessCreate == true) {
      setShow(false);
      toast.success("create success");
    }
  }, [isSuccessCreate]);

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
                <td>{item?.code}</td>
                <td className="d-flex gap-3">
                  <Buttonc onClick={handleDelete} variant="danger">
                    Delete
                  </Buttonc>
                  <Buttonc
                    onClick={() => {
                      setTypeshow("updates");
                      setShow(true);
                      setUpdate(item.id);
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
        propsUpdate={propsUpdate}
        typeshow={typeshow}
        show={show as boolean}
        setShow={setShow as () => boolean}
      />
    </>
  );
};

export default List;
