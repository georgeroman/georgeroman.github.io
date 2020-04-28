import getAllPosts from './_posts';

export async function get(req, res) {
  const posts = await getAllPosts();
  const contents = JSON.stringify(posts.map((post) => {
    return {
      title: post.title,
      date: Date.parse(post.date),
      slug: post.slug
    };
  }));

	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(contents);
}
