import { mutateQuote } from '../lib/useQuote'
import { SetAuthor } from '../pages'

type Props = {
  author: string
  setAuthor: SetAuthor
}

const Header: React.FC<Props> = (props) => {
  const handleClick = () => {
    if (props.author) {
      props.setAuthor('')
    } else {
      mutateQuote()
    }
  }
  return (
    <header className="container flex justify-end mt-5">
      <div
        className="p-4 hover:bg-gray-800 hover:text-white cursor-pointer"
        onClick={handleClick}
      >
        random<span className="material-icons">autorenew</span>
      </div>
    </header>
  )
}

export default Header
