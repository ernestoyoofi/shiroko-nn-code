function Homepage() {
  const [trigger, switchTrigger] = React.useState("text-to-shiroko")
  const [resultTranslate, setResultTranslate] = React.useState("")
  const textareaRef = React.useRef()
  const translateRef = React.useRef()

  function SwitchDirectionTranslate() {
    GoingTranslate(textareaRef.current.value, trigger === "text-to-shiroko"?"shiroko-to-text":"text-to-shiroko")
    switchTrigger(trigger === "text-to-shiroko"?"shiroko-to-text":"text-to-shiroko")
  }

  function GoingTranslate(text, typeTrigger = trigger) {
    const functionExecute = (typeTrigger || trigger) === "text-to-shiroko"? textToShirokocode : shirokoCodeToReadable
    const executeTranslate = functionExecute(text)
    setResultTranslate(executeTranslate)
    // console.log("Result:", executeTranslate)
    // console.log("Decode:", encodeURIComponent(executeTranslate))
  }

  return <div className="w-full">
    <div className="w-full flex max-h-[320px] justify-center overflow-hidden">
      <img
        className="w-full max-w-[622px] max-h-[320px] object-cover"
        width="420px"
        src="./assets/art-shiroko-nn-crop.png"
      />
    </div>
    <div className="absolute w-full h-[261px] bg-linear-to-t from-10% from-white to-[transparant] mt-[-260px]">
      <div className="p-4 pb-6 flex items-end max-w-[944px] h-[260px] m-auto">
        <a target="_blank" href="https://x.com/RagingAsn_/status/1876681444673622449" className="cursor-pointer text-blue-700 text-[0.8rem]">Original art - see on twitter</a>
      </div>
    </div>
    <div className="max-w-[944px] m-auto">
      <div className="flex justify-between border-b border-gray-100 pb-2 w-full h-[calc(50px+calc(0.25rem*2))] overflow-hidden">
        <div className="font-bold w-[calc(calc(100%/2)-50px)] h-[50px] px-4 overflow-hidden duration-300">
          <div className={`mt-[${trigger === "text-to-shiroko"?"0px":"-50px"}] h-[50px] flex items-center w-full duration-300`}>
            <h2>Text (Sensei)</h2>
          </div>
          <div className="h-[50px] flex items-center w-full">
            <h2>Shiroko Code</h2>
          </div>
        </div>
        <div className="w-[50px] h-[50px] flex items-center justify-center">
          <button data-trigger="switch" className="w-[42px] h-[42px] bg-gray-200 rounded-md hover:bg-gray-300 cursor-pointer" onClick={SwitchDirectionTranslate}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="font-bold w-[calc(calc(100%/2)-50px)] h-[50px] px-4 pl-0 overflow-hidden duration-300">
          <div className={`mt-[${trigger === "text-to-shiroko"?"-50px":"0px"}] h-[50px] flex items-center w-full duration-300`}>
            <h2>Text (Sensei)</h2>
          </div>
          <div className="h-[50px] flex items-center w-full">
            <h2>Shiroko Code</h2>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[944px] flex max-md:block">
        <div className="w-[calc(calc(100%/2)-1px)] max-md:w-full min-h-[240px] border-r border-gray-200 max-md:border-b max-md:px-1 max-md:pt-1">
          <textarea
            className="resize-none w-full h-full p-4 outline-gray-400 duration-300 min-h-[240px]"
            placeholder={trigger === "text-to-shiroko"?"Put your text in here to translate":"Put shiroko code in here to translate"}
            ref={textareaRef}
            // onChange={(e) => {
            //   GoingTranslate(e.target.value)
            // }}
            onInput={(e) => {
              GoingTranslate(e.target.value)
            }}
          />
        </div>
        <div className="w-[calc(100%/2)] max-md:w-full min-h-[240px] max-md:px-1 max-md:pt-1 flex justify-end items-end">
          <textarea
            className="resize-none w-full h-full p-4 outline-blue-400 duration-300 min-h-[240px]"
            ref={translateRef}
            value={resultTranslate}
          />
          <button className="absolute mb-[10px] mr-[10px] w-[40px] h-[40px] bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer text-[1rem]" onClick={() => {
            const elementTranslate = translateRef.current
            elementTranslate.select()
            elementTranslate.setSelectionRange(0, 99999) // Mobile
            navigator.clipboard.writeText(elementTranslate.value)
          }}>
            <i className="fa-regular fa-clipboard"></i>
          </button>
        </div>
      </div>
      <div className="mt-2 mb-4 p-4">
        <h3 className="mt-3 font-bold text-lg">Shiroko Nn Morse Code</h3>
        <p className="mt-2">A meme that shiroko always says “Nn” in a chat or in a conversation, this project is only used for fun.</p>
        <a className="mt-2 text-blue-700 text-sm" target="_blank" href="https://x.com/RagingAsn_/status/1876681444673622449">Art original by @whitydragon_ and replace text by @RagingAsn_ on X (Twitter)</a>
        <h3 className="mt-3 font-bold text-lg">How it works?</h3>
        <p className="mt-2">In the script section, when translating, there are parts that are not visible, this is because it uses special characters, namely unicode with the name zero width space (\u200B) and zero width non-joiner (\u200C), in converting, usually from text is converted to ahcii and changes in binary form, namely 0 and 1, after that it is converted to unicode which can hide the message.</p>
      </div>
    </div>
  </div>
}