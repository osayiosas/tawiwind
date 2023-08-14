export default function App() {
  return (
    <div className="p-4">
      <div className="bg-white shadow-xl rounded-lg">
        <div className=" grid place-items-center bg-violet-400 p-8 text-white rounded-t-lgv">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
        </div>

        <div className="p-10">
          <p>Lorem ipsum dolor sit</p>

          <form action="" className="flex flex-col gap-3 mt-3">
            <input type="email" placeholder="Email" className="border border-gray-300 px-4 py-2 rounded-md hover:border-x-violet-300 focus:outline-none focus:border-violet-500"/>
            <button className="bg-violet-300 px-4 py-2 rounded-md text-white">Notify me</button>
          </form>
        </div>
      </div>
    </div>
  );
}
