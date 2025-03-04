function Heading() {
  return <header className="sticky top-0 left-0 w-full h-[55px] border-b border-gray-100/80 bg-white/40 backdrop-blur-lg z-50">
    <div className="flex max-w-[944px] items-center h-[55px] m-auto">
      <div className="w-[calc(100%-55px)] p-3 px-4 flex items-center h-[55px]">
        <h3 className="font-bold text-[1rem]">Shiroko Nn Morse Code</h3>
      </div>
      <div className="w-[55px] flex justify-end items-center h-[55px]">
        <a className="w-[45px] h-[45px] rounded-md cursor-pointer hover:bg-gray-200 text-[1.3rem] flex justify-center items-center" href="https://github.com/ernestoyoofi/shiroko-nn-code">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  </header>
}