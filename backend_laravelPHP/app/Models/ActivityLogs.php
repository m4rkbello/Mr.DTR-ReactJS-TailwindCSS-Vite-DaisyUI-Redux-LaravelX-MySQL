<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActivityLogs extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'activity_logs';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'activity',
        'table_name',
        'record_id',
        'created_by_user_id',
        'created_by_employee_id',
        'updated_by_user_id',
        'updated_by_employee_id',
    ];

    /**
     * Relationships.
     */

    // Created by User
    public function createdByUser()
    {
        return $this->belongsTo(User::class, 'created_by_user_id');
    }

    // Created by Employee
    public function createdByEmployee()
    {
        return $this->belongsTo(Employee::class, 'created_by_employee_id');
    }

    // Updated by User
    public function updatedByUser()
    {
        return $this->belongsTo(User::class, 'updated_by_user_id');
    }

    // Updated by Employee
    public function updatedByEmployee()
    {
        return $this->belongsTo(Employee::class, 'updated_by_employee_id');
    }
}