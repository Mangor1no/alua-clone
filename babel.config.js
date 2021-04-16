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
    '@babel/plugin-proposal-class-properties',
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
          pages: './src/pages',
          constants: './src/constants',
          utils: './src/utils',
          routes: './src/routes',
        },
        extensions: ['.js', '.jsx', '.es', '.es6', '.mjs'],
      },
    ],
  ],
  retainLines: true,
};
