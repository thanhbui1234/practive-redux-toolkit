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

export const getUserByID = async (id: number) => {
  try {
    const rest: AxiosResponse<IPUser> = await instance.get(`/users/${id}`);
    return rest.data || {};
  } catch (error: any) {
    console.log(error.message);
  }
};

export const createUser = async (data: IPUser) => {
  try {
    const rest: AxiosResponse<IPUser[]> = await instance.post(`/users`, data);
    return rest.data || [];
  } catch (error: any) {
    console.log(error.message);
  }
};

export const deleteUser = async (id: number) => {
  try {
    const rest = await instance.delete(`/users/${id}`);
    return rest;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const updateUser = async (data: IPUser) => {
  try {
    const rest = await instance.patch(`/users/${data.id}`, data);
    return rest.data || {};
  } catch (error: any) {
    console.error(error.message);
  }
};
