const http = new easyHTTP;

// Get Posts

// http.get('http://jsonplaceholder.typicode.com/posts', function(err, posts) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

// Create Data
const data = {
    title: 'Custom Title Post',
    body: 'Este é um corpo de texto personalizado'
}

// Create Post
// http.post('http://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// })

// Update Post
// http.put('http://jsonplaceholder.typicode.com/posts/1', data, function(err,post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// Delete Posts
http.delete('http://jsonplaceholder.typicode.com/posts/1', function(err, response) {
    if(err) {
        console.log(err);
    } else {
        console.log(response);
    }
});