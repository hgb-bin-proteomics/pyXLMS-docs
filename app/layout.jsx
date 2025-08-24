import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
 
export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  title: 'pyXLMS',
  description: 'User guide and documentation for pyXLMS',
  authors: [{ name: 'Micha' }, { name: 'Birklbauer', url: 'https://github.com/michabirklbauer' }],
  creator: 'Micha Birklbauer',
  publisher: 'Micha Birklbauer'
}

const navbar = (
  <Navbar
    logo={
      <>
        <img src="https://github.com/hgb-bin-proteomics/pyXLMS/raw/master/docs/logo/logo.png" width="48" style={{padding: '0px 10px 0px 0px'}}/>
        <h1>pyXLMS</h1>
      </>
    }
    projectLink="https://github.com/hgb-bin-proteomics/pyXLMS"
    // ... Your additional navbar options
  />
)
const footer = <Footer>{new Date().getFullYear()} © Bioinformatics Research Group, FH Oberösterreich Campus Hagenberg</Footer>
 
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head faviconGlyph="🧪"
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/michabirklbauer/pyXLMS-docs/tree/master"
          footer={footer}
          // ... Your additional layout options
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
