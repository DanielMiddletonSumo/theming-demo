import esbuild from 'esbuild';
import minimist from 'minimist';
import path from 'path';

const argv = minimist(process.argv.slice(2));

const options = {
  entryPoints: ['./src/index.tsx'],
  bundle: true,
  jsxFactory: 'jsx',
  inject: [path.join(path.resolve(), './build/react-shim.mjs')],
  minify: argv.minify,
  sourcemap: 'external',
  target: 'es2015',
  mainFields: ['module', 'main'],
  external: ['@emotion/react', 'react'],
  watch: argv.watch,
};

async function main() {
  await Promise.all([
    esbuild.build({ format: 'cjs', outfile: './dist/index.js', ...options }),
    esbuild.build({
      format: 'esm',
      outfile: './dist/index.module.js',
      ...options,
    }),
  ]);
}

try {
  main();
} catch {
  process.exitCode(1);
}
