import Navbar from "../components/Navbar";
import dataProducts from "../data/product.json";
import {useNavigate} from 'react-router-dom'
function Homepage() {
  const navigate = useNavigate()
  const toDetails = (data) => {
    return navigate('/details', {state : {data}})
  }
  return (
    <div>
      <Navbar />
      <div className="relative min-h-[90vh] container mx-auto overflow-x-scroll py-5 px-5">
          <table className="w-full text-sm text-left text-gray">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 text-center sm:text-md">
                  <tr>
                      <th scope="col" className="py-3 px-3">
                          Product Image
                      </th>
                      <th scope="col" className="py-3 px-3">
                          Product name
                      </th>
                      <th scope="col" className="py-3 px-3">
                          SKU
                      </th>
                      <th scope="col" className="py-3 px-3">
                          Category
                      </th>
                      <th scope="col" className="py-3 px-3">
                          Price
                      </th>
                      <th scope="col" className="py-3 px-3">
                          Action
                      </th>
                  </tr>
              </thead>
              <tbody>
                  {dataProducts.map((data, index) => (
                    <tr key={index} className="hover:bg-slate-200 text-center">
                        <td scope="row" className="w-14 h-14 py-1 rounded-full overflow-hidden font-medium bg-slate-200 text-gray-900">
                          <img
                            src={data.image}
                            className="w-full h-[100%] object-cover object-center"
                            alt="Avatar Tailwind CSS Component"
                            />
                        </td>
                        <th scope="row" className="py-4 px-3 font-medium text-gray-900 whitespace-nowrap">
                            {data.name}
                        </th>
                        <td className="py-4 px-3">
                            {data.sku}
                        </td>
                        <td className="py-4 px-3">
                            {data.categoryName}
                        </td>
                        <td className="py-4 px-3">
                            ${data.price}
                        </td>
                        <td className="py-4 text-center flex gap-4 justify-center">
                            <p onClick={() => toDetails(data)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">Details</p>
                            <p onClick={() => toDetails(data)} className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer">Delete</p>
                        </td>
                    </tr>
                  ))}
              </tbody>
          </table>
      </div>
    </div>
  );
}

export default Homepage;
