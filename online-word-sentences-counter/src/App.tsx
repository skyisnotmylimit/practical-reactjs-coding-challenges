import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import { useState, useEffect } from 'react'
import { calculateData } from "./utils/calculateData"
const App = () => {
  const [inputText, setInputText] = useState<string>("");
  const [resultData, setResultData] = useState({
    words: 0,
    sentences: 0,
    characters: 0,
    paragraphs: 0,
    pronouns: 0,
    averageReadTime: "",
    longestWord: "",
  });
  useEffect(() => {
    const result = calculateData(inputText);
    setResultData(result);
  }, [inputText]);
  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox resultData={resultData} />
          <TextArea setInputTextValue={setInputText} inputText={inputText} />
          <BottomResultBox resultData={resultData} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
