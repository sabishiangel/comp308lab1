module.exports.displayLogin = (req,res) => {
    res.render('index', { title: 'Login Page' });
}

module.exports.processLogin = (req,res) => {
    //display with 'res.render()'
    res.render('formPage', { title: 'Feedback Form', user: req.body.username || "" });
}

module.exports.thanks = (req,res) => {
    res.render('thanksPage', { title: 'Thank-you!' });
}
