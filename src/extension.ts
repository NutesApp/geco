import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "Geco.getCode",
    async (uri: vscode.Uri, uris: vscode.Uri[] | undefined) => {
      try {
        // Handle both single and multiple file selections
        const selectedUris: vscode.Uri[] =
          uris && uris.length > 0 ? uris : [uri];

        if (!selectedUris || selectedUris.length === 0) {
          vscode.window.showInformationMessage("No files selected.");
          return;
        }

        let outputContent = "";
        for (const fileUri of selectedUris) {
          try {
            // Read file content
            const fileContent = await vscode.workspace.fs.readFile(fileUri);
            const fileText = fileContent.toString();
            const fileName = fileUri.path.split("/").pop() || "Unknown File";

            // Add file name as header and content
            outputContent += `// File: ${fileName}\n${fileText}\n\n`;
          } catch (error: any) {
            vscode.window.showErrorMessage(
              `Error reading file ${fileUri.path}: ${error.message}`
            );
          }
        }

        if (outputContent) {
          // Create a new untitled document with the combined content
          const document = await vscode.workspace.openTextDocument({
            content: outputContent,
            language: "markdown", // Default to plaintext; VS Code infers syntax if possible
          });
          await vscode.window.showTextDocument(document);
        } else {
          vscode.window.showInformationMessage("No content to display.");
        }
      } catch (error: any) {
        vscode.window.showErrorMessage(
          `Error in Geco extension: ${error.message}`
        );
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
