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
  twitter: '',
  github: 'dewanhafiz1999-cell',
  linkedin: '',

  // default notion icon and cover images (optional)
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // =========================================================================
  // 🟢 THEME CHANGES ADDED HERE
  
  // Sets the default color scheme (light or dark)
  defaultTheme: 'light', 
  
  // If set to false, the theme toggle icon in the navigation bar is removed
  isThemeToggleEnabled: false, 
  
  // =========================================================================

  // navigation style
  navigationStyle: 'default'
})