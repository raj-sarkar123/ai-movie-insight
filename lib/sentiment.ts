import { Review, SentimentAnalysis } from '@/types/movie';

export function analyzeSentiment(reviews: Review[]): SentimentAnalysis {
    if (reviews.length === 0) {
        return {
            summary: "No reviews available to analyze.",
            sentiment: "Mixed"
        };
    }

    const positiveWords = ['great', 'best', 'masterpiece', 'stunning', 'incredible', 'perfect', 'classic', 'phenomenal', 'enjoyed', 'good', 'amazing', 'loved'];
    const negativeWords = ['confusing', 'slow', 'terrible', 'boring', 'overhyped', 'bad', 'worst', 'criticized'];

    let posCount = 0;
    let negCount = 0;

    let hasVisualPraise = false;
    let hasPacingCriticism = false;

    reviews.forEach(review => {
        const words = review.content.toLowerCase().match(/\b(\w+)\b/g) || [];
        words.forEach(word => {
            if (positiveWords.includes(word)) posCount++;
            if (negativeWords.includes(word)) negCount++;
            if (word === 'visuals' || word === 'visually' || word === 'cinematography') hasVisualPraise = true;
            if (word === 'pacing' || word === 'slow') hasPacingCriticism = true;
        });
    });

    let sentiment: 'Positive' | 'Mixed' | 'Negative' = 'Mixed';
    if (posCount > negCount * 1.5) {
        sentiment = 'Positive';
    } else if (negCount > posCount * 1.5) {
        sentiment = 'Negative';
    }

    let summary = "";
    if (sentiment === 'Positive') {
        summary = "Most viewers highly enjoyed the movie.";
    } else if (sentiment === 'Negative') {
        summary = "The majority of the audience was disappointed by this film.";
    } else {
        summary = "Audience reception is divided.";
    }

    if (hasVisualPraise && hasPacingCriticism) {
        summary = "Audience loves the visuals but some criticize the pacing.";
    } else if (hasVisualPraise) {
        summary += " The visual aspects and cinematography are particularly praised.";
    } else if (hasPacingCriticism) {
        summary += " Several viewers pointed out issues with the pacing.";
    }

    return { summary, sentiment };
}
