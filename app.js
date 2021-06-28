const express = require('express');
const { PORT } = require('./node3/constants/constants');

const { userRouter } = require('./node3/routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`App listen ${PORT}`);
});
