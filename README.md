[action-image]: https://github.com/cezaraugusto/vscode-chrome-extension-manifest-json-schema/actions/workflows/ci.yml/badge.svg?branch=main
[action-url]: https://github.com/cezaraugusto/vscode-chrome-extension-manifest-json-schema/actions

[![workflow][action-image]][action-url]

# vscode-chrome-extension-manifest-json-schema

> An extension to finally bring support for Chrome extensions Manifest JSON schemas into Visual Studio Code

<img alt="screenshot of vscode chrome extension manifest json schema" src="https://user-images.githubusercontent.com/4672033/153773501-974a48ef-950b-44db-a894-42a6de22279b.png">

## Installation

### Via `vscode` interface

Click the button in this screen if you're seeing the `vscode` interface.

### Via `vscode` marketplace

Look for `vscode-chrome-extension-manifest-json-schema`.

## Building from source

If you do not want to get this extension from the Marketplace you can get it from source like this:

```
# Clone
git clone https://github.com/cezaraugusto/vscode-chrome-extension-manifest-json-schema.git

# Navigate
cd vscode-chrome-extension-manifest-json-schema

# Build
vsce package # needs vsce: npm install -g vsce

# Execute
code --install-extension vscode-chrome-extension-manifest-json-schema-$VERSION$.vsix

# Uninstall
code --uninstall-extension vscode-chrome-extension-manifest-json-schema-$VERSION$.vsix
```

## Make it very easy to develop cross-browser extensions

Start building browser extensions that work across all major platforms, with support for TypeScript, WebAssembly, and next-generation JavaScript. [`Learn more ►►►`](https://extension.js.org)

## License

MIT (c) Cezar Augusto.
