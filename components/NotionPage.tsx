// --- START: CUSTOM EMBED COMPONENT FOR GITHUB DARK MODE (CORRECTED) ---
function CustomEmbed({ block, blockId }: { block: any; blockId: string }) {
  const { recordMap, components } = useNotionContext()
  // CRITICAL FIX: Destructure the original Embed component and rename it to DefaultEmbed
  const { Embed: DefaultEmbed } = components!

  // Note: Notion's block structure can be tricky, check both common property paths
  const embedBlock = recordMap.block[blockId]?.value
  const url = embedBlock?.properties?.source?.[0]?.[0] || embedBlock?.format?.embed_link

  // 1. Check if the URL is a GitHub Gist
  if (url && url.includes('gist.github.com')) {
    // Standard Gist URLs often look like: https://gist.github.com/user/id
    const gistUrl = url.endsWith('.js') ? url.slice(0, -3) : url

    return (
      <div 
        key={blockId} 
        className='notion-asset-wrapper'
        data-theme='dark' 
        style={{ width: '100%' }}
      >
        <script src={`${gistUrl}.js`} />
      </div>
    )
  }

  // 2. Fallback to the original default Embed component for all other types (YouTube, Loom, etc.)
  return <DefaultEmbed block={block} blockId={blockId} /> // <-- Calling the original component
}
// --- END: CUSTOM EMBED COMPONENT FOR GITHUB DARK MODE (CORRECTED) ---