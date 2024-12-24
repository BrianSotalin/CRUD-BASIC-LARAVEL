<script>
    import {
        Button,
        Card,
        CardBody,
        CardTitle,
        Col,
        Label,
        Row,
        Image,
        FormGroup,
    } from "sveltestrap";
    import { router } from "@inertiajs/svelte";
    import Breadcrumb from "../../../common/Breadcrumb.svelte";
    import HeadTitle from "../../../common/HeadTitle.svelte";

    async function handleSubmit(event) {
        event.preventDefault();
        router.post("/Create", {
            almacen: document.getElementById("almacen").value,
            meta: document.getElementById("meta").value,
            estado: document.getElementById("estado").value,
            reservas: document.getElementById("reservas").value,
            ecomerce: document.getElementById("ecomerce").value,
            usuario: document.getElementById("usuariocreacion").value,
        });
    }
</script>

<HeadTitle title="Create New Project" />

<Breadcrumb title="Projects" pagetitle="Nuevo ALmacen" />

<form on:submit={handleSubmit}>
    <Row>
        <!-- Columna principal para los campos -->
        <Col lg="8">
            <Card class="shadow-sm border-0">
                <CardBody>
                    <h4 class="mb-4 text-primary">Detalle Almacen</h4>
                    <!-- Almacen -->
                    <FormGroup>
                        <Label for="projectname" class="fw-bold">Almacen</Label>
                        <input
                            id="almacen"
                            name="almacen"
                            type="text"
                            class="form-control"
                            placeholder="Ingresa un Almacen"
                            required
                        />
                    </FormGroup>

                    <!-- Meta de Venta -->
                    <FormGroup>
                        <Label for="projectdesc" class="fw-bold"
                            >Meta de Venta</Label
                        >
                        <input
                            class="form-control"
                            id="meta"
                            name="meta"
                            type="number"
                            min="0"
                            max="900"
                            step="1"
                            placeholder="Meta en $$ de Venta"
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <!-- <Label class="fw-bold">Habilitar Notificaciones</Label> -->
                        <div>
                            <!-- Acumulativo -->
                            <div class="form-check form-check-inline">
                                <input
                                    type="checkbox"
                                    id="reservas"
                                    name="reservas"
                                    class="form-check-input"
                                    value="1"
                                />
                                <Label for="reservas" class="form-check-label"
                                    >Permite Reservas</Label
                                >
                            </div>

                            <!-- DisponibleVenta -->
                            <div class="form-check form-check-inline">
                                <input
                                    type="checkbox"
                                    id="ecomerce"
                                    name="ecomerce"
                                    class="form-check-input"
                                    value="1"
                                />
                                <Label for="ecomerce" class="form-check-label"
                                    >Disponible Ecommerce</Label
                                >
                            </div>
                        </div>
                    </FormGroup>
                </CardBody>
            </Card>
        </Col>

        <!-- Columna para las opciones de publicación -->
        <Col lg="4">
            <Card class="shadow-sm border-0">
                <CardBody>
                    <h4 class="mb-4 text-primary">Mas Detalles</h4>

                    <!-- Estado -->
                    <FormGroup>
                        <Label for="project-status-input" class="fw-bold"
                            >Estado</Label
                        >
                        <select class="form-select" id="estado" name="estado">
                            <option value="0">Inactivo</option>
                            <option value="1" selected>Activo</option>
                        </select>
                    </FormGroup>

                    <!-- Usuario Creacion -->
                    <FormGroup>
                        <Label for="usuariocreacion" class="fw-bold"
                            >Usuario Creacion</Label
                        >
                        <input
                            id="usuariocreacion"
                            name="usuariocreacion"
                            type="text"
                            class="form-control"
                            placeholder="Ingresa tu usuario"
                            required
                        />
                    </FormGroup>

                    <!-- Due Date -->
                    <!-- <FormGroup>
                        <Label for="duedate-input" class="fw-bold">Due Date</Label>
                        <input
                            type="date"
                            id="duedate-input"
                            name="due_date"
                            class="form-control"
                            required
                        />
                    </FormGroup> -->
                </CardBody>
            </Card>
        </Col>
    </Row>

    <!-- Botón de envío -->
    <div class="text-center mt-4">
        <Button type="submit" color="primary" size="lg" class="px-5">
            Crear
        </Button>
    </div>
</form>
