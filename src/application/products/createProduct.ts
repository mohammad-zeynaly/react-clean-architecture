import { Product } from "../../domain/product";
import { localStorageMange } from "../../adaptor/storageAdapter";
import { productData } from "../../../public/assets/data";

export const useCreateProduct = () => {
  const { getLocalStorage, setLocalStorage } = localStorageMange;
  const oldProducts = getLocalStorage("products");

  const createProduct = (newProduct: Product) => {
    setLocalStorage<Product[]>("products", [...oldProducts, newProduct]);
    alert("آگهی اضافه شد");
    // convert navigate()
    window.location.href = "/products";
  };

  return { createProduct };
};

export const useSetProductsToLocalStorage = () => {
  const { getLocalStorage, setLocalStorage } = localStorageMange;
  const setProducts = () => {
    const oldProducts = getLocalStorage("products") || [];
    if (oldProducts?.length > 0) {
      setLocalStorage<Product[]>("products", [...oldProducts]);
    } else {
      setLocalStorage<Product[]>("products", [...productData]);
      window.location.reload();
    }
  };
  return { setProducts };
};
