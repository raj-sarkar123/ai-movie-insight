import { Review } from '@/types/movie';

const possibleReviews = [
    "Incredible visuals but the story was a bit confusing.",
    "One of the best movies I've seen in a long time. Masterpiece!",
    "The acting was great, but the pacing felt really slow at times.",
    "Visually stunning, absolutely mind-blowing sequences.",
    "Terrible script, though the cinematography was decent.",
    "A perfect blend of action and deep philosophical themes.",
    "I didn't understand it the first time, but it gets better on re-watches.",
    "Overhyped and boring. I fell asleep halfway through.",
    "An absolute classic that redefined its genre forever.",
    "The soundtrack is phenomenal and really carries the emotion.",
];

const authors = ["John D.", "Alice W.", "Mike R.", "Sarah J.", "Chris P.", "Emma S."];

export function simulateReviews(movieId: string): Review[] {
    // Use movieId to deterministically generate a set of reviews
    const reviewCount = Math.floor(Math.random() * 4) + 3; // 3 to 6 reviews
    const reviews: Review[] = [];

    for (let i = 0; i < reviewCount; i++) {
        const content = possibleReviews[Math.floor(Math.random() * possibleReviews.length)];
        const rating = content.includes("best") || content.includes("classic") || content.includes("phenomenal")
            ? Math.floor(Math.random() * 2) + 9
            : content.includes("Terrible") || content.includes("boring")
                ? Math.floor(Math.random() * 3) + 2
                : Math.floor(Math.random() * 4) + 5;

        reviews.push({
            id: `${movieId}-rev-${i}`,
            author: authors[Math.floor(Math.random() * authors.length)],
            content,
            date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0],
            rating
        });
    }

    return reviews;
}
