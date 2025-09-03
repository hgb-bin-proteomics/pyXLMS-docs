import nextra from 'nextra'
 
// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
})
 
// Export the final Next.js config with Nextra included
export default withNextra({
  // ... Add regular Next.js options here
  // Static Export -> see https://nextjs.org/docs/app/getting-started/deploying#static-export
  //basePath: process.env.PAGES_BASE_PATH,
  //assetPrefix: 'https://hgb-bin-proteomics.github.io/pyXLMS-docs',
  //images: { unoptimized: true },
  //output: 'export',
  //distDir: 'out',
})
