const FooterTop = () => {
  return (
    <div
      className="mb-14 p-11 rounded-2xl"
      style={{
        background: `url('/assets/background_gradinet.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-wrap items-center -m-8">
        <div className="w-full md:w-1/2 p-8">
          <h2 className="font-heading text-6xl text-black tracking-tighter">
            Let&apos;s make Passive Income buy selling your thrift products
          </h2>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <div className="flex flex-wrap md:justify-end">
            <div className="auto">
              <a
                className="inline-block px-5 py-4 text-black font-semibold tracking-tight hover:bg-black bg-transparent rounded-lg outline outline-2 hover:outline-0 hover:text-white focus:ring-4 focus:ring-indigo-300 transition duration-200"
                href="#"
              >
                SignUp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
