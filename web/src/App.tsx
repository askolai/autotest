import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

const API_BASE = 'http://localhost:3001/api';

const App: React.FC = () => {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('');
    setLoading(true);
    try {
      const res = await axios.post(`${API_BASE}/analyze`, { url });
      setStatus(res.data.message);
      // Optionally fetch results after analysis
      fetchResults();
    } catch (err: any) {
      setStatus(err.response?.data?.error || 'Error analyzing URL');
    } finally {
      setLoading(false);
    }
  };

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const fetchResults = async () => {
    try {
      const res = await axios.get(`${API_BASE}/results`);
      setResults(res.data.results || []);
    } catch {
      setResults([]);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>Autonomous Testing Platform</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          type="url"
          placeholder="Enter site URL"
          value={url}
          onChange={handleUrlChange}
          required
          style={{ flex: 1, padding: 8 }}
        />
        <button type="submit" disabled={loading} style={{ padding: '8px 16px' }}>
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>
      </form>
      {status && <div style={{ marginBottom: 16 }}>{status}</div>}
      <h2>Test Results</h2>
      <button onClick={fetchResults} style={{ marginBottom: 8 }}>Refresh Results</button>
      <ul>
        {results.length === 0 && <li>No results yet.</li>}
        {results.map((result: any, i: number) => (
          <li key={i}>{JSON.stringify(result)}</li>
        ))}
      </ul>
    </div>
  );
};

export default App; 