import axios from 'axios';

export default async function handler(req, res) {
  const { query } = req.query;
  const apiKey = process.env.NEXT_PUBLIC_WOLFRAM_API_KEY;

  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  try {
    const response = await axios.get('https://www.wolframalpha.com/api/v1/llm-api', {
      params: {
        input: query,
        appid: apiKey,
      },
    });

    res.status(200).json({ result: response.data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
