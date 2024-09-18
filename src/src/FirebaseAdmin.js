const admin = require('firebase-admin');
const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express();

const serviceAccount = path.resolve(__dirname, 'firebase-service-account.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://dentaltourism-c3482-default-rtdb.firebaseio.com",
});

app.use(cors());

app.get('/list-users', (req, res) => {
    admin.auth().listUsers(1000)
        .then((listUsersResult) => {
            const users = listUsersResult.users.map(userRecord => userRecord.toJSON());
            res.status(200).json(users);
        })
        .catch((error) => {
            console.log('Error listing users:', error);
            res.status(500).send('Error listing users');
        });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
