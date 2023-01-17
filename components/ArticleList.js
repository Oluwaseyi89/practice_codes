import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'


const ArticleList = ({ articles }) => {
  return (
    <div>
         {articles.map(article => {
          return (<div key={article.id}>
         <ArticleItem article={article}/>
         </div>)
         })}  
    </div>
  )
}

export default ArticleList