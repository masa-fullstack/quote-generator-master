import Layout from '../components/Layout'
import { Dispatch, SetStateAction, useState } from 'react'
import List from '../components/List'
import Random from '../components/Random'
import useQuote from '../lib/useQuote'

export type SetAuthor = Dispatch<SetStateAction<string>>

const Home = (): JSX.Element => {
  const [author, setAuthor] = useState('')
  const { data, error, isValidating } = useQuote(author)

  if (error)
    return (
      <div className="text-red-500 text-3xl font-light text-center mt-40">
        failed to load
      </div>
    )
  if (!data || isValidating)
    return (
      <div className="text-gray-500 text-3xl font-light text-center mt-40">
        loading...
      </div>
    )

  return (
    <Layout
      title="Random quote generator"
      author={author}
      setAuthor={setAuthor}
    >
      {author ? (
        <List quotes={data.data} />
      ) : (
        <Random quote={data.data[0]} setAuthor={setAuthor} />
      )}
    </Layout>
  )
}

export default Home
