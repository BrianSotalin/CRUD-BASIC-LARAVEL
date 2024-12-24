<script>
	import { page } from '@inertiajs/svelte';
	import { onMount } from 'svelte';
	import { OverlayScrollbars } from 'overlayscrollbars';
	
	import 'overlayscrollbars/overlayscrollbars.css';

	// Datos del menú
	import data from "../../../common/data/Layoutmenudata";
	import { Link } from '@inertiajs/svelte';

	let activeItem = null;

	// Función para alternar la activación de un menú
	function toggleMenu(item) {
		activeItem = activeItem === item ? null : item;
	}

	// Función para eliminar clases activas
	const removeActiveDropdown = () => {
		document.querySelectorAll(".vertical-menu .has-arrow").forEach((menu) => {
			if (menu.nextElementSibling) {
				menu.nextElementSibling.classList.add("mm-collapse");
				menu.nextElementSibling.classList.remove("mm-show");
				menu.classList.remove("mm-active");
			}
		});

		document.querySelectorAll(".sub-menu a").forEach((submenu) => {
			submenu.classList.remove("active");
			if (submenu.parentElement) {
				submenu.parentElement.classList.remove("mm-active");
			}
		});
	};

	// Inicialización de OverlayScrollbars y lógica al montar
	onMount(() => {
		const menuElement = document.querySelector("#vertical-menu");
		OverlayScrollbars(menuElement, {
			scrollbars: {
				visibility: "auto",
				autoHide: "move",
				autoHideDelay: 300,
			},
			paddingAbsolute: true,
			className: "os-theme-light",
		});

		// Activar ítem actual al cargar
		const urlPath = location.pathname.replace(/\/(create|edit|[0-9]+).*$/, "");
		const selector = "." + CSS.escape(urlPath) + "s";
		const elemento = document.querySelector(selector);
		if (elemento) {
			const clases = elemento.classList;
			const padre = clases[1].replace("padre-", "");
			const padreSelector = "." + CSS.escape(padre);
			document.querySelector(padreSelector)?.click();
			elemento.classList.add("active");
		}
	});
</script>

<div class="vertical-menu">
	<div class="h-100" id="vertical-menu">
		<div id="sidebar-menu">
			<ul class="metismenu list-unstyled" id="side-menu">
				{#each data.Navdata as item}
					{#if item.isHeader}
						<li class="menu-title" key="t-menu">{item.label}</li>
					{:else if item.subMenu}
						<li class="{activeItem === item ? 'mm-active' : ''}">
							<a
								href={null}
								class="has-arrow waves-effect"
								on:click={() => toggleMenu(item)}
							>
								<i class={item.icon}></i>
								<span>{item.label}</span>
								<span class="arrow-right {activeItem === item ? 'open' : ''}"></span>
							</a>
							<ul class="sub-menu {activeItem === item ? 'mm-show' : 'mm-collapse'}">
								{#each item.subMenu as subMenu}
									{#if subMenu.isChildItem}
										<li>
											<Link href="#" class="has-arrow waves-effect">
												<span>{subMenu.label}</span>
											</Link>
											<ul class="sub-menu mm-collapse">
												{#each subMenu.childItems as childItem}
													<li>
														<Link href={childItem.link}>{childItem.label}</Link>
													</li>
												{/each}
											</ul>
										</li>
									{:else}
										<li>
											<Link href={subMenu.link}>{subMenu.label}</Link>
										</li>
									{/if}
								{/each}
							</ul>
						</li>
					{:else}
						<li>
							<Link href={item.link} class="waves-effect">
								<i class={item.icon}></i>
								<span>{item.label}</span>
							</Link>
						</li>
					{/if}
				{/each}
			</ul>
		</div>
	</div>
</div>
