const express = require('express');
const { I18n } = require('i18n');
const path = require('path');
const app = express();
const port = 3000;
const i18n = new I18n({
    locales: ['en', 'hi', 'franch'],
    directory: path.join(__dirname, 'translation'),
    defaultLocale: 'hi'
});

app.use(i18n.init);

app.get("/test", async (req, res) => {
    res.send({ id: 1, name: res.__('MESSAGE') });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
