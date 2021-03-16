import { Quote } from '../lib/useQuote'
import Text from './Text'

type Props = {
  quotes: Quote[]
}

const List: React.FC<Props> = (props) => {
  return (
    <div>
      <div className="text-4xl font-semibold mt-10 mb-20">
        {props.quotes[0].quoteAuthor}
      </div>
      {props.quotes.map((quote) => (
        <Text key={quote._id} text={quote.quoteText} />
      ))}
    </div>
  )
}

export default List
