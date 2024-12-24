<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Almacenes as ModelAlmacen;
use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;


class AlmacenController extends Controller
{
    public function index()
    {

        $datos = ModelAlmacen::all();

        return Inertia::render('CRUD/Index', ['datos' => $datos]);
    }
    public function create()
    {
        return Inertia::render('CRUD/Create');
    }
    // Método para mostrar información del usuario
    public function show($id)
    {
        // Buscar el registro por ID
        $dato = ModelAlmacen::findOrFail($id);

        // Pasar el dato encontrado a la vista de Inertia
        return Inertia::render('CRUD/Edit', ['dato' => $dato]);
    }

    public function store(Request $request)
    {
        // $request -> validate([
        //     'projectname' => 'required|max:255',
        //     'projectdesc' => 'required|max:500',
        //     'projectstatus' => 'required',
        //     'projectvisibility' => 'required',            
        //     'duedate' => 'required|date',
        // ],
        // [
        //     'projectname.required' => 'El nombre del proyecto es requerido',
        //     'projectname.max' => 'El nombre del proyecto no puede tener más de 255 caracteres',
        //     'projectdesc.required' => 'La descripción del proyecto es requerida',
        //     'projectdesc.max' => 'La descripción del proyecto no puede tener más de 500 caracteres',
        //     'projectstatus.required' => 'El estado del proyecto es requerido',
        //     'projectvisibility.required' => 'La visibilidad del proyecto es requerida',
        //     'duedate.required' => 'La fecha de vencimiento del proyecto es requerida',
        //     'duedate.date' => 'La fecha de vencimiento del proyecto debe ser una fecha',
        // ]);

        try {

            DB::beginTransaction();

            $datos = [
                'descripcion' => $request->almacen,
                'meta' => $request->meta,
                'estado' => $request->estado,
                'acumulativo' => $request->reservas,
                'disponibleventa' => $request->ecomerce,
                'usuariocreacion' => $request->usuario,
                'fechacreacion' => Carbon::now()
            ];

            ModelAlmacen::create($datos);

            DB::commit();
            return redirect()->route('Index.index')->with('success', 'Datos guardados correctamente');
        } catch (\Exception $e) {
            dd($e);
            return back()->withErrors(['error' => 'Error al guardar los datos'])->withInput();
        }
    }


    // Método para actualizar un registro
    public function update(Request $request, $id)
    { 
      
        // Validar los datos enviados
        // $validated = $request->validate([
        //     'almacen' => 'required|string|max:255',
        //     'meta' => 'required|numeric|min:0',
        //     'estado' => 'nullable|numeric',
        //     'reservas' => 'nullable|numeric', // `reservas` debe mapearse a la columna real
        //     'ecomerce' => 'nullable|numeric', // `ecomerce` debe mapearse a la columna real
        //     'usuario' => 'required|string|max:255'
        //     // Agrega las reglas de validación que necesites
        // ]);
 
        // Encontrar el registro con el ID
        try {
            //dd('hola3');
            DB::beginTransaction();

            $dato = ModelAlmacen::findOrFail($id);
            //dd('hola4');
            // Actualizar los campos con los nuevos valores
            $dato->descripcion = $request['almacen'];
            $dato->meta = $request['meta'];
            $dato->estado = $request['estado'] ?? $dato->estado;
            $dato->acumulativo = $request->has('acumulativo') ? 1 : 0; 
            $dato->disponibleventa =$request->has('ecomerce') ? 1 : 0; 
            $dato->usuariomodificacion = $request['usuario'];
            //dd('hola5');
            // Guardar el modelo actualizado
            $dato->save();

            DB::commit();
            return redirect()->route('Index.index')->with('success', 'Datos modificados correctamente');
        } catch (\Exception $e) {
            dd($e);
            return back()->withErrors(['error' => 'Error al modificar los datos'])->withInput();
            // DB::rollBack();
            // Log::error('Error al modificar los datos', ['exception' => $e]);
    
            // return back()->withErrors(['error' => 'Ocurrió un error al intentar modificar los datos'])->withInput();
        }
    }

    public function destroy($id)
    {
        try {
            // Buscar el recurso por su ID
            $almacen = ModelAlmacen::findOrFail($id);

            // Eliminar el recurso
            $almacen->delete();

            // Redirigir con un mensaje de éxito
            return redirect()->route('Index.index')->with('success', 'Almacén eliminado correctamente.');
        } catch (\Exception $e) {
            // Si hay un error, redirigir con un mensaje de error
            return redirect()->route('Index.index')->with('error', 'Error al eliminar el almacén.');
        }
    }
}
