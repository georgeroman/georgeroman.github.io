<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
  <title>{error.message}</title>
</svelte:head>

<div class="siimple-content--medium">
  <div class="siimple--mx-4 siimple--my-4">
    <div class="siimple-h3">
      {status}: {error.message}
    </div>
  </div>
</div>
