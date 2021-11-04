import esbuild from 'esbuild';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const options = {
  entryPoints: ['./src/index.ts'],
  bundle: true,
  minify: argv.minify,
  sourcemap: 'external',
  target: 'es2015',
  mainFields: ['module', 'main'],
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
