<!-- Modal.svelte -->
<script>
    import { createEventDispatcher } from "svelte";
    import {
        ModalHeader,
        ModalFooter,
        ModalBody,
        Button,
        Tooltip,
        CardTitle,
        CardHeader,
        Card,
    } from "sveltestrap";
    import Modal from "../common/Modal.svelte";

    export let isOpen = false;

    export let onClose = () => (isOpen = !isOpen);
    export let onDelete = () => {};

    const dispatch = createEventDispatcher();

    const handleDelete = () => {
        dispatch("delete");
        if (onDelete) onDelete();
    };

    const handleClose = () => {
        dispatch("close");
        if (onClose) onClose();
    };
</script>

<Modal
    {isOpen}
    backdrop={true}
    className="modal-dialog modal-dialog-centered modal-sm no-fullscreen"
>
    <Card class="">
        <CardHeader>
            <div class="d-flex">
                <CardTitle class="flex-grow-1 m-1">Confirmar</CardTitle>
                <Button
                    class="m-auto"
                    close
                    on:click={handleClose}
                    id="btnCerrar"
                />
                <Tooltip target="btnCerrar" placement="bottom">
                    <strong>Cerrar</strong>
                </Tooltip>
            </div>
        </CardHeader>
        <ModalBody class="pb-0">
            <div class="text-center mt-1">
                <div class="avatar-sm mb-4 mx-auto">
                    <div
                        class="avatar-title bg-primary text-primary bg-opacity-10 font-size-20 rounded-3"
                    >
                        <i class="mdi mdi-trash-can-outline" ></i>
                    </div>
                </div>
                <p class="text-muted font-size-16">
                    ¿Está seguro de <strong>eliminar</strong> el registro?
                </p>
            </div>
        </ModalBody>
        <ModalFooter class="d-flex justify-content-center pb-0">
            <Button
                type="button"
                color="danger"
                class="me-1 mb-0"
                on:click={handleDelete}
            >
                <i class="mdi mdi-trash-can me-1" ></i> Eliminar
            </Button>
            <Button
                type="button"
                color="secondary"
                class="mb-0"
                on:click={handleClose}
            >
                Cancelar
            </Button>
        </ModalFooter>
    </Card>
</Modal>
