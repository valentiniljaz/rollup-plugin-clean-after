# Rollup.js plugin: Clean after

Clean up dirs after the Rollup build ends

## Installation

### npm

`npm install rollup-plugin-clean-after --save-dev`

### yarn

`yarn add rollup-plugin-clean-after --dev`

## Usage

### Options

| Option    | Type      | Description                                                    | Default |
| --------- | --------- | -------------------------------------------------------------- | ------- |
| `targets` | `Array`   | List of directories which should be cleaned after every build. | `[]`    |
| `silent`  | `Boolean` | Flag to disable logging output to console.                     | `false` |

### Example

To remove the `dist/src` directory after every build add the following to `rollup.config.js`:

```JavaScript
import cleanAfter from 'rollup-plugin-clean-after';

export default {
  entry: './src/index.js',
  output: {
    dest: './dist/bundle.js',
  },
  plugins: [
    cleanAfter({
      targets: [
        './dist/src/'
      ]
    })
  ]
};
```

## License

MIT
