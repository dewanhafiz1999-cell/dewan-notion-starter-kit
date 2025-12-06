// 1. Core styles required for Notion blocks and default theme
import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-coy.css'

// 2. Custom styles for layout fix (must be present for mobile stability)
import 'styles/global.css'
import 'styles/notion.css'
import 'styles/prism-theme.css' 
// 💡 The Dark Mode logic (BodyClassName/useDarkMode) has been removed from this file.

import type { AppProps } from 'next/app'
import * as Fathom from 'fathom-client'
import { useRouter } from 'next/router'
import { posthog } from 'posthog-js'
import * as React from 'react'

import { bootstrap } from '@/lib/bootstrap-client'
import {
  fathomConfig,
  fathomId,
  isServer,
  posthogConfig,
  posthogId
} from '@/lib/config'

if (!isServer) {
  bootstrap()
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  React.useEffect(() => {
    function onRouteChangeComplete() {
      if (fathomId) {
        Fathom.trackPageview()
      }

      if (posthogId) {
        posthog.capture('$pageview')
      }
    }

    if (fathomId) {
      Fathom.load(fathomId, fathomConfig)
    }

    if (posthogId) {
      posthog.init(posthogId, posthogConfig)
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [router.events])

  // The site component is now rendered directly, locking the theme to light.
  return <Component {...pageProps} />
}