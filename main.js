const tweeter = Tweeter()
const renderer = Renderer()




renderer.renderPosts(tweeter.getPosts())




const post = function () {
    tweeter.addPost($("#input").val())
    $("#input").val("")
    renderer.renderPosts(tweeter.getPosts())
}


$("#posts").on("click", ".newcomment", function () {
    let newComment = $(this).closest(".post").find("input")
    let postId = $(this).closest(".post").data().id
    tweeter.addComment(postId, newComment.val())
    newComment.val("")
    renderer.renderPosts(tweeter.getPosts())
})




$("#posts").on("click", ".delete-comment", function () {
    let postId = $(this).closest(".post").data().id
    let commentId = $(this).closest(".comments").data().id
    tweeter.removeComment(postId, commentId)
    renderer.renderPosts(tweeter.getPosts())
})




$("#posts").on("click", ".delete", function () {
    let removeId = $(this).closest(".post").data().id
    tweeter.removePost(removeId)
    renderer.renderPosts(tweeter.getPosts())
})