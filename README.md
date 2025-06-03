# Geco

Geco is a straightforward Visual Studio Code extension that lets you view the source code of selected files in a single editor tab. Right-click files, select **Get Code from Selected Files**, and see their contents instantly, each prefixed with `// FILE: filename` in all caps. Ideal for quick code reviews without opening multiple tabs.

## Features

- **Instant Code Access**: Right-click files in the File Explorer and select **Get Code from Selected Files** to view their contents in one tab.
- **Formatted Output**: Each file’s code is prefixed with `// FILE: filename` (in all caps) for clear separation.
- **Multi-File Support**: Handles one or multiple text-readable files of any type.
- **Native Integration**: Fits seamlessly into VS Code’s context menu for a smooth experience.

## Why Geco?

Geco eliminates the need to open files one by one. Whether you’re reviewing, debugging, or comparing code, it delivers a clean, organized view of your files’ contents in one place.

## Installation

Available soon on the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=AbdoDev.geco) (link will be updated after publishing).

## Usage

1. In VS Code’s File Explorer, select one or more files.
2. Right-click and choose **Get Code from Selected Files**.
3. View the contents in a new tab, formatted as:

   ```
   // FILE: index.js
   [code]

   // FILE: server.js
   [code]
   ```

## Contributing

Want to improve Geco? Submit issues or pull requests to the [GitHub repository](https://github.com/AbdoDev/geco).

## License

[MIT License](LICENSE.md).
