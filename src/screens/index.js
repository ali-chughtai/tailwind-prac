import React from "react";

function Dashboard() {
  return (
    <body className="bg-custom-gray px-4">
      <main className="max-w-5xl flex flex-row justify-center mx-auto items-center min-h-screen gap-3
      max-md:flex-col max-md:w-full
      ">
        <div className="flex flex-col w-2/4  justify-center items-center  max-md:w-full max-md:mb-5">
          <img className="" src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" />
          <p className="text-xl  ">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="flex flex-col  justify-center w-2/4  max-md:w-full ">
          <form className=" shadow-custom-shadow flex rounded-lg p-4 flex-col justify-center items-center bg-white gap-y-4">
            <input
              className=" border-gray-400 rounded-md w-full px-4 py-2 mx-3.5	 mt-4 border-2 max-w-screen "
              type="email"
              placeholder="Email"
            />
            <input
              className=" border-gray-400 rounded-md w-full px-4 py-2 border-2 max-w-screen m-0"
              type="password"
              placeholder="Password"
            />
            <button className=" font-bold w-full bg-custom-blue p-2 rounded text-xl text-white ">
              Log in
            </button>
            <a className="text-link" href="#forgotPassword">
              {" "}
              Forgotten Password
            </a>
            <hr className="w-full border-1 my-2" />
            <button className="mb-4  font-bold w-full bg-lime-600 p-2 rounded text-xl text-white ">
              Create new account
            </button>
          </form>
          <p className="self-center pt-3">
            <span className="font-bold" >Create a Page</span> for a celebrity
          </p>
        </div>
      </main>
    </body>
  );
}

export default Dashboard;
