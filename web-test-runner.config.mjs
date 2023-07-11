import { esbuildPlugin } from '@web/dev-server-esbuild'
import { fileURLToPath } from 'url'
import { summaryReporter } from '@web/test-runner'

export default {
  files: ['**/*.spec.ts'],
  nodeResolve: true,
  plugins: [esbuildPlugin({ ts: true, target: 'auto', tsconfig: fileURLToPath(new URL('./tsconfig.json', import.meta.url)) })],
  reporters: [summaryReporter()]
}
