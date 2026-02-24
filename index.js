const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'Artist Bible API running', version: '1.0' });
});

// Parse booking email with Claude
app.post('/api/parse-email', async (req, res) => {
  const { emailText, apiKey } = req.body;

  if (!emailText) {
    return res.status(400).json({ error: 'No email text provided' });
  }

  if (!apiKey) {
    return res.status(400).json({ error: 'No API key provided' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-opus-4-6',
        max_tokens: 1024,
        messages: [{
          role: 'user',
          content: `Extract booking offer data from this email. Return ONLY valid JSON, no markdown, no backticks, nothing else.

Fields to extract:
- venue_name (string)
- venue_city (string)
- venue_state (string or null)
- show_date (string like "March 22, 2026" or null)
- guarantee (number in dollars or null)
- door_split (string or null)
- promoter_name (string or null)
- promoter_email (string or null)
- set_time (string or null)
- set_length_minutes (number or null)
- doors_time (string or null)
- capacity (number or null)
- notes (brief string of anything notable)
- confidence ("high", "medium", or "low")
- is_festival (boolean)
- is_support_slot (boolean)
- below_rate_card (boolean — true if guarantee under $2500)

Email:
${emailText}`
        }]
      })
    });

    const data = await response.json();

    if (data.error) {
      return res.status(400).json({ error: data.error.message });
    }

    const parsed = JSON.parse(data.content[0].text);
    res.json({ success: true, data: parsed });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Artist Bible API running on port ${PORT}`);
});
