module.exports = {
  '**/*.ts?(x)': (filenames) => [
    'tsc -p tsconfig.json --noEmit',
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json|html|css)': (filenames) =>
    `yarn prettier --write ${filenames.join(' ')}`,
}
