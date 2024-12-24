<script>
    import { onMount } from "svelte";
    import { page } from "@inertiajs/svelte";
    import CallAlertCustom from './data/CallAlertCustom'; // Importa la función JS

    // Función para mostrar el toast
    function showToast(type, message) {
        const icono = type === "success" ? "success" : "error";
        CallAlertCustom(icono, message);
    }

    function setupToast() {
        const flash = $page.props.flash || {};
        if (flash.success || flash.error) {
            CallAlertCustom('error', 'Bienvenido a la aplicación');
            const message = flash.success || flash.error;
            const type = flash.success ? "success" : "error";
            showToast(type, message);
        }
    }

    onMount(setupToast);

    $: $page.props.flash, setupToast();
</script>

<main class="flex flex-col items-center mt-10">
    <!-- Aquí podrías mantener el ToastContainer si decides usarlo en algún otro contexto -->
</main>