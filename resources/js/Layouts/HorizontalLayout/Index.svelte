<script>
	import { onMount } from 'svelte';
	import Footer from '../Footer.svelte';
	import RightSidebar from '../../../common/RightSidebar.svelte';
	import Header from './Header.svelte';
	import Sidebar from './Sidebar.svelte';

	// Función para alternar la barra lateral derecha
	const toggleRightBar = () => {
		document.body.classList.toggle('right-bar-enabled');
	};

	let closebar = () => {
		toggleRightBar();
	};

	// Lógica de inicialización que se ejecutará solo en el cliente
	onMount(() => {
		document.body.setAttribute('data-layout', 'horizontal');
		document.body.setAttribute('data-sidebar', 'light');
	});
</script>

<div id="layout-wrapper">
	<Header {toggleRightBar} />
	<Sidebar />

	<div class="main-content">
		<div class="page-content">
			<div class="container-fluid">
				<slot />
			</div>
		</div>
		<Footer />
	</div>

	<RightSidebar {closebar} />
</div>

<style>
	@import "../../../assets/scss/bootstrap.scss";
	@import "../../../assets/scss/app.scss";
	@import "../../../assets/scss/icons.scss";
</style>
