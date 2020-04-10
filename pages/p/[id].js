import axios from 'axios'
import Layout from '../../components/Layout'

const Post = props => (
  <Layout>
    <h1>XKCD</h1>
      <h3>{props.comic.title}</h3>
      <img src={props.comic.img} alt={props.comic.alt} />
  </Layout>
)

Post.getInitialProps = async function (context) {
  console.log(context)
  
  const { id } = context.query
  const res = await axios.get(`http://xkcd.com/${id}/info.0.json`)
  
  return {
    comic: res.data
  }
}

export default Post
