import { useState } from 'react'
import './App.css'

function Profile() {
  return (
    <img
      src="https://i.imgur.com/lICfvbD.jpg"
      alt="Aklilu Lemma"
    />
  );
}

function  Gallery(){
  return (
    <section>
      <h1>Amazing Scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Gallery />
      <Gallery />
    </>
  );
}

export default App
