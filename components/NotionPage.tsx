import * as React from 'react'
import { NotionRenderer } from 'react-notion-x'
// NOTE: You may need to import other components and types here 
// depending on your project's configuration (e.g., from 'notion-client')

// 1. Define the component's expected props inline to fix the TypeScript error.
//    (Based on the props used in the function signature)
interface NotionPageProps {
  recordMap: any
  rootPageId: string
  // Add any other props your original NotionPage component accepts (e.g., previewImages, mapPageUrl, etc.)
}

// 2. Define the maximum recursion depth.
const MAX_RECURSION_DEPTH = 50 

export const NotionPage: React.FC<NotionPageProps> = ({
  recordMap,
  rootPageId,
  // ... (if you have other props, list them here)
}) => {
  // 3. Implement the NotionRenderer with the depth check.
  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={true}
      darkMode={false}
      rootDomain='' // You might need to adjust this to your site config
      
      // *** Recursion Guardrail Implementation ***
      blockRenderer={({ block, level, properties, defaultRenderer }) => {
        // Stop rendering if nesting level is too high (i.e., we are in a loop)
        if (level > MAX_RECURSION_DEPTH) {
          console.warn(`[Notion Block Guardrail] Recursion depth limit (${MAX_RECURSION_DEPTH}) exceeded for block ID: ${block.id}. Stopping render.`)
          return (
            <div 
              style={{ 
                color: 'red', 
                padding: '10px', 
                border: '1px solid red',
                margin: '10px 0',
                background: '#fee'
              }}
            >
              **Error**: Content nesting limit exceeded. This usually indicates an infinite loop in your Notion page content. Please remove the problematic block on the page **Dewan Hafiz Nabil** (`${rootPageId}`).
            </div>
          )
        }
        
        // If depth is acceptable, use the default renderer for this block
        return defaultRenderer({ block, level, properties })
      }}
      // *****************************************
    />
  )
}