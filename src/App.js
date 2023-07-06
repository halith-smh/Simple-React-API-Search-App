import './App.css';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import TableStruct from "./components/TableStruct";

const query = new QueryClient();
function App() {
  return (

    <div className="App">
      <QueryClientProvider client={query}>
        <TableStruct />
      </QueryClientProvider>
    </div>

  );
}

export default App;
