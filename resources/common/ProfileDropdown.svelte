<script>
	import { onMount } from 'svelte';
	import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'sveltestrap';
	import avatar1 from '../assets/images/users/avatar-1.jpg';

	let username = 'User';

	// Carga inicial del estado del usuario
	onMount(() => {
		const authUser = localStorage.getItem('authUser');
		if (authUser) {
			// Suponiendo que `authUser` tiene el nombre del usuario almacenado
			username = JSON.parse(authUser).name || 'User';
		}
	});

	// Función de cierre de sesión
	function logout() {
		localStorage.removeItem('authUser');
		window.location.href = '/auth/login'; // Redirección manual
	}
</script>

<Dropdown class="d-inline-block">
	<DropdownToggle
		tag="a"
		color=""
		class="btn header-item waves-effect"
		id="page-header-user-dropdown"
	>
		<img class="rounded-circle header-profile-user" src={avatar1} alt="Header Avatar" />
		<span class="d-none d-xl-inline-block ms-1">{username}</span>
		<i class="mdi mdi-chevron-down d-none d-xl-inline-block" ></i>
	</DropdownToggle>
	<DropdownMenu end>
		<!-- Perfil -->
		<DropdownItem href="#">
			<i class="bx bx-user font-size-16 align-middle me-1" ></i>
			<span>Profile</span>
		</DropdownItem>
		<!-- Mi Billetera -->
		<DropdownItem href="#">
			<i class="bx bx-wallet font-size-16 align-middle me-1" ></i>
			<span>My Wallet</span>
		</DropdownItem>
		<!-- Configuración -->
		<DropdownItem href="#">
			<span class="badge bg-success float-end">11</span>
			<i class="bx bx-wrench font-size-16 align-middle me-1" ></i>
			<span key="t-settings">Settings</span>
		</DropdownItem>
		<!-- Bloquear pantalla -->
		<DropdownItem href="#">
			<i class="bx bx-lock-open font-size-16 align-middle me-1" ></i>
			<span key="t-lock-screen">Lock screen</span>
		</DropdownItem>
		<!-- Separador -->
		<DropdownItem divider />
		<!-- Cerrar sesión -->
		<DropdownItem on:click={logout}>
			<i class="bx bx-power-off font-size-16 align-middle me-1 text-danger" ></i>
			<span>Logout</span>
		</DropdownItem>
	</DropdownMenu>
</Dropdown>
