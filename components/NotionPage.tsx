// components/NotionPage.tsx or wherever you render the blocks

import * as React from 'react'
import { NotionRenderer } from 'react-notion-x'

// ... (other imports)

// Define a maximum recursion depth to prevent stack overflow
const MAX_RECURSION_DEPTH = 50 

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
      // ... other props
      
      // *** MODIFICATION HERE ***
      // Override the default block renderer to implement the depth check
      // This function is called recursively for every block.
      blockRenderer={({ block, level, properties, defaultRenderer }) => {
        // If the nesting level exceeds the limit, stop rendering this branch.
        if (level > MAX_RECURSION_DEPTH) {
          console.warn(`[Notion Block Guardrail] Maximum recursion depth (${MAX_RECURSION_DEPTH}) exceeded for block ID: ${block.id}. Stopping rendering to prevent crash.`)
          return (
            <div style={{ color: 'red', padding: '10px', border: '1px solid red' }}>
              **Error**: Content nesting limit exceeded (potential infinite loop in Notion data).
            </div>
          )
        }
        
        // If the depth is fine, use the default renderer for this block
        return defaultRenderer({ block, level, properties })
      }}
      // *************************
    />
  )
}