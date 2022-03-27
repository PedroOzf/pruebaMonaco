function cambiar(){
  monaco.editor.defineTheme('my-theme',{
    base: 'vs-dark',
    inherit: true,
    rules: [{ background: '062B5B' }],
    colors: {
      'editor.background': '#062B5B'
    }
  });
  monaco.editor.setTheme('my-theme');
}
cambiar();
