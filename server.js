const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getIndexById, getRandomElement, createElement, updateElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req,res,next) => {
    const quote = getRandomElement(quotes);
    res.status(200).send({quote});
})

app.get('/api/quotes', (req,res,next) => {
    
    if (Object.keys(req.query).length === 0) {
        res.status(200).send({quotes});
    } else if (req.query.person) {
        res.status(200).send({
            quotes: quotes.filter(quote => quote.person === req.query.person)
        });
    }  
})

app.post('/api/quotes', (req,res,next) => {
    if (req.query.quote && req.query.person) {
        const quote = createElement('quote', req.query);
        quotes.push(quote);
        res.status(201).send({quote});
    }
})

app.put('/api/quotes/:id', (req,res,next) => {
    const index = getIndexById(req.params.id, quotes);
    if (index !== -1) {
        updateElement(req.params.id, req.query, quotes);
        res.status(201).send({quote: quotes[index]});
    } else {
        res.status(404).send();
    }
})

app.delete('/api/quotes/:id', (req,res,next) => {
    const index = getIndexById(req.params.id, quotes);
    if (index !== -1) {
        quotes.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send();
    }
})

app.listen(PORT);