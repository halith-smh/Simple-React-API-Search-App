# Basic API Fetch App

This is a simple React application that demonstrates fetching data from an API and displaying it in a table. It uses React Query for data fetching and React Bootstrap for UI components.

## Getting Started

To get started with the Basic API Fetch App, follow the steps below:

### Prerequisites

- Node.js (version 12 or above) installed on your machine.
- JSON Server installed globally for running the API.

### Installation

1. Clone the repository:

   - Command: `git clone https://github.com/halith-smh/Simple-React-API-Search-App/.git`

2. Navigate to the project directory:

   - Command: `cd Simple-React-API-Search-App`

3. Install the dependencies:

   - Command: `npm install`

## Usage

1. Start the JSON Server to serve the user data:

   - Command: `json-server --watch src/json/users.json --port 3001`
   - This will start the JSON Server and serve the user data from the `users.json` file located in the `JSON` folder.

2. Start the development server:

   - Command: `npm start`

3. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000).
4. Enter a search term in the search input to filter the displayed data based on the user's name.
5. The table will update dynamically as you type, showing only the rows that match the search term.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.
