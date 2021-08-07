const express = require('express');

const app = express();


app.use('*', (req, res) => {
    console.log('Request from browser...');
    res.send(`<h1>Hello from browser</h1>
    <div>
        <ul>список
            <li>books</li>
            <li>magazins</li>
            <li>toys</li>
            <li>accessories</li>
        </ul>
    </div>`);
})

const listener = app.listen(1122, () => {
    console.log(`Web server run at port ${listener.address().port}`);
})