// components/NotionPage.tsx

import * as React from 'react'
import { NotionRenderer } from 'react-notion-x'
// You may need to import your actual type for ExtendedRecordMap if it's not 'any'
// import { ExtendedRecordMap } from 'notion-types' 

// 1. Define the component's expected props inline to fix the TypeScript error
interface NotionPageProps {
  // Use 'any' as a quick fix, but 'ExtendedRecordMap' is the correct type
  recordMap: any 
  rootPageId: string
  // Include any other props your component originally accepted, like:
  // previewImages: any
  // mapPageUrl: any
}

// NOTE: We are removing the MAX_RECURSION_DEPTH constant and logic 
// because it was implemented using the non-existent 'blockRenderer' prop.

export const NotionPage: React.FC<NotionPageProps> = ({
  recordMap,
  rootPageId,
  // ... (other props)
}) => {
  // ... (logic)

  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={true}
      darkMode={false}
      // You may need to add or adjust other essential props like rootDomain, mapPageUrl, etc.
      // E.g., rootDomain={process.env.NEXT_PUBLIC_DOMAIN}
      // E.g., mapPageUrl={mapPageUrl} 

      // 🛑 CRITICAL FIX: The entire 'blockRenderer' section is REMOVED
      // as it caused the Type Error and is not a valid prop for NotionRenderer.
    />
  )
}