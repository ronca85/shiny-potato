import { useLayoutEffect, useRect } from '@studio-freight/hamo'
import cn from 'clsx'

import { Link } from 'components/link'
import { Layout } from 'layouts/default'
import { useStore } from 'lib/store'
import dynamic from 'next/dynamic'

import s from './privacy-policy.module.scss'

const AppearTitle = dynamic(
  () => import('components/appear-title').then((mod) => mod.AppearTitle),
  { ssr: false }
)

export default function PrivacyPolicy() {
  const [whyRectRef] = useRect()

  const addThreshold = useStore(({ addThreshold }) => addThreshold)

  useLayoutEffect(() => {
    addThreshold({ id: 'top', value: 0 })
  }, [])

  return (
    <Layout theme="light">
      <section className={s.privacyPolicy}>
        <h2 className={s.heading}>Privacy policy</h2>
      </section>
      <section className={s.why}>
        <div className="layout-grid">
          <h2 className={cn(s.sticky, 'h2')}>
            <AppearTitle>Why smooth scroll?</AppearTitle>
          </h2>
          <aside className={s.features} ref={whyRectRef}>
            <div className={s.feature}>
              <p className="p">
                We’ve heard all the reasons to not use smooth scroll. It feels
                hacky. It’s inaccessible. It’s not performant. It’s
                over-engineered. And historically, those were all true. But we
                like to imagine things as they could be, then build them. So,
                why should you use smooth scroll?
              </p>
            </div>
            <div className={s.feature}>
              <h3 className={cn(s.title, 'h4')}>
                Create more immersive interfaces
              </h3>
              <p className="p">
                Unlock the creative potential and impact of your web
                experiences. Smoothing the scroll pulls users into the flow of
                the experience that feels so substantial that they forget
                they’re navigating a web page.
              </p>
            </div>
            <div className={s.feature}>
              <h3 className={cn(s.title, 'h4')}>
                Normalize all your user inputs
              </h3>
              <p className="p">
                Give all your users the same (dope) experience whether they’re
                using trackpads, mouse wheels, or otherwise. With smooth scroll,
                you control how silky, heavy, or responsive the experience
                should be — no matter the input. Magic!
              </p>
            </div>
            <div className={s.feature}>
              <h3 className={cn(s.title, 'h4')}>
                Make your animations flawless
              </h3>
              <p className="p">
                Synchronization with native scroll is not reliable. Those jumps
                and delays with scroll-linked animations are caused by
                multi-threading, where modern browsers run animations/effects
                asynchronously with the scroll. Smooth scroll fixes this.
              </p>
            </div>
          </aside>
        </div>
      </section>
      <section className={s.why}>
        <div className="layout-grid">
          <h2 className={cn(s.sticky, 'h2')}>
            <AppearTitle>Rethinking smooth scroll</AppearTitle>
          </h2>
          <aside className={s.features} ref={whyRectRef}>
            <div className={s.feature}>
              <p className="p">
                We have to give props to libraries like{' '}
                <Link
                  className="contrast semi-bold"
                  href="https://github.com/locomotivemtl/locomotive-scroll"
                >
                  Locomotive Scroll
                </Link>{' '}
                and{' '}
                <Link
                  className="contrast semi-bold"
                  href="https://greensock.com/docs/v3/Plugins/ScrollSmoother"
                >
                  GSAP ScrollSmoother
                </Link>
                . They’re well built and well documented – and we’ve used them a
                lot. But they still have issues that keep them from being
                bulletproof.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  )
}
