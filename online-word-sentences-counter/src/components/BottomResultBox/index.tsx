import './index.scss'
import { resultDataType } from '../../utils/calculateData'

type BottomResultBoxProps = {
  resultData: resultDataType
}

const BottomResultBox = ({ resultData }: BottomResultBoxProps) => {
  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: resultData.averageReadTime || '-',
    },
    {
      title: 'Longest word:',
      value: resultData.longestWord || '-',
    },
  ]

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
