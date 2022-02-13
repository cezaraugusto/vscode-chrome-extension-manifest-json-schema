[action-image]: https://github.com/cezaraugusto/vscode-chrome-extesion-manifest-json-schema/workflows/CI/badge.svg
[action-url]: https://github.com/cezaraugusto/vscode-chrome-extesion-manifest-json-schema/actions

# vscode-chrome-extesion-manifest-json-schema [![workflow][action-image]][action-url]

> An extension to finally bring support for Chrome Extesions Manifest JSON schemas into Visual Studio Code

<img alt="screenshot of vscode chrome extesion manifest json schema" src="https://user-images.githubusercontent.com/4672033/153773501-974a48ef-950b-44db-a894-42a6de22279b.png">

## Installation

### Via `vscode` interface

Click the button in this screen if you're seeing the `vscode` interface.

### Via `vscode` marketplace

Look for `vscode-chrome-extesion-manifest-json-schema`.

## Building from source

If you do not want to get this extension from the Marketplace you can get it from source like this:

```
# Clone
git clone https://github.com/cezaraugusto/vscode-chrome-extesion-manifest-json-schema.git

# Navigate
cd vscode-chrome-extesion-manifest-json-schema

# Build
vsce package # needs vsce: npm install -g vsce

# Execute
code --install-extension vscode-chrome-extesion-manifest-json-schema-$VERSION$.vsix

# Uninstall
code --uninstall-extension vscode-chrome-extesion-manifest-json-schema-$VERSION$.vsix
```

## License

MIT (c) Cezar Augusto.
