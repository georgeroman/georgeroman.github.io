const fs = require('fs');
const jsyaml = require('js-yaml');
const MarkdownIt = require('markdown-it');

// Cache posts
const posts = [];

async function processPosts(path) {
  const dir = await fs.promises.opendir(path);
  for await (const dirEnt of dir) {
    const dirEntPath = `${path}/${dirEnt.name}`;
    if (dirEnt.isDirectory()) {
      await processPosts(dirEntPath);
    } else if (dirEnt.isFile()) {
      const post = {};
      const md = new MarkdownIt()
        .use(require('markdown-it-front-matter'), (fm) => {
          const metadata = jsyaml.load(fm);
          post.title = metadata.title;
          post.date = metadata.date;
          post.slug = metadata.title.split(' ')
            .filter((word) => word.match(/^[a-zA-Z0-9]+$/))
            .map((word) => word.toLowerCase())
            .join('-')
        });
      post.html = md.render(fs.readFileSync(dirEntPath, 'utf-8'));
      posts.push(post);
    }
  }
  return posts;
}

export default async function() {
  if (posts.length === 0) {
    await processPosts('src/routes/blog/_posts');
  }
  return posts;
};
