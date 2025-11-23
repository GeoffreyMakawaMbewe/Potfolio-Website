import React, { useState, useEffect } from 'react';
import './GitHubStats.css';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';

const GitHubStats = () => {
  const username = 'GeoffreyMakawaMbewe';
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        );
        if (!response.ok) throw new Error('Failed to fetch repositories');
        const data = await response.json();
        setRepos(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="github" className="section github-stats">
      <div className="container">
        <h2 className="section-title">GitHub Activity</h2>
        
        {/* GitHub Contribution Graph */}
        <div className="contribution-graph">
          <img 
            src={`https://ghchart.rshah.org/${username}`}
            alt="GitHub Contribution Graph"
            className="github-chart"
          />
        </div>

        {/* Repository Cards */}
        <div className="repos-grid">
          {loading && <p className="loading-text">Loading repositories...</p>}
          {error && <p className="error-text">Unable to load repositories</p>}
          
          {!loading && !error && repos.map((repo) => (
            <a 
              key={repo.id} 
              href={repo.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="repo-card"
            >
              <div className="repo-header">
                <FaGithub className="repo-icon" />
                <h3 className="repo-name">{repo.name}</h3>
              </div>
              <p className="repo-description">
                {repo.description || 'No description available'}
              </p>
              <div className="repo-stats">
                {repo.language && (
                  <span className="repo-language">
                    <span className="language-dot" style={{ backgroundColor: getLanguageColor(repo.language) }}></span>
                    {repo.language}
                  </span>
                )}
                <span className="repo-stat">
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span className="repo-stat">
                  <FaCodeBranch /> {repo.forks_count}
                </span>
              </div>
            </a>
          ))}
        </div>

        <a 
          href={`https://github.com/${username}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary view-all-btn"
        >
          View All Repositories
        </a>
      </div>
    </section>
  );
};

// Helper function for language colors
const getLanguageColor = (language) => {
  const colors = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Python: '#3572A5',
    Java: '#b07219',
    Kotlin: '#A97BFF',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Go: '#00ADD8',
    Rust: '#dea584',
  };
  return colors[language] || '#8b949e';
};

export default GitHubStats;
