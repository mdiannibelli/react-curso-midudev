import './App.css'
import TwitterCard from './components/TwitterCard'

function App() {
  const addAr = (user) => `@${user}`

  const users = [
    {
      name:'Marcos Dionel',
      userName:'mdiannibelli',
      url:'Photo-cv.png',
      initialIsFollowing: false
    },
    {
      name:'Marcos Dionel',
      userName:'mdiannibelli',
      url:'Photo-cv.png',
      initialIsFollowing: false
    },
    {
      name:'Marcos Dionel',
      userName:'mdiannibelli',
      url:'Photo-cv.png',
      initialIsFollowing: true
    }
  ]

  return (
    <section style={{display: 'flex', flexDirection: 'column', gap:  '18px'}}>
    {users.map((usuario,index) => {
      const {name ,userName, url, initialIsFollowing} = usuario
      return (
        <TwitterCard
        name={name}
        userName={userName}
        url={url}
        addAr={addAr}
        initialIsFollowing={initialIsFollowing}
        key={index}/>

      )
      })}
    </section>
  )
}

export default App
