import { createApi } from "unsplash-js";

const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY!,
    fetch: fetch
});

export const getRandomImages = async () => {
    const result = await unsplash.photos.getRandom({
        count: 20,
        collectionIds: ['317099']
    });
    console.log(result.response)
    return result.response;
};