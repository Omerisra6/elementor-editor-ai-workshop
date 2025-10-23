# Elementor Editor AI Workshop

A Next.js chat application with AI integration using the Vercel AI SDK and OpenAI.

## Features

- Real-time chat interface with streaming responses
- AI-powered conversations using OpenAI GPT-4o
- Image generation capabilities
- Modern UI with Tailwind CSS
- TypeScript support

## Setup

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Environment Variables

- `OPENAI_API_KEY`: Your OpenAI API key (required)
- `OPENAI_MODEL`: Optional model override (defaults to gpt-4o)

## Tech Stack

- **Framework:** Next.js 16
- **AI SDK:** Vercel AI SDK v5
- **Language Model:** OpenAI GPT-4o
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **TypeScript:** Full type safety

## Project Structure

- `lib/ai-sdk/` - AI SDK configuration and functions
- `lib/api/` - API layer for chat functionality
- `components/` - React components for the chat interface
- `app/` - Next.js app router pages

## Deployment

This project is configured for deployment on Vercel with automatic environment variable configuration.