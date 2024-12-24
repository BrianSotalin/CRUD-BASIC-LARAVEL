<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Prueba as ModelPrueba;
use Inertia\Inertia;

class PruebaController extends Controller
{
    public function index()
    {
        $datos = ModelPrueba::all();

        return Inertia::render('CRUD/Index', ['datos' => $datos]);
   
    }

    public function create()
    {
        return Inertia::render('CRUD/Create');
    }

    public function store(Request $request)
    {
        $request -> validate([
            'projectname' => 'required|max:255',
            'projectdesc' => 'required|max:500',
            'projectstatus' => 'required',
            'projectvisibility' => 'required',            
            'duedate' => 'required|date',
        ],
        [
            'projectname.required' => 'El nombre del proyecto es requerido',
            'projectname.max' => 'El nombre del proyecto no puede tener más de 255 caracteres',
            'projectdesc.required' => 'La descripción del proyecto es requerida',
            'projectdesc.max' => 'La descripción del proyecto no puede tener más de 500 caracteres',
            'projectstatus.required' => 'El estado del proyecto es requerido',
            'projectvisibility.required' => 'La visibilidad del proyecto es requerida',
            'duedate.required' => 'La fecha de vencimiento del proyecto es requerida',
            'duedate.date' => 'La fecha de vencimiento del proyecto debe ser una fecha',
        ]);

        try{
            DB::beginTransaction();

            $datos = [
                'nombre' => $request->projectname,
                'descripcion' => $request->projectdesc,
                'estado' => $request->projectstatus,
                'visible' => $request->projectvisibility,
                'fecha' => $request->duedate,
            ];

            ModelPrueba::create($datos);

            DB::commit();

            return redirect()->route('PaginaPrueba2.index')->with('success', 'Datos guardados correctamente');
        }catch(\Exception $e){
            dd($e);
            return redirect()->route('PaginaPrueba2.create')->with('error', 'Error al guardar los datos');
        }
    }

    public function edit($id)
    {
        $datos = ModelPrueba::find($id);

        return Inertia::render('CRUD/Edit', ['datos' => $datos]);
    }

    public function update(Request $request, $id)
    {
        $request -> validate([
            'projectname' => 'required|max:255',
            'projectdesc' => 'required|max:500',
            'projectstatus' => 'required',
            'projectvisibility' => 'required',            
            'duedate' => 'required|date',
        ],
        [
            'projectname.required' => 'El nombre del proyecto es requerido',
            'projectname.max' => 'El nombre del proyecto no puede tener más de 255 caracteres',
            'projectdesc.required' => 'La descripción del proyecto es requerida',
            'projectdesc.max' => 'La descripción del proyecto no puede tener más de 500 caracteres',
            'projectstatus.required' => 'El estado del proyecto es requerido',
            'projectvisibility.required' => 'La visibilidad del proyecto es requerida',
            'duedate.required' => 'La fecha de vencimiento del proyecto es requerida',
            'duedate.date' => 'La fecha de vencimiento del proyecto debe ser una fecha',
        ]);

        try{
            DB::beginTransaction();

            ModelPrueba::findOrFail($id)->update([
                'nombre' => $request->projectname,
                'descripcion' => $request->projectdesc,
                'estado' => $request->projectstatus,
                'visible' => $request->projectvisibility,
                'fecha' => $request->duedate,
            ]);

            DB::commit();

            return redirect()->route('PaginaPrueba2.index')->with('success', 'Datos actualizados correctamente');
        }catch(\Exception $e){
            dd($e);
            return redirect()->route('PaginaPrueba2.edit', $id)->with('error', 'Error al actualizar los datos');
        }
    }

    public function destroy($id)
    {
        $datos = ModelPrueba::find($id);
        $datos->delete();

        return redirect()->route('PaginaPrueba2.index')->with('success', 'Datos eliminados correctamente');
    }
}