<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div class="siimple-content--small">
  <div class="siimple-card siimple--mx-2 siimple--my-2">
    <div class="siimple-card-body">
      <div class="siimple-card-title">{status}: {error.message}</div>
      <div>
        {#if dev && error.stack}
          <pre>{error.stack}</pre>
        {/if}
      </div>
    </div>
  </div>
</div>
