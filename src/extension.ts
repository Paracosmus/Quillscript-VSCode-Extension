import * as vscode from 'vscode';
import { MainWebviewViewProvider } from './providers/MainWebviewViewProvider';
import { ScriptsTreeDataProvider } from './providers/ScriptsTreeDataProvider';


export function activate(context: vscode.ExtensionContext) {
	// Get the root path of the workspace.
	const rootPath =
		vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0
			? vscode.workspace.workspaceFolders[0].uri.fsPath
			: "";


	// Register webview view provider.
	// vscode.window.registerWebviewViewProvider('quillscript-scripts', new MainWebviewViewProvider(rootPath));


	// Register tree view provider.
	vscode.window.registerTreeDataProvider('quillscript-outline', new ScriptsTreeDataProvider(rootPath));


	// Register commands.
	let disposable = vscode.commands.registerCommand('quillscript.check', () => {
		vscode.window.showInformationMessage('Quillscript is running');
	});

	context.subscriptions.push(disposable);
}


export function deactivate() {
	// ~
}


/*
{
    "id": "quillscript-scripts",
    "name": "Scripts",
    "type": "webview"
},
*/





// let completionProvider = vscode.languages.registerCompletionItemProvider('quillscript', {
// 	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
// 		return [
// 			new vscode.CompletionItem('quillscript', vscode.CompletionItemKind.Function)
// 		];
// 	}
// });

// vscode.workspace.onDidChangeTextDocument((event) => {});

// vscode.workspace.createFileSystemWatcher("**/*.qsc").onDidChange((event) => {
// 	vscode.window.showInformationMessage(event.toString());
// });

// vscode.workspace.findFiles("**/*.qsc").then((event) => {
// 	vscode.window.showInformationMessage(event.toString());
// });

// vscode.workspace.openTextDocument().then((event) => {});
// vscode.window.showTextDocument().then((event) => {});





// vscode.window.showInformationMessage('Select', 'yes', 'no').then((selection) => {
// 	switch (selection) {
// 		case 'yes': vscode.window.showInformationMessage('You selected yes'); break;
// 		case 'no': vscode.window.showInformationMessage('You selected no');
// 	}
// });

// vscode.window.showQuickPick(['yes', 'no']).then((selection) => {
// 	switch (selection) {
// 		case 'yes': vscode.window.showInformationMessage('You selected yes'); break;
// 		case 'no': vscode.window.showInformationMessage('You selected no');
// 	}
// });

// vscode.window.showInputBox().then((selection) => {
// 	let a: string = selection?.toString() ?? 'null';
// 	vscode.window.showInformationMessage(a);
// });

// let statusItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
// statusItem.text = 'Quillscript';
// statusItem.tooltip = 'Quillscript';
// statusItem.command = 'quillscript.helloWorld';
// statusItem.show();