[marketplace-version-image]: https://img.shields.io/visual-studio-marketplace/v/cezaraugusto.vscode-chrome-extension-manifest-json-schema.svg?color=0971fe
[marketplace-installs-image]: https://img.shields.io/visual-studio-marketplace/i/cezaraugusto.vscode-chrome-extension-manifest-json-schema.svg?color=2ecc40
[marketplace-url]: https://marketplace.visualstudio.com/items?itemName=cezaraugusto.vscode-chrome-extension-manifest-json-schema
[action-image]: https://github.com/cezaraugusto/vscode-chrome-extension-manifest-json-schema/actions/workflows/ci.yml/badge.svg?branch=main
[action-url]: https://github.com/cezaraugusto/vscode-chrome-extension-manifest-json-schema/actions

> An extension to finally bring support for Chrome extensions Manifest JSON schemas into Visual Studio Code

# vscode-chrome-extension-manifest-json-schema [![Version][marketplace-version-image]][marketplace-url] [![Installs][marketplace-installs-image]][marketplace-url] [![workflow][action-image]][action-url]

![Screenshot of vscode chrome extension manifest json schema](https://user-images.githubusercontent.com/4672033/153773501-974a48ef-950b-44db-a894-42a6de22279b.png)

This extension binds the Chrome extension JSON schema to your `manifest.json` files.
You get inline validation and autocomplete for manifest fields while editing in Visual Studio Code.

## Installation

### Via `vscode` interface

Click the button in this screen if you're seeing the `vscode` interface.

### Via `vscode` marketplace

Look for `vscode-chrome-extension-manifest-json-schema`.

## Building from source

If you do not want to get this extension from the Marketplace you can get it from source like this:

```shell
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

Start building browser extensions that work across all major platforms, with support for TypeScript, WebAssembly, and next-generation JavaScript. [`Learn more about Extension.js ►►►`](https://extension.js.org)

## License

MIT (c) Cezar Augusto.
