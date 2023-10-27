function App() {
  return (
    <>
      <div className="py-10">
        <div className="flex flex-row justify-center items-center space-x-5 m-5">
          <h2 className="title-one text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text">
            Project
          </h2>
          <h2 className="title-one text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">
            Container
          </h2>
        </div>
        <div className="flex flex-col w-full justify-center items-center">
          <p className=" my-10 font-semibold text-2xl flex-wrap">
            Right now we have 4 projects consist of different subject areas of
            react hooks and state management.
          </p>
          <div className="bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 rounded-full backdrop-blur-sm px-10">
            <p className="font-semibold uppercase my-6 text-2xl text-transparent bg-clip-text text-white">
              this file updates with ⏲....
            </p>
          </div>
          <div className="pt-40">
            <p className="text-base capitalize">
              This focus on <span className="text-2xl font-extrabold ">newbies</span> for React JS to levelup their game and
              intermediate <span className="text-2xl font-extrabold text-blue-800">devs</span> to brush up the knowledge
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
