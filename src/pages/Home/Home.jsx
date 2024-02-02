// CSS
import styles from './Home.module.css'

// hooks
import { useNavigate, Link} from 'react-router-dom'
import { useState } from 'react'
import { useFecthDocuments } from '../../hooks/useFecthDocuments'

// components
import PostDetail from '../../components/PostDetail'


function Home() {
  const [query, setQuery] = useState("") 
  const {documents: posts, loading} = useFecthDocuments("posts")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(query) {
      return navigate(`/search?q=${query}`)
    }
  }

  return (
    <div className={styles.home}>
        <h1>Veja os nossos posts mais recentes</h1>
        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <input type="text" placeholder='Ou busque por tags...' onChange={(e) => setQuery(e.target.value)}/>
          <button className='btn btn-dark'>Pesquisar</button>
        </form>

      <div>
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post}/>)}
        {posts && posts.length === 0 && (
          <div className={styles.noPosts}>
            <p>Não foram encontrados posts</p>
            <Link to="/post/create" className='btn'>Criar primeiro post</Link>
          </div>
        )}
      </div>

    </div>
  )
}

export default Home