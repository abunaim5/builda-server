import { createApi } from "unsplash-js";
import nodeFetch from 'node-fetch';

const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY!,
    fetch: nodeFetch as any,
});

export const getRandomImages = async () => {
    try {
        const result = await unsplash.photos.getRandom({
            count: 20,
            collectionIds: ['317099'],
        });

        if (result.errors) {
            console.error('Unsplash API Error:', result.errors);
            return null;
        };

        return result.response;
    } catch (err) {
        console.error('Unsplash API Error:', err);
        return null;
    }
};