<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Almacenes extends Model
{
	protected $table = 'almacenes';
	protected $primaryKey = 'almacenesid';
	protected $fillable=[
		'descripcion',
		'almacenesid',
		'meta',
		'estado',
		'acumulativo',
		'disponibleventa',
		'fechacreacion',
		'usuariocreacion',
		'usuariomodificacion',
	];
	public $timestamps = false;
	
}
