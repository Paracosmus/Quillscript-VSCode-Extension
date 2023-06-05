import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export class MainWebviewViewProvider implements vscode.WebviewViewProvider {
    constructor(private workspaceRoot: string | undefined) {}

    resolveWebviewView(webviewView: vscode.WebviewView, context: vscode.WebviewViewResolveContext, token: vscode.CancellationToken)
        : Thenable<void> | void
    {
        // Set the webview's initial options.
        webviewView.webview.options = {
            enableScripts: true,
            enableForms: true,
            enableCommandUris: true
        };

        // Set the webview's initial html content.
        vscode.workspace.openTextDocument(`${__dirname}/../../html/view.html`).then(document => {
            webviewView.webview.html = document.getText();
        });

        // Handle messages from the webview.
        webviewView.webview.onDidReceiveMessage(message => {
            switch (message.command) {
                case "buttonClicked":
                    webviewView.webview.html = webviewView.webview.html.replace("Quillscript", "Check");
                    break;
            }
        });
    }
}