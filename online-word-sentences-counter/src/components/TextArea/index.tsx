import './index.scss'

const TextArea = ({ inputText, setInputTextValue }: { inputText: string; setInputTextValue: (value: string) => void }) => {
  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setInputTextValue(e.target.value);
    console.log(inputText);
  }
  return <textarea className="text-area" value={inputText} onChange={onTextChange} placeholder="Paste your text here..." />
}

export default TextArea
