import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    //JSON

    response.json([
        'Glauber',
        'Gabriela',
        'Gabrielly',
        'Eduarda',
        'João Guilherme',
        'Jambalaya',
        'Bianca'
    ]);
});

app.listen(3333);