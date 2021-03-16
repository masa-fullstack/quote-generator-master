import { Quote } from '../lib/useQuote'
import { SetAuthor } from '../pages'

type Props = {
  author: Quote['quoteAuthor']
  genre: Quote['quoteGenre']
  setAuthor: SetAuthor
}

const Author: React.FC<Props> = (props) => {
  return (
    <div
      className="md:mx-32 px-5 py-10 hover:bg-gray-800 hover:text-white cursor-pointer"
      onClick={() => props.setAuthor(props.author)}
    >
      <div className="flex justify-between">
        <div>
          <div className="text-2xl font-semibold">{props.author}</div>
          <div className="text-sm font-light">{props.genre}</div>
        </div>
        <div className="flex items-center">
          <span className="material-icons text-5xl text-white">
            arrow_right_alt
          </span>
        </div>
      </div>
    </div>
  )
}

export default Author
