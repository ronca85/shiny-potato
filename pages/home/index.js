import { Layout } from 'layouts/default'
import s from './home.module.scss'

export default function Home() {
  return (
    <Layout theme="light">
      <section className={s.home}>
        <h2 className={s.heading}>Homepage</h2>
      </section>
    </Layout>
  )
}
