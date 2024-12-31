import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemas } from './schemas'
import { media } from 'sanity-plugin-media'

import { newTheme } from './theme'
import { structure } from './layout/structure'

export default defineConfig({
  name: 'StudioVArchitecture',
  title: 'studioVArchitecture',

  projectId: 'oxmw2iak',
  dataset: 'production',

  plugins: [structureTool({ structure }), media(), visionTool()],

  schema: {
    types: schemas,
  },
  theme: newTheme
})
