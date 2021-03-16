import Head from 'next/head'
import { SetAuthor } from '../pages'
import Header from './Header'

type Props = {
  title?: string
  author: string
  setAuthor: SetAuthor
}

const Layout: React.FC<Props> = ({
  children,
  title = 'Default title',
  author,
  setAuthor,
}) => {
  return (
    <div className="flex justify-center item-center flex-col min-h-screen font-montserrat">
      <Head>
        <title>{title}</title>
      </Head>
      <Header author={author} setAuthor={setAuthor} />
      <main className="container mx-auto xl:px-80 px-5 flex flex-1 flex-col mb-10">
        {children}
      </main>
      <footer className="w-full h-6 flex justify-center item-center text-gray-400 mb-10">
        <div className="border-t text-center pt-5">
          created by masa @ DevChallenges.io
        </div>
      </footer>
    </div>
  )
}

export default Layout
