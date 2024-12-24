<script>
	import { onMount } from 'svelte';

	let isFullScreenMode = true;

	// Función para alternar el modo de pantalla completa
	function toggleFullscreen() {
		if (
			!document.fullscreenElement &&
			!document.mozFullScreenElement &&
			!document.webkitFullscreenElement
		) {
			isFullScreenMode = false;
			if (document.documentElement.requestFullscreen) {
				document.documentElement.requestFullscreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullscreen) {
				document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
			}
		} else {
			isFullScreenMode = true;
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			}
		}
	}

	// Usar `onMount` para garantizar que el código del navegador se ejecute correctamente
	onMount(() => {
		// Verificar si estamos en modo pantalla completa al cargar el componente
		isFullScreenMode = !!document.fullscreenElement;

		// Escuchar cambios en el estado de pantalla completa
		document.addEventListener('fullscreenchange', () => {
			isFullScreenMode = !!document.fullscreenElement;
		});
	});
</script>

<div class="dropdown d-none d-lg-inline-block ms-1">
	<button on:click={toggleFullscreen} class="btn header-item noti-icon waves-effect" aria-label="Button Dropdown">
		<i class={isFullScreenMode ? 'bx bx-exit-fullscreen fs-22' : 'bx bx-fullscreen fs-22'} ></i>
	</button>
</div>
