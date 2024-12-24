<script>
  
	import { Button, Card, CardBody, CardTitle, Col, Label, Row, Image, FormGroup } from 'sveltestrap';
	import { router } from '@inertiajs/svelte';
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
    
    export let dato; 
  console.log(dato)
	async function handleSubmit(event) {
     let estado= document.getElementById('reservas').value
     let usuario = document.getElementById('usuariomodificacion').value
     console.log(estado)
     console.log(usuario)
		event.preventDefault();
		router.put('/Index/'+ dato.almacenesid, {
			almacen: document.getElementById('almacen').value,
			meta: document.getElementById('meta').value,
			reservas: document.getElementById('reservas').value,
			ecomerce: document.getElementById('ecomerce').value,
			estado: document.getElementById('estado').value,
            usuario: document.getElementById('usuariomodificacion').value
		});
	} 
</script>

<HeadTitle title="Editando" />

<Breadcrumb title="Projects" pagetitle="Modificar" />

<form on:submit={handleSubmit}>
    <Row>
        <!-- Columna principal para los campos -->
        <Col lg="8" >
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
                            placeholder="Almacen"
                            value={dato.descripcion}
                            required
                        />
                    </FormGroup>

                    <!-- Meta de Venta -->
                    <FormGroup>
                        <Label for="projectdesc" class="fw-bold">Meta de Venta</Label>
                        <input
                            class="form-control"
                            id="meta"
                            name="meta"
                            type="number"
                            min="0"
                            max="900"
                            step="1"
                            placeholder="Meta en $$ de Venta"
                            value={dato.meta}
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
                                    checked={dato.acumulativo}
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
                                    checked={dato.disponibleventa}
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
                    <h4 class="mb-4 text-primary">Mas detalles</h4>

                  <!-- Estado -->
                  <FormGroup>
                    <Label for="project-status-input" class="fw-bold"
                        >Estado</Label
                    >
                    <select 
                    class="form-select" 
                    id="estado" 
                    name="estado" 
                
                    >
                        <option value="0" selected={dato.estado === 0}>Inactivo</option>
                        <option value="1" selected={dato.estado === 1} >Activo</option>
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
                        value={dato.usuariocreacion}
                        readonly
                    />
                </FormGroup>

                     <!-- Usuario Modificacion -->
                     <FormGroup>
                        <Label for="usuariomodificacion" class="fw-bold"
                            >Usuario Modificacion</Label
                        >
                        <input
                            id="usuariomodificacion"
                            name="usuariomodificacion"
                            type="text"
                            class="form-control"
                            placeholder="Ingresa tu usuario"
                            required
                        />
                    </FormGroup>
                       <!-- Usuario Modificacion -->
                       <FormGroup>
                      <h4 class="mb-2 text-primary">Última modificacion:</h4>
                      <Label class="fw-bold">{dato.usuariomodificacion} - {dato.fechamodificacion}  </Label>
                    </FormGroup>
                    <!-- <h4 class="mb-4 text-primary"></h4> -->
                </CardBody>
            </Card>
        </Col>
    </Row>

    <!-- Botón de envío -->
    <div class="text-center mt-4">
        <Button type="submit" color="primary" size="lg" class="px-5">
            Actualizar 
        </Button>
    </div>
</form>