

const createpostValidator = (req, res, next) => {

    // this is for title
    req.check('title', 'Write a title').notEmpty();
    req.check('title', 'Ttile must be 4 to 100 charaters').isLength({
        min: 4,
        max: 100
    });

    // this is for body
    req.check('body', 'Write a body').notEmpty();
    req.check('body', 'body must be 4 to 100 charaters').isLength({
        min: 4,
        max: 150
    });

    //check for errors

    const errors = req.validationErrors();

    // if error show the first one as they happen
    if (errors) {
        const firstError = errors.map(error => error.msg)[0]
        return res.status(400).json({ error: firstError });
    }
    //proceed to next middleware
    next();
}


module.exports = { createpostValidator };