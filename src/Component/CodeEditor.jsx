import React, { useState, useRef, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import './CodeEditor.css';

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const codeRef = useRef(null);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <div className="code-editor-container">
      <pre className="code-output" aria-hidden="true">
        <code ref={codeRef} className="language-js">
          {code}
        </code>
      </pre>
      <textarea
        className="code-input"
        placeholder='Enter your Code here...'
        value={code}
        onChange={handleCodeChange}
        spellCheck="false"
      />
    </div>
  );
};

export default CodeEditor;
