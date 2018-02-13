"use strict"
let url = require('url');
module.exports.displayLogin = (req, res) => {
    res.render('index', { title: 'Login Page' });
}

module.exports.processLogin = (req, res) => {
    //display with 'res.render()'
    res.render('formPage', { title: 'Feedback Form', user: req.query.user || "" });
}

module.exports.thanks = (req, res) => {
    res.render('thanksPage', { title: 'Thank-you!' });
}

module.exports.procLogin = (req, res) => {
    res.redirect(
        url.format(
            {
                pathname: '/form',
                query: {
                    user:req.body.username
                }
            }
        )


    );


}
