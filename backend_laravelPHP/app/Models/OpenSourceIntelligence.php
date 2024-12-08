<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OpenSourceIntelligence extends Model
{
    use HasFactory;

    protected $fillable = [
        'osint_public_ip',
        'osint_latitude',
        'osint_longitude',
        'osint_user_id',
        'osint_employee_id',
        'osint_status_id'
    ];

    
}
