import "./App.css";
import { FiSearch, FiHome, FiStar } from "react-icons/fi";
import { MdWorkOutline } from "react-icons/md";

function App() {
  return (
    <div className="flex h-screen bg-red-200 map">
      <div className="flex flex-col bg-white h-2/3 w-full mt-auto rounded-t-3xl">
        <div className="h-10 flex justify-center items-center">
          <span className="flex bg-gray-200 w-8 rounded-3xl h-1 opacity-50"></span>
        </div>
        <div className="flex w-full h-52 justify-evenly">
          <div className="h-full w-5/12 flex bg-green-300 rounded-3xl">
            <div className="mx-4 flex flex-col justify-center gap-y-3">
              <span className="w-10 h-10 bg-green-800 opacity-50 rounded-full flex items-center justify-center">
                <FiSearch color="white" />
              </span>
              <p className="text-lg text-white font-semibold">
                Get Me Somewhere
              </p>
            </div>
          </div>
          <div className="h-full w-3/12 flex bg-red-200 rounded-3xl">
            <div className="flex flex-col mx-4 justify-center gap-y-3">
              <span className="w-10 h-10 bg-red-800 opacity-50 rounded-full flex items-center justify-center">
                <FiHome color="white" />
              </span>
              <p className="text-white font-semibold text-lg">Get Me Home</p>
            </div>
          </div>
          <div className="flex flex-col h-full w-2/12 gap-y-2">
            <div className="flex justify-center items-center border h-1/2 rounded-3xl">
              <FiStar color="gray" size="24" />
            </div>
            <div className="flex justify-center items-center h-1/2 rounded-3xl bg-yellow-200">
              <MdWorkOutline size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
