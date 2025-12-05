import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '7fa50bcefad34a29af1feae083c179f6',

  // if you want to restrict pages to a single notion workspace (optional)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Dewan Hafiz Nabil',
  domain: 'dewanhafiznabil.com',
  author: 'Dewan Hafiz Nabil',

  // open graph metadata (optional)
  description: 'Portfolio and personal website',

  // social usernames (optional)
  twitter: undefined,
  github: undefined,
  linkedin: undefined,

  // default notion icon and cover images (optional)
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,
 
  // 🟢 FINAL THEME FIX: Use theme options directly
  // 'system' enables automatic detection, which includes the toggle.
  defaultTheme: 'system', 

  // navigation style
  navigationStyle: 'default'
})