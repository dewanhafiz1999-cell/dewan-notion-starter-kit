// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-coy.css'
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'
// global styles shared across the entire site (for responsive fixes)
import 'styles/global.css'
// global style overrides for notion (THIS IS THE KEY FIX)
import 'styles/notion.css' 
// this might be better for dark mode
// import 'prismjs/themes/prism-okaidia.css'
// global style overrides for prism theme (optional)
import 'styles/prism-theme.css' 

import type { AppProps } from 'next/app'
// ... rest of file