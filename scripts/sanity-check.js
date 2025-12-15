// Sanity connectivity check
import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'

// Load .env.local manually to ensure Node has env vars
try {
  const envPath = path.resolve('.env.local')
  const raw = fs.readFileSync(envPath, 'utf8')
  raw.split(/\n/).forEach(line => {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/)
    if (m) {
      const [, k, v] = m
      if (!process.env[k]) process.env[k] = v.trim()
    }
  })
} catch {}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION
const writeToken = process.env.SANITY_WRITE_TOKEN

async function check(slugs) {
  const client = createClient({ projectId, dataset, apiVersion, token: writeToken, useCdn: false })
  const query = "*[_type == 'blog' && slug.current == $slug][0]"
  for (const slug of slugs) {
    const doc = await client.fetch(query, { slug })
    console.log(slug + ':', doc ? doc._id : null)
  }
}

const slugs = process.argv.slice(2)
check(slugs.length ? slugs : ['test-2','hey-there','new-blog-test-5','test-6']).then(()=>process.exit(0))
