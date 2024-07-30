import { useMutation, useQuery } from "react-query";
import {
  getAllTask,
  postTask,
  putTask,
  deleteTask,
  getTaskByStatus,
} from "../api/task";

export const useGetAllTask = () => {
  return useQuery({
    queryKey: ["getAllTask"],
    queryFn: getAllTask,
  });
};

export const usePostTask = () => {
  return useMutation(postTask);
};

export const usePutTask = () => {
  return useMutation(putTask);
};

export const useDeleteTask = () => {
  return useMutation(deleteTask);
};

export const useGetTaskByStatus = () => {
  return useQuery({
    queryKey: ["getTaskByStatus"],
    queryFn: getTaskByStatus,
  });
};
