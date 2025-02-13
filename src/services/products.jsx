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

const getAllCategories = () => {
  const { data, isLoading, error } = useSWR(`${baseUrl}/categories`, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
};

const getCategoryProducts = (categoryName) => {
  const { data, isLoading, error } = useSWR(
    `${baseUrl}/category/${categoryName}`,
    fetcher
  );

  return {
    data,
    isLoading,
    isError: error,
  };
};

export default { getAll, getAllCategories, getCategoryProducts };
