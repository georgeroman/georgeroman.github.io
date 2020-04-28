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

<div class='content'>
</div>
<div class="siimple-content--small">
  <div class="siimple-card siimple--mx-2 siimple--my-2">
    <div class="siimple-card-body">
      <div class="siimple-card-title">{post.title}</div>
      <div>
        {@html post.html}
      </div>
    </div>
  </div>
</div>
