import axios from "axios";
import useSWR from "swr";
const baseUrl = "https://fakestoreapi.com/users";
const fetcher = (url) => axios.get(url).then((res) => res.data);

const getAllUsers = () => {
  const { data, isLoading, error } = useSWR(`${baseUrl}`, fetcher);
  return {
    data,
    isLoading,
    isError: error,
  };
};
const getSingleUser = (userId) => {
  const { data, isLoading, error } = useSWR(`${baseUrl}/${userId}`, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
};

export default { getAllUsers, getSingleUser };
