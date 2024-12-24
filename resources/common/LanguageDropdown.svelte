<script>
	import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, } from "sveltestrap";
	import { setupI18n } from "../services/i18n";
	import { onMount } from "svelte";
	import languages from "../common/data/languages";	
	import logous from "../assets/images/flags/us.jpg";

	 let selectedLang;

	let isOpen = false;

	function handleLocaleChange(lang) {
		setupI18n({ withLocale: lang });
		selectedLang = lang
		localStorage.setItem("I18N_LANGUAGE", lang);
	}

	onMount(() => {
		localStorage.getItem("I18N_LANGUAGE") || "en";
	})
</script>

<Dropdown {isOpen} toggle={() => (isOpen = !isOpen)} class="d-inline-block">
	<DropdownToggle class="btn header-item" tag="button" color="">
		<img
			src={logous}
			alt="Samply"
			height="16"
		/>
	</DropdownToggle>
	<DropdownMenu class="language-switch dropdown-menu-end">
		{#each languages as language}
			<DropdownItem
				key={language.value}
				on:click={() => handleLocaleChange(language.value)}
				class={`notify-item language ${
					selectedLang === language.value ? "active" : "none"
				}`}
			>
				<img
					src={language.flag}
					alt="Samply"
					class="me-2"
					height="12"
				/>
				<span class="align-middle">
					{language.label}
				</span>
			</DropdownItem>
		{/each}
	</DropdownMenu>
</Dropdown>
