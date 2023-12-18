import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/feature/userSlice";
import { IPUser } from "../common/user";
import Buttonc from "../components/Buttonc";

const List = () => {
  const dispact = useDispatch();
  const user: IPUser = useSelector((state: IPUser[]) => state?.user?.listUser);

  useEffect(() => {
    dispact(fetchUsers());
  }, []);

  return (
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
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item?.code}</td>
              <td>
                <Buttonc variant="primary">sửa</Buttonc>
                <Buttonc variant="success">update</Buttonc>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;
