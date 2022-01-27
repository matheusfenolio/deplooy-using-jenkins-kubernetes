import express from 'express';

const server = express();

server.get('/:name', (req, res) => {
    res.status(200).json({ hello: `${req.params.name ? req.params.name : 'world'}!` });
})

server.listen(3000, () => console.info('Server is up!'))