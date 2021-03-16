import { Quote } from '../lib/useQuote'

type Props = {
  text: Quote['quoteText']
}

const Text: React.FC<Props> = (props) => {
  return (
    <div className="md:text-4xl text-lg px-12 md:leading-loose leading-loose border-l-8 border-yellow-300 mb-32">{`"${props.text}"`}</div>
  )
}

export default Text
