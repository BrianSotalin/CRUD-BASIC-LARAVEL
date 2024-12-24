<script>
	import { Badge, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row, Table } from 'sveltestrap';
	import { router } from '@inertiajs/svelte';
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import ModalDelete from "../../../common/ModalDelete.svelte";
	import {Link} from '@inertiajs/svelte';  

	export let datos;

	let selectedProject = null;
	let isDelete = false;
    // Nuevo: Estado para el texto del buscador
    let searchQuery = "";

    // Nuevo: Filtrar datos en función del texto del buscador
    $: filteredDatos = datos.filter(dato =>
        dato.descripcion.toLowerCase().includes(searchQuery.toLowerCase()) 
       
    );

    const toggleDeleteModal = (event) => {
        isDelete = !isDelete;

        if (event) {
            selectedProject = event.detail.id;
        }
    };
    document.addEventListener("openDeleteModal", toggleDeleteModal);

    async function deleteProject() {
        if (selectedProject) {
            try {
                router.delete(
                    `Index/${selectedProject}`,
                );    
				//toast.success('Proyecto eliminado correctamente');            
            } catch (error) {
				//toast.success('Error a eliminar');
                console.error("Error al eliminar:", error);
            }
            toggleDeleteModal(); // Cierra el modal
        }
    }
</script>

<HeadTitle title="Listado Almacenes" />

<Breadcrumb title="Projects" pagetitle="Listado Almacenes" />

<Row>
	<Col lg="12">
	  <Card>
		<CardBody>

			<Row class=" mb-2">
				<div class="col-sm">
					<div class="search-box me-2 d-inline-block">
						<div class="position-relative">
							<input type="text" class="form-control" autocomplete="off" id="searchTableList" placeholder="Buscador..." bind:value={searchQuery}>
							<i class="bx bx-search-alt search-icon"></i>
						</div>
					</div>
				</div>
				<!-- end col -->
				<div class="col-sm-auto">
					<div class="text-sm-end">
						<Link href="/Create" class="btn btn-success btn-rounded"><i class="mdi mdi-plus me-1"></i> Nuevo Registro</Link>
					</div>
				</div>
				<!-- end col -->
			</Row>

			<div class="table-responsive">
			  <Table
				class="project-list-table table-nowrap align-middle table-borderless"
			  >
				<thead class="table-light">
				  <tr>
					<th scope="col">ID</th>
					<th scope="col">Almacen</th>
					<th scope="col">Meta de Venta</th>
					<th scope="col">Estado</th>
					<th scope="col">Accion</th>
				  </tr>
				</thead>
				<tbody>
				  {#each filteredDatos as dato}
					<tr>
					  <td>
							<h5 class="text-truncate font-size-14">
							<Link
								href={'/Create/'+ dato.almacenesid +'/edit'}
								class="text-dark"
							>
								{dato.almacenesid}
							</Link>
							</h5>
							
							</td>
							<td>
								{dato.descripcion}
							</td>
							<td>
								<!--<Badge
									color={"primary"}
									class={"bg-" + "primary"}
								>-->
									{dato.meta}
								<!--</Badge>-->
							</td>
							<td>
								{dato.estado}
							</td>						
					  <td>
						<Dropdown>
						  <DropdownToggle href="#" color="" class="card-drop" tag="div">
							<i class="mdi mdi-dots-horizontal font-size-18" ></i>
						  </DropdownToggle>
						  <DropdownMenu class="dropdown-menu-end">
							<!-- <Link href={'/Index/'+ dato.almacenesid}>
							  <i
								class="mdi mdi-pencil font-size-16 text-success me-1"
							  ></i>{" "}
							  Edit
							</Link> -->
							<DropdownItem on:click={() => window.location.href = '/Index/'+dato.almacenesid}>
								<i class="mdi mdi-pencil font-size-16 text-success me-1"></i> Edit
							</DropdownItem>	
							<DropdownItem on:click={() => toggleDeleteModal({ detail: { id: dato.almacenesid } })}>
								<i class="mdi mdi-trash-can font-size-16 text-danger me-1"></i> Eliminar
							</DropdownItem>							
						  </DropdownMenu>
						</Dropdown>
					  </td>
					</tr>
				  {/each}
				</tbody>
			  </Table>
			</div>
		</CardBody>
	  </Card>	  
	</Col>
  </Row>

<ModalDelete
    isOpen={isDelete}
    on:delete={deleteProject}
    on:close={toggleDeleteModal}
/>
