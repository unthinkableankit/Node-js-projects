const Post = require('../models/post');


const getPost = (req, res) => {
    // res.json({
    //     post: [{ title: 'first post' }, { title: 'second post' }]
    // })

    const posts = Post.find().select("_id title body")    // select("_id title body") used to select which we want to database
        .then((posts) => {
            res.status(200).json({ posts })
        })
        .catch(err => console.log(err));

}

const createPost = (req, res) => {
    const post = new Post(req.body);
    console.log('CREATING POST :', post);
    // post.save((error, result) => {
    //     if (error) {
    //         return res.status(400).json({ error: 'there is some error' })
    //     }
    //     res.status(200).json({ post: result })
    // })

    post.save()
        .then(result => {
            res.status(200).json({ post: result })
        })

}
module.exports = { getPost, createPost }