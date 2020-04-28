const ghpages = require('gh-pages');

ghpages.publish(
  '__sapper__/export',
  {
    branch: 'master',
    repo: 'https://github.com/georgeroman/georgeroman.github.io.git'
  },
  () => {
    console.log('Deployment complete!');
  }
);
