import useSWR, { mutate } from 'swr'
import quoteData from '../data/random.json'

export type QuoteData = typeof quoteData
export type Quote = typeof quoteData.data[number]

type UseQuote = (
  author?: string
) => {
  data: null | QuoteData
  error: any
  isValidating: boolean
}

type MutateQuote = () => void

const API_URL = 'https://quote-garden.herokuapp.com/api/v3/quotes'
const RANDOM_ENDPOINT = '/random'

export const mutateQuote: MutateQuote = () => {
  mutate(`${API_URL}${RANDOM_ENDPOINT}`)
}

const useQuote: UseQuote = (author) => {
  //author指定がない場合はrandomAPI
  const key = author
    ? `${API_URL}?author=${author}`
    : `${API_URL}${RANDOM_ENDPOINT}`

  const { data, error, isValidating } = useSWR(key, {
    // windowのフォーカス時にRevalidateしないように設定
    revalidateOnFocus: false,
  })

  return {
    data,
    error,
    isValidating,
  }
}

export default useQuote
