export default function Hero() {
  return (
    <div className="heroSection w-full h-[60vh]  flex flex-col  border  bg-slate-600">
      <div className="flex w-full h-full justify-between">
        <div className=" heroLeft  flex flex-col h-full w-1/2 border p-6 justify-center items-start">
          <h1 className="text-7xl">main title</h1>
          <h2 className="text-5xl">sub title</h2>
          <div>
            <button className="border p-4">services</button>
            <button className="border p-4 hover:bg-slate-50 hover:text-black">
              {" "}
              ask for a quote
            </button>
          </div>
        </div>
        <div className="heroRight  w-1/2 border"> content</div>
      </div>
    </div>
  );
}
