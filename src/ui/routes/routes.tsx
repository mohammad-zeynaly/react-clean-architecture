import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
// pages import
import HomePage from "../pages/home/Home";
import ProductDetailsPage from "../pages/product/ProductDetails";
import ProductsListsPage from "../pages/product/ProductsLists";
import CreateAdsProductPage from "../pages/product/CreateAdsProduct";
import SortingPage from "../pages/sorting/Sorting";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsListsPage /> },
      { path: "/products/:id", element: <ProductDetailsPage /> },
      { path: "/create-product", element: <CreateAdsProductPage /> },
      { path: "/sorting", element: <SortingPage /> },
    ],
  },
]);

export default router;
