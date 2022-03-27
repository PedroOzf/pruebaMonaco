
function cambiar(){
  monaco.editor.defineTheme('my-theme',{
    base: 'vs',
    inherit: true,
    rules: [{ background: '0B4592' }],
    colors: {
      'editor.foreground': '#000000',
      'editor.background': '#0B4592',
      'editorCursor.foreground': '#8B0000',
      'editor.lineHighlightBackground': '#0000FF20',
      'editorLineNumber.foreground': '#008800',
      'editor.selectionBackground': '#88000030',
      'editor.inactiveSelectionBackground': '#88000015'
    }
  });
  monaco.editor.setTheme('my-theme');
}
