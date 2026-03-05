# AI Movie Insight Builder

A modern, production-ready web application built with Next.js (App Router), TypeScript, and TailwindCSS. It takes an IMDb ID, fetches movie details via OMDb API, simulates audience reviews, and provides an AI-generated sentiment summary.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **External API**: OMDb API

## Key Features
- **Movie Data**: Implemented via OMDb API.
- **AI Sentiment Analysis**: Keyword-based sentiment logic engine that analyzes mock reviews.
- **Modern UI**: Dark theme, glassmorphism, Framer Motion animations.
- **Production-Ready**: TypeScript, Tailwind, Error boundaries, Skeletons included.
- **Responsive**: Fully optimized for mobile, tablet, and desktop viewports.

## Installation Steps

1. Clone the repository and navigate into the project directory:
   ```bash
   git clone <your-repo-link>
   cd ai-movie-insight-builder
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root of the project to set up the API key:
   ```env
   NEXT_PUBLIC_OMDB_API_KEY=your_omdb_api_key_here
   ```
   *(You can get a free key from [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx))*

4. Start the local development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Deployment Instructions

This project is optimized for deployment on Vercel.

1. **Push to GitHub**: Initialize a Git repository and push your project to GitHub.
2. **Connect to Vercel**: Import the GitHub repository in your Vercel Dashboard.
3. **Environment Variables**: Add your `NEXT_PUBLIC_OMDB_API_KEY` in the Vercel deployment settings.
4. **Deploy**: Click Deploy. Vercel will automatically build and publish your application.

## Usage
Enter an IMDb ID (e.g., `tt0133093` for The Matrix, `tt0068646` for The Godfather) to see the movie poster, details, generated reviews, and AI-driven sentiment analysis.
