import './index.scss'
import { resultDataType } from '../../utils/calculateData'
const ResultBox = ({ resultData }: { resultData: resultDataType }) => {
  const resultBar = [
    {
      title: 'Words',
      value: resultData.words || 0,
    },
    {
      title: 'Characters',
      value: resultData.characters || 0,
    },
    {
      title: 'Sentences',
      value: resultData.sentences || 0,
    },
    {
      title: 'Paragraphs ',
      value: resultData.paragraphs || 0,
    },
    {
      title: 'Pronouns',
      value: resultData.pronouns || 0,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
