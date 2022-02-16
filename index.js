const app = require('express')();
const PORT = 8080;

let InstaAPIUsers = [
	{
		userID: 1, 
		userName: 'krunalTPO', 
		userDP: 'krunal',
		posts:[
			{
				id: 103,
				postAuthor: 'krunalTPO',
				postAuthorDP: 'krunal',
				postImg:'krunal-post3',
				postCaption:'urgent!!!amazon is hiring...apply now.',
				postLikeStatus: false
			},
			{
				id: 102,
				postAuthor: 'krunalTPO',
				postAuthorDP: 'krunal',
				postImg:'krunal-post2',
				postCaption: null,
				postLikeStatus: false
			},
			{
				id: 101,
				postAuthor: 'krunalTPO',
				postAuthorDP: 'krunal',
				postImg:'krunal-post1',
				postCaption: 'first post to the instagram...',
				postLikeStatus: false
			}
		],
		userFollowers: 990,
		userFollowing: 1012
	},
	{
		userID: 2, 
		userName: 'hms_the_firozzz', 
		userDP: 'fiorz',
		posts:[
			{
				id: 202,
				postAuthor: 'hms_the_firozzz',
				postAuthorDP: 'firoz',
				postImg:'firoz-post2',
				postCaption: 'we will conduct workshop for the mongoDB next week',
				postLikeStatus: false
			},
			{
				id: 201,
				postAuthor: 'hms_the_firozzz',
				postAuthorDP: 'firoz',
				postImg:'firoz-post1',
				postCaption: 'dear students, please complete design-engineering team registration asap...',
				postLikeStatus: false
			}
		],
		userFollowers: 243,
		userFollowing: 336
	},
	{
		userID: 3, 
		userName: 'maulikTrivedi', 
		userDP: 'maulik',
		posts:[
			{
				id: 301,
				postAuthor: 'maulikTrivedi',
				postAuthorDP: 'maulik',
				postImg:'maulik-post1',
				postCaption: 'just bought the new iPhone-12 😍',
				postLikeStatus: false
			}
		],
		userFollowers: 481,
		userFollowing: 523
	},
	{
		userID: 4, 
		userName: 'arjun_bala', 
		userDP: 'rajun',
		posts:[
		],
		userFollowers: 660,
		userFollowing: 423
	},
	{
		userID: 5, 
		userName: 'nilesh.net', 
		userDP: 'nilesh',
		posts:[
			{
				id: 501,
				postAuthor: 'nilesh.net',
				postAuthorDP: 'nilesh',
				postImg:'nilesh-post1',
				postCaption: 'if you want 👆 car, consider .net is the only future!',
				postLikeStatus: false
			}
		],
		userFollowers: 779,
		userFollowing: 220
	}
];


app.listen(
	PORT,
	() => console.log('live-1.0')
);


//all-users...
app.get('/users', (req, resp) => {
	resp.status(200).send(InstaAPIUsers)
});


//perticular-user...
app.get('/users/:id', (req, resp) => {
    var id = req.params.id;
    for(let i=0; i<InstaAPIUsers.length; i++){
    	if (InstaAPIUsers[i].userID == id){
    		resp.status(200).send(InstaAPIUsers[i])
    		break;
    	}
    }
});


function getHomeFeedPosts(){
	var allPosts = []
	for(let i = 0; i<InstaAPIUsers.length; i++){
		for(let j = 0; j<InstaAPIUsers[i].posts.length; j++){
			allPosts.push(InstaAPIUsers[i].posts[j]);
		}
	}

	var homeFeedPosts = []
	let postIndex = 0 + parseInt(Math.random() * allPosts.length);
	for(let k=0; k<4; k++){
		while (homeFeedPosts.includes(allPosts[postIndex])){
			postIndex = 0 + parseInt(Math.random() * allPosts.length);
		}
		homeFeedPosts.push(allPosts[postIndex]);
	}

	return homeFeedPosts;
}


//home-feed posts...
app.get('/homeFeedPosts', (req, resp) => {

	let randomPosts = getHomeFeedPosts();
	resp.status(200).send(randomPosts)
});