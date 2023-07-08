import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';


export class ScriptsTreeDataProvider implements vscode.TreeDataProvider<Script> {
    private _onDidChangeTreeData: vscode.EventEmitter<Script | undefined | null | void> = new vscode.EventEmitter<Script | undefined | null | void>();
    readonly onDidChangeTreeData: vscode.Event<Script | undefined | null | void> = this._onDidChangeTreeData.event;

    constructor(private workspaceRoot: string) {
        vscode.commands.registerCommand('quillscript.treeViewItemClick', item => this.onClicked(item));
    }

    getTreeItem(element: Script): vscode.TreeItem {
        // Register command for clicking on tree view item.
        let title = element.label ? element.label.toString() : "";
        let result = new vscode.TreeItem(title, element.collapsibleState);
        result.command = { command: 'quillscript.treeViewItemClick', title : title, arguments: [element] };

        return result;
    }

    getChildren(element?: Script): Thenable<Script[]> {
        return Promise.resolve(this.getScriptsInFolder().map((scriptPath) => {
            return new Script(path.parse(scriptPath).name, vscode.TreeItemCollapsibleState.None, scriptPath);
        }));
    }

    /**
     * Returns all scripts in the workspace.
     */
    private getScriptsInFolder(): Array<string> {
        const files: string[] = [];

        function traverseDirectory(dirPath: string) {
            fs.readdirSync(dirPath).forEach((file) => {
                const filePath = path.join(dirPath, file);
                const stat = fs.statSync(filePath);

                if (stat.isFile() && path.extname(file) === '.qsc') {
                    files.push(filePath);
                } else if (stat.isDirectory()) {
                    traverseDirectory(filePath);
                }
            });
        } traverseDirectory(this.workspaceRoot);

        return files;
    }

    private onClicked(item: Script) {
        vscode.workspace.openTextDocument(item.filePath).then((document: vscode.TextDocument) => {
            return vscode.window.showTextDocument(document, { preview: true });
        });
    }
}


/**
 * Represents a script in the tree view.
 */
class Script extends vscode.TreeItem {
    constructor(
        public readonly label: string,
        public readonly collapsibleState: vscode.TreeItemCollapsibleState,
        public readonly filePath: string
    ) {
        super(label, collapsibleState);
    }
}