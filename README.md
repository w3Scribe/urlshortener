  # URL Shortener

  This project is a URL shortener service that converts long URLs into short, manageable links that are easier to share and manage. It's built with Node.js, Express, and uses Prisma with a SQL database for data persistence.

  ## Installation

  To set up this project locally, follow these steps:

  1. Clone the repository: git clone https://github.com/w3Scribe/urlshortener.git
  2. Change into the project directory: cd urlshortener
  3. Install the dependencies: npm install
  
  ## Development
  
  To run the project in development mode with live reloading:
  
  1. Start the development server: npm run dev
   
  2. The server will start, and Tailwind CSS will be watched for changes. Open your browser and visit `http://localhost:3000` to view the application.
  
  ## Building for Production
  
  To build the project for production:
  
  1. Clean the `dist` directory and build the project: npm run build
  2. Start the production server: npm start
  
  ## Project Structure
  
  The project has the following structure:
  
  - `.env`: Environment variables configuration.
  - `src/`: Source files including Express server setup, routes, controllers, and views.
  - `prisma/`: Prisma schema and migrations for database management.
  - `dist/`: Compiled JavaScript files and assets for production.
  - `views/`: EJS templates and Tailwind CSS files for the frontend.
  
  ## Contributing
  
  Contributions are welcome! To contribute:
  
  1. Fork the repository.
  2. Create a new branch for your feature: git checkout -b feature-name
  3. Commit your changes: git commit -am 'Add new feature'
  4. Push to your branch: git push origin feature-name
  5. Submit a pull request.
   
  ## License

  This project is open source and available under the [MIT License](LICENSE).