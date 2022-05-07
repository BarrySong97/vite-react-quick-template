import './index.css';
import { useRequest } from 'ahooks';
import { fetchDogFace } from '../service';
function Index() {
  const { data, run } = useRequest(fetchDogFace);
  console.log(data);

  return (
    <div className="h-screen max-w-1/3 mx-auto flex justify-center items-center flex-col">
      <div className="w-96 flex items-center ">
        <div className="flex-1 mr-4">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            placeholder="name it"
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
        </div>
        <div>
          <button
            className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => {
              run();
            }}
          >
            Change Dog
          </button>
          <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Raise Me
          </button>
        </div>
      </div>

      <div className="mt-2 text-center mb-4 text-center text-3xl font-extrabold text-gray-900">
        <img
          className="mt-2 object-cover rounded-lg  h-60 w-96"
          src={data?.message}
          alt=""
        />
      </div>
    </div>
  );
}
export default Index;
