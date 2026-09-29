const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.json({ 
    app: 'G9PAY',
    owner: 'Umar Hadi Gwani',
    opay: '7012869066',
    status: 'Live - NIN Only No BVN' 
  });
});

app.listen(PORT, () => console.log('G9PAY Live on ' + PORT));
