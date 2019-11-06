import { useRouter } from 'next/router'
import { getMovieById } from '../../actions'

const Movie = (props) => {
  const router = useRouter()
  const id = router.query
  const { movie } = props

  return (
    <div className="container">
      <div className="jumbotron">
        <h1></h1>
      </div>
      <h1>Movie with id: { id }</h1>
    </div>
  )
}

Movie.getInitialProps = async () => {
  const movie = await getMovieById('2')
  return { movie }
}

export default Movie