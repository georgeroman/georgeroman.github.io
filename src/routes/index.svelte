<script>
  // Make siimple.css visible to rollup
  import '../../node_modules/siimple/dist/siimple.min.css';

	export let posts;
</script>

<script context="module">
	export async function preload({ params, query }) {
		return await this.fetch(`index.json`).then(r => r.json()).then(posts => {
      return { posts: posts.sort((a, b) => a.date - b.date) };
		});
	}
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="siimple-content--small">
  <div class="siimple-navbar">
    <div class="siimple-navbar-title">George Roman</div>
    <div class="siimple--float-right">
      <a rel="prefetch" href="about" class="siimple-navbar-item">About</a>
    </div>
  </div>
  <div class="siimple--mx-4 siimple--my-4">
    <ul>
      {#each posts as post}
        <!-- we're using the non-standard `rel=prefetch` attribute to
             tell Sapper to load the data for the page as soon as
             the user hovers over the link or taps it, instead of
             waiting for the 'click' event -->
        <li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
      {/each}
    </ul>
  </div>
</div>
