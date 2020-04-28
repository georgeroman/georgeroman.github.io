<script context="module">
	export async function preload({ params, query }) {
		return await this.fetch(`blog.json`).then(r => r.json()).then(posts => {
      return { posts: posts.sort((a, b) => a.date - b.date) };
		});
	}
</script>

<script>
	export let posts;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="siimple-content--small">
  <div class="siimple-card siimple--mx-2 siimple--my-2">
    <div class="siimple-card-body">
      <div class="siimple-card-title">Blog</div>
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
</div>
