import * as fs from 'fs';
import * as path from 'path';
import { JSDOM } from 'jsdom';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function generateTypes() {
  const baseUrl = 'https://docs.bankingcircleconnect.com/openapi/';

  // Fetch HTML content
  const response = await fetch(baseUrl);
  const html = await response.text();

  // Parse HTML
  const dom = new JSDOM(html);
  const links = Array.from(dom.window.document.querySelectorAll('a'));
  
  // Extract OpenAPI IDs
  const openApis = links.map(link => {
    const href = link.getAttribute('href');
    return {
      id: href?.split('/').pop(),
      name: link.textContent?.toLowerCase()
        .replace(/[()-]/g, '') // Remove parentheses and hyphens
        .replace(/\s+/g, '_')  // Replace spaces with underscores
        .replace(/\.+/g, '_')  // Replace dots with underscores
        .replace(/_+/g, '_'),  // Replace multiple underscores with single
    };
  }).filter(Boolean);

  // Create types directory if it doesn't exist
  const typesDir = path.join(__dirname, 'types');
  if (!fs.existsSync(typesDir)) {
    fs.mkdirSync(typesDir);
  }

  // Generate types for each OpenAPI spec
  for (const {id, name} of openApis) {
    try {
      const url = `${baseUrl}${id}`;
      await execAsync(`npx openapi-typescript ${url} -o ./types/${name}.ts`);
      console.log(`Generated types for OpenAPI spec ${id} - ${name}`);
    } catch (error) {
      console.error(`Error generating types for ${id} - ${name}:`, error);
    }
  }

  // Generate index file instead of combining
  const indexContent = openApis
    .map(({ name }) => `export * as ${name} from './types/${name}';`)
    .join('\n');

  fs.writeFileSync(path.join(__dirname, 'index.ts'), indexContent);
  console.log('Successfully generated types and index file');
}

generateTypes().catch(console.error);
