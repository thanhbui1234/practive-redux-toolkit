import { AxiosResponse } from "axios";
import { IPUser } from "../common/user";
import instance from "../core/Apiconfix";
export const getAll = async () => {
  try {
    const rest: AxiosResponse<IPUser[]> = await instance.get(`/users`);
    return rest.data || [];
  } catch (error: any) {
    console.log(error.message);
  }
};
