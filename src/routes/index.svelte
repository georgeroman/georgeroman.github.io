<script>
  // Make siimple.css visible to rollup
  import '../../node_modules/siimple/dist/siimple.min.css';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="siimple-content--small">
  <div class="siimple-card siimple--mx-2 siimple--my-2">
    <div class="siimple-card-body">
      <div class="siimple-card-title">George's website</div>
      <div>
        <a rel='prefetch' href='about'>About</a>
        <br/>
        <a rel='prefetch' href='blog'>Blog</a>
      </div>
    </div>
  </div>
</div>
