import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import options from "../data/categories.json";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchListProducts,
  deleteData,
  filterSearch,
  filterCategory,
} from "../redux/reducers/products";
import Swal from "sweetalert2";

function Homepage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  const [settingProducts, setSettingProducts] = useState(null);
  const [page, setPage] = useState(products?.data?.page);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getDataProduct(page);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const getDataProduct = (pageNumber) => {
    try {
      dispatch(fetchListProducts(pageNumber));
      setTimeout(() => {
        setSettingProducts(products.data);
      }, 500);
    } catch (error) {
      console.log(error, 500);
    }
  };

  const getFilterSearch = (keyword) => {
    try {
      setSettingProducts(null);
      dispatch(filterSearch(keyword));
      setTimeout(() => {
        setSettingProducts(products.data);
      }, 500);
    } catch (error) {
      console.log(error, 500);
    }
  };

  const getFilterCategory = (category) => {
    try {
      setSettingProducts(null);
      dispatch(filterCategory(category));
      setTimeout(() => {
        setSettingProducts(products.data);
      }, 500);
    } catch (error) {
      console.log(error, 500);
    }
  };

  const deleteProduct = (id) => {
    try {
      dispatch(deleteData(id));
      Swal.fire("Delete Success!", "", "success");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      console.log(error, 500);
    }
  };

  const deleteAction = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Product will be removed, are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
      } else {
        Swal.fire("Delete Failed", "", "info");
      }
    });
  };

  const totalNumber = settingProducts?.totalPage; // Ganti dengan jumlah angka yang Anda inginkan

  const numberArray = Array.from(
    { length: totalNumber },
    (_, index) => index + 1
  );

  const toDetails = (data) => {
    return navigate("/details", { state: { data } });
  };

  return (
    <div className="pb-5">
      <Navbar />
      <div className="container flex items-end pt-3 gap-x-3 mx-auto justify-center md:justify-end px-5">
        <form className="relative w-1/2 md:w-1/3 overflow-hidden rounded">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name..."
            className="input focus:outline-none bg-slate-100 placeholder:text-gray-600 placeholder:text-sm placeholder:font-semibold w-full"
          />
          <div
            onClick={() => getFilterSearch(search)}
            className="absolute md:top-0 bottom-0 bg-slate-400 right-0 flex items-center justify-center text-white text-xs md:text-sm py-2 px-3 rounded md:px-5 tracking-wide cursor-pointer"
          >
            submit
          </div>
        </form>
        <select
          onChange={(e) => {
            console.log(e.target.value)
            getFilterCategory(e.target.value);
          }}
          className="select select-bordered capitalize focus:outline-none border-none bg-slate-100 text-gray-600"
        >
          <option disabled selected>
            Random
          </option>
          {options.map((data, index) => {
            return (
              <option className="py-2" value={data.categoryName} key={index}>
                {data.categoryName}
              </option>
            );
          })}
        </select>
      </div>
      <div className="relative min-h-[80vh] container mx-auto overflow-x-scroll py-5 px-5 scrollbar">
        <table className="w-full text-sm text-left text-gray">
          <thead className="text-xs text-gray-700 uppercase text-center md:text-[14px]">
            <tr>
              <th scope="col" className="py-3 px-3 border-b">
                Product Image
              </th>
              <th scope="col" className="py-3 px-3 border-b">
                Product name
              </th>
              <th scope="col" className="py-3 px-3 border-b">
                SKU
              </th>
              <th scope="col" className="py-3 px-3 border-b">
                Category
              </th>
              <th scope="col" className="py-3 px-3 border-b">
                Price
              </th>
              <th scope="col" className="py-3 px-3 border-b">
                Action
              </th>
            </tr>
          </thead>
          {products && (
            <tbody>
              {products?.data?.results?.map((data, index) => (
                <tr key={index} className="hover:bg-slate-200 text-center">
                  <td className="w-14 h-14 rounded py-2 overflow-hidden bg-white font-medium text-gray-900">
                    <img
                      src={data.image}
                      className="w-full h-[100%] object-cover object-center"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </td>
                  <th
                    scope="row"
                    className="py-4 px-5 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {data.name}
                  </th>
                  <td className="py-4 px-5">{data.sku}</td>
                  <td className="py-4 px-5">{data.categoryName}</td>
                  <td className="py-4 px-5">${data.price}</td>
                  <td className="py-4 text-center flex gap-5 justify-center">
                    <p
                      onClick={() => toDetails(data)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                    >
                      Details
                    </p>
                    <p
                      onClick={() => deleteAction(data.id)}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
                    >
                      Delete
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
        {!settingProducts && (
          <div className="h-[20vh] flex w-full justify-center items-center">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        )}
      </div>
      <div className="container flex items-end pt-3 gap-x-3 mx-auto justify-center px-5">
        {settingProducts !== null &&
          numberArray?.map((data, index) => {
            if (data === page) {
              return (
                <p
                  key={index}
                  className="border py-1 bg-slate-400 px-3 text-sm font-semibold rounded cursor-pointer"
                >
                  {data}
                </p>
              );
            } else {
              return (
                <p
                  onClick={() => setPage(data)}
                  key={index}
                  className="border py-1 px-3 bg-slate-200 text-sm font-semibold rounded cursor-pointer"
                >
                  {data}
                </p>
              );
            }
          })}
      </div>
    </div>
  );
}

export default Homepage;
