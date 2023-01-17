import Link from 'next/link'
import { useRouter } from 'next/router'
import { server } from '../../../config'
import Meta from '../../../components/Meta'


const article = ({ article }) => {
    // const router = useRouter(); // useable in place of getServerSideProps()
    // const {id} = router.query
  return (
    <>
    <Meta title={article.title} description={article.excerpt} />
    <h1>{article.title}</h1>
    <p>{article.body}</p>
    <br/>
    <Link href='/'>Go Back</Link>
    </>
  )
}

// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json();

//     return {
//         props: {
//             article
//         }
//     }

// }   // Shorter than using getStaticProps() and getStaticPaths()

//or using getStaticProps

// export const getStaticProps = async (context) => {  // usable with getStaticPaths()
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json();

//     return {
//         props: {
//             article
//         }
//     }

// }

// export const getStaticPaths = async () => {  // usable with getStaticProps()
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     const articles = await res.json();

//     const ids = articles.map(article => article.id);
//     const paths = ids.map(id => ({params: {id: id.toString()}}))

//     return {
//         paths,
//         fallback: false // returns 404 page if the sought obj doesn't exist
//     }

// }

// or using /api/ route from server obj in /config/

export const getStaticProps = async (context) => {  // usable with getStaticPaths()
    const res = await fetch(`${server}/api/articles/${context.params.id}`);
    const article = await res.json();

    return {
        props: {
            article
        }
    }

}

export const getStaticPaths = async () => {  // usable with getStaticProps()
    const res = await fetch(`${server}/api/articles`);
    const articles = await res.json();

    const ids = articles.map(article => article.id);
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false // returns 404 page if the sought obj doesn't exist
    }

}

export default article