function Heading() {
  return <header className="sticky top-0 left-0 w-full h-[55px] border-b border-gray-100/80 dark:border-gray-800/30 bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg z-50">
    <div className="flex max-w-[944px] items-center h-[55px] m-auto">
      <div className="w-[calc(100%-calc(calc(55px*2)+calc(0.25rem*4)+5px))] p-3 px-4 flex items-center h-[55px]">
        <h3 className="font-bold text-[1rem] dark:text-white">Shiroko Nn Morse Code</h3>
      </div>
      <div className="w-[calc(calc(55px*2)+calc(0.25rem*4)+5px)] flex justify-end items-center h-[55px] px-4">
        <button className="w-[45px] min-w-[45px] h-[45px] mr-1 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 text-[1.3rem] flex justify-center items-center" onClick={() => {
          document.querySelector('html').classList.toggle("dark")
        }} data-label-hover="Switch theme">
          <i className="dark:text-white fa-solid fa-moon"></i>
        </button>
        <a className="w-[45px] min-w-[45px] h-[45px] rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 text-[1.3rem] flex justify-center items-center" href="https://github.com/ernestoyoofi/shiroko-nn-code" data-label-hover="Open github">
          <i className="dark:text-white fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  </header>
}