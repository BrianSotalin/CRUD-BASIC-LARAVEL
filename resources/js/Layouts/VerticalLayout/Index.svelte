<script>
	import { onMount } from 'svelte';
	import RightSidebar from '../../../common/RightSidebar.svelte';
	import Header from './Header.svelte';
	import Sidebar from './Sidebar.svelte';
	import Footer from '../Footer.svelte';

	const toggleRightBar = () => {
		if (document.body.classList.contains('right-bar-enabled')) {
			document.body.classList.remove('right-bar-enabled');
		} else {
			document.body.classList.add('right-bar-enabled');
		}
	};

	let closebar = () => {
		toggleRightBar();
	};

	onMount(() => {
		// Se ejecutará solo en el navegador
		document.body.setAttribute('data-layout', 'vertical');
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