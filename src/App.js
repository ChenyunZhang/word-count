import { useState } from "react";
// const fs = require('fs');
// const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
// const { IamAuthenticator } = require('ibm-watson/auth');

function App() {
  const [text, setText] = useState("")
  const [wordCount, setwordCount] = useState(0)
  const [excludeSpace, setExcludeSpace] = useState(0)
  const [characters, setCharacters] = useState(0)
  const [sentence, setSentence] = useState(0)
  // const [paragraph, setParagraph] = useState(0)
  const handleChange = (e) => {
    const words = e.target.value
    setText(words)
    const wordArr = words.split(/\s+/g)
    let counter = 0
    for (let i of wordArr) {
      if (i !== "") counter++
    }
    setwordCount(counter)
    setExcludeSpace(words.replaceAll(/\s/g, '').length)
    setCharacters(words.length)
    let w = words.split("").filter(word => word.replaceAll("\n", ""))
    setCharacters(w.length)
    const sentenceCount = words.match(/\w[.?!](\s|$)/g)
    console.log(sentenceCount)
    if (sentenceCount !== null){
      setSentence(sentenceCount.length)
    }else{
      setSentence(0)
    }
  }


  const handleReset = () => {
    setText("")
    setwordCount(0)
    setExcludeSpace(0)
    setSentence(0)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Word Count</h1>
        <h2>Words: {wordCount}</h2>
        {/* <h2>Paragraph Count: {paragraph}</h2> */}
        <h2>Characters:{characters}</h2>
        <h2>Characters excluding spaces: {excludeSpace}</h2>
        <h2>Sentence: {sentence}</h2>
      </header>
      <div className="container">
        <textarea value={text} onChange={handleChange} rows="10" cols="30" placeholder="Start here" className="text"></textarea>
        <button className="reset-button" onClick={handleReset}>reset</button>
      </div>
    </div>
  );
}

export default App;
