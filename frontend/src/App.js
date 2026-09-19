import { useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function App() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('Java');
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReview = async () => {
    setLoading(true);
    setReview('');
    try {
      const response = await fetch('http://localhost:8080/api/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, language })
      });
      const data = await response.text();
      setReview(data);
    } catch (error) {
      setReview('Error: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>CodeSentinel</h1>
        <span className="tag">AI Code Review</span>
      </div>

      <div className="card">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{ marginBottom: '12px', padding: '8px', borderRadius: '6px', border: '1px solid #d1d5db' }}
        >
          <option>Java</option>
          <option>Python</option>
          <option>C++</option>
          <option>JavaScript</option>
        </select>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your code here..."
          rows={10}
        />
        <br />
        <button onClick={handleReview} disabled={loading || !code.trim()}>
          {loading ? 'Reviewing...' : 'Review Code'}
        </button>

        <div className="review-box">
          <ReactMarkdown
            components={{
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline ? (
                  <SyntaxHighlighter style={oneDark} language={match ? match[1] : 'java'} PreTag="div">
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>{children}</code>
                );
              }
            }}
          >
            {review}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;