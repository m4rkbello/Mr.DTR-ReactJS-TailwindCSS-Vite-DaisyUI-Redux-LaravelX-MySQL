<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccessType extends Model
{
    use HasFactory;

    protected $fillable = [
        'access_type_name',
        'access_type_description',
        'access_type_status',
    ];

    public function users()
    {
        return $this->hasMany(User::class, 'access_type_id');
    }

    public function employees()
    {
        return $this->hasMany(Employee::class, 'access_type_id');
    }
}



