import express from 'express';
import { data as dogFacts } from './dog_facts.js';

const app = express();
const port = 3000;

app.get('/facts', (req, res) => {
    const num = parseInt(req.query.number, 10);
    const facts = num ? dogFacts.slice(0, num) : dogFacts;
    res.json({ facts, success: true });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
