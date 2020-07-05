<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div class="siimple-content--medium">
  <div class="siimple--mx-4 siimple--my-4">
    <div class="siimple-h3">
      {post.title}
    </div>
    <div>
      {@html post.html}
    </div>
  </div>
</div>
