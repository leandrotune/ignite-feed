import { Header } from './components/Header'
import { Post } from './Post'
import { Sidebar } from './components/Sidebar'
import './global.css'

import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Leandro Antunes"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure error inventore eveniet, cupiditate illo sequi impedit facere nemo modi accusamus officia aut deleniti voluptatum quaerat sint voluptatem assumenda culpa aliquam.
            )"
          />

          <Post
            author="Leandro Antunes"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure error inventore eveniet, cupiditate illo sequi impedit facere nemo modi accusamus officia aut deleniti voluptatum quaerat sint voluptatem assumenda culpa aliquam.
            )"
          />
        </main>
      </div>
    </>
  )
}

