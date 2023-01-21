import { Layout } from 'layouts/default'
import s from './error.module.scss'

export default function Home() {
  return (
    <Layout theme="light">
      <section className={s.error}>
        <h2 className={s.heading}>404</h2>
      </section>
    </Layout>
  )
}
