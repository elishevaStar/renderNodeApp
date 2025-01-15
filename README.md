# Node.js Render API Integration

This repository contains a simple Node.js application using Express to fetch and display services from a Render account via the Render API.

## Features

- Fetch services list from Render API.
- Display services as JSON response.
- Simple and easy-to-understand code structure.

## Prerequisites

- Node.js installed on your machine.
- An active Render account.
- A Render API Key (refer to [Render API Documentation](https://render.com/docs/api) for generating an API key).

## Setup

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Render API Key:
   ```env
   RENDER_API_KEY=<your_render_api_key>
   ```

4. Start the server:
   ```bash
   node server.js
   ```

5. Access the application at `http://localhost:3000`.

## API Endpoint

- `GET /services`
  - Fetches the list of services from your Render account.
  - Example response:
    ```json
    [
      {
        "id": "srv-123",
        "name": "My Service",
        "type": "web_service"
      }
    ]
    ```

## Deployment on Render

1. Push your code to a GitHub repository.
2. Log in to your Render account.
3. Create a new Web Service:
   - Connect your GitHub repository.
   - Set the runtime to Node.js.
   - Add an environment variable `RENDER_API_KEY` with your API key.
4. Deploy the service and note the public URL.


