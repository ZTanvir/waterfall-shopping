import axios from "axios";
import useSWR from "swr";
const baseUrl = "https://fakestoreapi.com/products";

const getAll = () => {
  const fetcher = () => axios.get(`${baseUrl}`).then((res) => res.data);
  const { data, isLoading, error } = useSWR(`${baseUrl}`, fetcher);
  return {
    products: data,
    isLoading,
    isError: error,
  };
};

export default { getAll };
