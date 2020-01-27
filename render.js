const Renderer = function () {


    const renderPosts = function (posts) {
        $("#posts").empty()
        let appendhtml = ""
        for (const post of posts) {
            appendhtml = ""
            appendhtml += `<div class="post" data-id=${post.id}>${post.text}`
            for (const comment of post.comments) {
                appendhtml += `<div class="comments" data-id=${comment.id}><span class="delete-comment">X</span>${comment.text}</div>`
            }
            appendhtml += `<div><input type="text" placeholder="Add a comment"><button class="newcomment">comment</button></div><button class="delete">Delete Post</button></div>`
            $("#posts").append(appendhtml)
        }
    }
    return {
        renderPosts: renderPosts
    }
}   