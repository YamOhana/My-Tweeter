const Tweeter = function () {
    const posts =
        [
            {
                text: "First post!",
                id: "p1",
                comments: [
                    { id: "c1", text: "First comment on first post!" },
                    { id: "c2", text: "Second comment on first post!!" },
                    { id: "c3", text: "Third comment on first post!!!" }
                ]
            },
            {
                text: "I wish i was first",
                id: "p2",
                comments: [
                    { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                    { id: "c5", text: "Yeah, believe in yourself!" },
                    { id: "c6", text: "Haha second place what a joke." }
                ]
            }
        ]


    let postidCounter = 2
    let commentidCounter = 6
    const getPosts = function () {
        return posts
    }
    const addPost = function (newtext) {
        let newpost = {
            text: newtext,
            id: "p" + ++postidCounter,
            comments: []
        }
        posts.push(newpost)

    }
    const removePost = function (removeid) {
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].id === removeid) {
                posts.splice(i, 1)
            }
        }
    }
    const addComment = function (postid, newComment) {

        for (const post of posts) {
            if (post.id === postid) {
                let newcommentobj = { id: "c" + ++commentidCounter, text: newComment }
                post.comments.push(newcommentobj)

            }
        }
    }
    const removeComment = function (postid, commentid) {

        for (const post of posts) {
            if (post.id === postid) {
                for (const commenti in post.comments) {
                    if (post.comments[commenti].id === commentid) {
                        post.comments.splice(commenti, 1)
                    }
                }

            }
        }
    }

    return {
        postidCounter: postidCounter,
        commentidCounter: commentidCounter,
        getPosts: getPosts,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment,
        addPost: addPost
    }
}


const Tweeter = function () {
    const posts =
        [
            {
                text: "First post!",
                id: "p1",
                comments: [
                    { id: "c1", text: "First comment on first post!" },
                    { id: "c2", text: "Second comment on first post!!" },
                    { id: "c3", text: "Third comment on first post!!!" }
                ]
            },
            {
                text: "I wish i was first",
                id: "p2",
                comments: [
                    { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                    { id: "c5", text: "Yeah, believe in yourself!" },
                    { id: "c6", text: "Haha second place what a joke." }
                ]
            }
        ]


    let postidCounter = 2
    let commentidCounter = 6
    const getPosts = function () {
        return posts
    }
    const addPost = function (newtext) {
        let newpost = {
            text: newtext,
            id: "p" + ++postidCounter,
            comments: []
        }
        posts.push(newpost)

    }
    const removePost = function (removeid) {
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].id === removeid) {
                posts.splice(i, 1)
            }
        }
    }
    const addComment = function (postid, newComment) {

        for (const post of posts) {
            if (post.id === postid) {
                let newcommentobj = { id: "c" + ++commentidCounter, text: newComment }
                post.comments.push(newcommentobj)

            }
        }
    }
    const removeComment = function (postid, commentid) {

        for (const post of posts) {
            if (post.id === postid) {
                for (const commenti in post.comments) {
                    if (post.comments[commenti].id === commentid) {
                        post.comments.splice(commenti, 1)
                    }
                }

            }
        }
    }

    return {
        postidCounter: postidCounter,
        commentidCounter: commentidCounter,
        getPosts: getPosts,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment,
        addPost: addPost
    }
}


