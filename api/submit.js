// Vercel serverless proxy for Google Sheets form submission
// Keeps the Google Apps Script URL hidden from the client

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbyN9ZcIIu4OV1SUQCTG2EtiIxs014awwWkEXl1WzBL0YbZ2TH2_v6YjA-balWPtO6Of/exec';

export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body),
        });

        const text = await response.text();
        res.status(200).json({ success: true, message: text });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Submission failed. Please try again.' });
    }
}
