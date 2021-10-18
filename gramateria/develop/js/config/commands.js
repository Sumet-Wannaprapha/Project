export default {
    defaults: [
        {
            id: 'undo',
            run: (editor, sender) => {
                sender.set('active', false);
                editor.UndoManager.undo(true);
            }
        }, {
            id: 'redo',
            run: (editor, sender) => {
                sender.set('active', false);
                editor.UndoManager.redo(true);
            }
        }, {
            id: 'clean-all',
            run: (editor, sender) => {
                sender.set('active', false);
                if (confirm('แน่ใจนะว่าต้องการลบทังหมด?')) {
                    editor.runCommand('core:canvas-clear');
                }
            }
        }],
}