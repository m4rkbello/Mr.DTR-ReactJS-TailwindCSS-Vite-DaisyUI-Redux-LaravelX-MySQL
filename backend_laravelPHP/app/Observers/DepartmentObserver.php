<?php

namespace App\Observers;

use App\Models\Department;

class DepartmentObserver
{
    /**
     * Handle the Department "created" event.
     */
    public function created(Department $department): void
    {
        //
        Department::create([
            'title' => 'Department was Created',
            'activity' => 'Department was created.',
            'table_name' => 'departments',
            'record_id' => $department->id,
        ]);
    }

    /**
     * Handle the Department "updated" event.
     */
    public function updated(Department $department): void
    {
        //
        Department::create([
            'title' => 'Department Updated',
            'activity' => 'Department was updated.',
            'table_name' => 'departments',
            'record_id' => $department->id,
        ]);
    
    }

    /**
     * Handle the Department "deleted" event.
     */
    public function deleted(Department $department): void
    {
        //
        Department::create([
            'title' => 'Department Deleted',
            'activity' => 'Department was deleted.',
            'table_name' => 'departments',
            'record_id' => $department->id,
        ]);
    }

    /**
     * Handle the Department "restored" event.
     */
    public function restored(Department $department): void
    {
        //
        Department::create([
            'title' => 'Department Restored',
            'activity' => 'Department was restored.',
            'table_name' => 'departments',
            'record_id' => $department->id,
        ]);
    }

    /**
     * Handle the Department "force deleted" event.
     */
    public function forceDeleted(Department $department): void
    {
        //
        Department::create([
            'title' => 'Department Force Delete',
            'activity' => 'Department was force deleted.',
            'table_name' => 'departments',
            'record_id' => $department->id,
        ]);
    }
}
