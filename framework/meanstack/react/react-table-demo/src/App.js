import axios from 'axios';
import React, { useMemo, useState, useEffect } from 'react';
import Table from './Table';
import './App.css';

function App() {
  // Custom component to render Genres
  const Genres = ({ values }) => {
    // Loop through the array and create a badge-like component instead of a comma-separated string
    return (
      <>
        {values.map((genre, idx) => {
          return (
            <span key={idx} className="badge">
              {genre}
            </span>
          );
        })}
      </>
    );
  };

  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: 'TV Show',
        // First group columns
        columns: [
          {
            Header: 'Name',
            accessor: 'show.name',
          },
          {
            Header: 'Type',
            accessor: 'show.type',
          },
        ],
      },
      {
        // Second group - Details
        Header: 'Details',
        // Second group columns
        columns: [
          {
            Header: 'Language',
            accessor: 'show.language',
          },
          {
            Header: 'Genre(s)',
            accessor: 'show.genres',
            Cell: ({ cell: { value } }) => <Genres values={value} />,
          },
          {
            Header: 'Runtime',
            accessor: 'show.runtime',
          },
          {
            Header: 'Status',
            accessor: 'show.status',
          },
        ],
      },
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios('https://api.tvmaze.com/search/shows?q=snow');
      setData(result.data);
    })();
  }, []);

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
