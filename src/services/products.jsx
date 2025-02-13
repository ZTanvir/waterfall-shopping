import axios from "axios";
import useSWR from "swr";
const baseUrl = "https://fakestoreapi.com/products";
const fetcher = (url) => axios.get(url).then((res) => res.data);

const getAll = () => {
  const { data, isLoading, error } = useSWR(`${baseUrl}`, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
};
const getCategoryProducts = () => {};

export default { getAll };
