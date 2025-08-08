import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <img src="https://github.com/hgb-bin-proteomics/pyXLMS/raw/master/docs/logo/logo.png" width="48" style={{padding: '0px 10px 0px 0px'}}/>
      <h1>pyXLMS</h1>
    </>
  ),
  project: {
    link: 'https://github.com/hgb-bin-proteomics/pyXLMS',
  },
  docsRepositoryBase: 'https://github.com/hgb-bin-proteomics/pyXLMS-docs',
  footer: {
    text: '2025 © Bioinformatics Research Group, FH Oberösterreich Campus Hagenberg',
  },
}

export default config
