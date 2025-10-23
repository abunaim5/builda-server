import axios from "axios"

export const AiService = {
    generateImage: async (prompt: string) => {
        const res = await axios.post(
            'https://router.huggingface.co/nscale/v1/images/generations',
            { inputs: prompt },
            { headers: { Authorization: `Bearer ${process.env.HF_API_KEY}` } }
        );
        return res.data || 'No output';
    }
};