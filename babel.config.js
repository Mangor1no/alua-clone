module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
        alias: {
          navigator: './src/navigator',
          assets: './src/assets',
          data: './src/data',
          images: './src/images',
          components: './src/components',
          constants: './src/constants',
          utils: './src/utils',
        },
        extensions: ['.js', '.jsx', '.es', '.es6', '.mjs'],
      },
    ],
  ],
  retainLines: true,
};
