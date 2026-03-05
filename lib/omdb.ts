import { Movie } from '@/types/movie';

const OMDB_API_URL = 'https://www.omdbapi.com/';

export async function fetchMovie(id: string): Promise<Movie | null> {
    const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
    if (!apiKey) {
        throw new Error('OMDb API Key is not configured.');
    }

    try {
        const response = await fetch(`${OMDB_API_URL}?i=${id}&apikey=${apiKey}&plot=full`);
        if (!response.ok) {
            throw new Error(`OMDb API responded with status ${response.status}`);
        }

        const data: Movie = await response.json();

        if (data.Response === 'False') {
            console.error('OMDb API Error:', data.Error);
            return null;
        }

        return data;
    } catch (error) {
        console.error('Error fetching movie:', error);
        return null;
    }
}
