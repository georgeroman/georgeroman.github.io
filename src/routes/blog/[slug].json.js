import getAllPosts from './_posts';

export async function get(req, res, next) {
  const posts = await getAllPosts();

  const lookup = new Map();
  posts.forEach(post => {
    lookup.set(post.slug, JSON.stringify(post));
  });

	const { slug } = req.params;
	if (lookup.has(slug)) {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify({ message: `Not found` }));
	}
}
