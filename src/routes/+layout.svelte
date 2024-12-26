<script>
	let { children } = $props();
</script>

<header>
	<nav class="container">
		<ul>
			<li><strong><a href="/">Rick and Morty</a></strong></li>
		</ul>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/settings">Settings</a></li>
      <li><a href="/characters">Characters</a></li>
		</ul>
	</nav>
</header>

<main class="container">
	{@render children()}
</main>

<footer class="container">
	<p>&copy; 2024 Rick and Morty handbook. All rights reserved.</p>
</footer>

<style>
	footer {
		text-align: center;
		margin-top: 2rem;
	}
</style>
