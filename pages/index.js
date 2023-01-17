import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import ArticleList from '../components/ArticleList'
import { server } from '../config'
import Meta from '../components/Meta'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
        <Meta />
        <ArticleList articles={articles}/>        
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//   const articles = await res.json();

//   return {
//     props: {
//       articles
//     }
//   }

  // or using api route and server env setting in /config/ folder

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}
