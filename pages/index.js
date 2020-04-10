import Link from 'next/link'
import Layout from '../components/Layout'
import axios from 'axios'

const Index = props => {
  const prevArr = []
  for (let i = 1; i < 11; i++) {
    prevArr.push(props.comic.num - i)
  }

  return (
    <Layout>
      <h1>XKCD</h1>
      <h3>{props.comic.title}</h3>
      <img src={props.comic.img} alt={props.comic.alt} />
      <h3>Previous Comics</h3>
      {prevArr.map(prev => (
        <Link key={prev} href='/p/[id]' as={`/p/${prev}`}>
          <a>{prev} </a>
          {/* <span> </span> */}
        </Link>
      )
      )}
    </Layout>
  )
}
Index.getInitialProps = async function () {
  const res = await axios.get('https://xkcd.com/info.0.json')

  return {
    comic: res.data
  }
}

// const Index = props => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.shows.map(show => (
//         <li key={show.id}>
//           <Link href='/p/[id]' as={`/p/${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// )

// Index.getInitialProps = async function () {
//   const res = await axios.get('https://xkcd.com/info.0.json')

//   return {
//     : res.data.map(entry => entry.show)
//   }
// }

export default Index

// const PostLink = props => (
//   <li>
//     <Link href='/p/[id]' as={`/p/${props.id}`}>
//       <a>{props.id}</a>
//     </Link>
//   </li>
// )

// export default function Blog () {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink id='hello-nextjs' />
//         <PostLink id='learn-nextjs' />
//         <PostLink id='deploy-nextjs' />
//       </ul>
//     </Layout>
//   )
// }

// export default function Index () {
//   return (
//     <div>
//       <Layout>
//         <h1>Hello friend.</h1>
//         <h3>      -Next.js</h3>
//       </Layout>
//     </div>
//   )
// }
