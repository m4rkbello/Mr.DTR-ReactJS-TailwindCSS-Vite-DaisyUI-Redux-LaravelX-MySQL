<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CivilStatuses extends Model
{
    use HasFactory;

    
    protected $fillable = [
        'civil_status_title',
        'civil_status_description',
        'civil_status_status_id',
    ];

}
