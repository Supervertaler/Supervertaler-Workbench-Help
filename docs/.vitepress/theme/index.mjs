import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h('div', { class: 'sv-product-banner' }, [
        'You are viewing help for ',
        h('strong', null, 'Supervertaler Workbench'),
        '. Looking for ',
        h('a', {
          href: 'https://supervertaler.gitbook.io/trados',
          target: '_blank',
          rel: 'noopener'
        }, 'Supervertaler for Trados help'),
        '?'
      ])
    })
  }
}
