const express = require('express');
const app = express();
var cors = require('cors');

const PORT = 3000;
const gitApiCtrl = require('./controller/github-ctrl');

// app.use(cors({
//     origin: 'http://yourapp.com'
//   }));

app.use(cors());
app.use('/', gitApiCtrl);

app.listen(PORT, () => {
    console.log(`server listening on port +${PORT}`);
});
