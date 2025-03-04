const codeMap = {
  "0": "\u200B",
  "1": "\u200C",
  "\u200B": "0",
  "\u200C": "1",
}

function textToShirokocode(text) {
  const textToAscii = Array.from(text).map(a => a.charCodeAt(0).toString(2).padStart(8, '0'))
  const asciToUnicode = textToAscii.map(a => {
    const b = a.split("")
    const convertMap = b.map(c => codeMap[c])
    return convertMap.join("")
  })
  return asciToUnicode.map(a => "Nn"+a).join(" ")+(!!asciToUnicode[0]?" Sensei...":"")
}

function shirokoCodeToReadable(shirokocode) {
  const splitCode = shirokocode.split(" ").filter(a => a.startsWith("Nn")).map(a => a.slice(2))
  const unicodeToAsci = splitCode.map(a => {
    const b = a.split("")
    const convertMap = b.map(c => codeMap[c])
    return String.fromCharCode(parseInt(convertMap.join(""), 2))
  })
  return unicodeToAsci.join("")
}