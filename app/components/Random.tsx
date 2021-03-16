import Text from '../components/Text'
import Author from '../components/Author'
import { SetAuthor } from '../pages'
import { Quote } from '../lib/useQuote'

type Props = {
  quote: Quote
  setAuthor: SetAuthor
}

const Random: React.FC<Props> = (props) => {
  return (
    <div>
      <div className="lg:mt-40 mt-24"></div>
      <Text text={props.quote.quoteText} />
      <Author
        author={props.quote.quoteAuthor}
        genre={props.quote.quoteGenre}
        setAuthor={props.setAuthor}
      />
    </div>
  )
}

export default Random
