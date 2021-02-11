const express = require('express');
const app = express();

const formidable = require('formidable');

app.all('*', (req, res) => {
    const form = formidable({ multiples: true });

    form.parse(req, (err, fields, files) => {
        if (err) {
          next(err);
          return;
        }

        console.log({
            method: req.method,
            url: req.url,
            params: req.params,
            fields, files
        });
    });

    res.status(500);
    res.send('');
});

app.listen(8080, () => console.log('Server started!'));