const esbuild = require('esbuild')
const path = require('path')
const alias = require('esbuild-plugin-alias')

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    platform: 'node',
    target: 'node18',
    outdir: 'dist',
    tsconfig: 'tsconfig.json',
    sourcemap: true,
    plugins: [
      alias({
        '@configs': path.resolve(__dirname, 'src/configs'),
        '@constants': path.resolve(__dirname, 'src/constants'),
        '@controllers': path.resolve(__dirname, 'src/controllers'),
        '@middlewares': path.resolve(__dirname, 'src/middlewares'),
        '@routes': path.resolve(__dirname, 'src/routes'),
        '@services': path.resolve(__dirname, 'src/services'),
        '@customTypes': path.resolve(__dirname, 'src/types'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      }),
    ],
  })
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
