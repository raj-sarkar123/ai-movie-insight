import { NextResponse } from 'next/server';
import { fetchMovie } from '@/lib/omdb';
import { simulateReviews } from '@/services/reviewService';
import { analyzeSentiment } from '@/lib/sentiment';
import { MovieInsight } from '@/types/movie';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id || typeof id !== 'string') {
        return NextResponse.json({ error: 'Movie ID is required' }, { status: 400 });
    }

    try {
        const movie = await fetchMovie(id);

        if (!movie) {
            return NextResponse.json({ error: 'Movie not found or API error' }, { status: 404 });
        }

        const reviews = simulateReviews(id);
        const sentimentInsight = analyzeSentiment(reviews);

        const result: MovieInsight = {
            movie,
            reviews,
            sentimentInsight
        };

        return NextResponse.json(result);
    } catch (error) {
        console.error('API /analyze error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
