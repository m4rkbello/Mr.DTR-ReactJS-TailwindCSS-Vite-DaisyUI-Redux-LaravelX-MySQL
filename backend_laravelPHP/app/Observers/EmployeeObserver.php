<?php

namespace App\Observers;

use App\Models\Employee;
use App\Models\ActivityLogs;
use Illuminate\Support\Facades\Auth;

class EmployeeObserver
{
    /**
     * Handle the Employee "created" event.
     */
    public function created(Employee $employee): void
    {
        // Create activity log when an employee is created
        ActivityLogs::create([
            'title' => 'Employee Created',
            'activity' => 'A new employee account was created.',
            'table_name' => 'employees',
            'record_id' => $employee->id,
            'created_by_user_id' => Auth::id(),  // Assumes that the logged-in user is the creator
        ]);
    }

    /**
     * Handle the Employee "updated" event.
     */
    public function updated(Employee $employee): void
    {
        // Create activity log when an employee is updated
        ActivityLogs::create([
            'title' => 'Employee Updated',
            'activity' => 'Employee account details were updated.',
            'table_name' => 'employees',
            'record_id' => $employee->id,
            'updated_by_user_id' => Auth::id(),  // Assumes that the logged-in user is the updater
        ]);
    }

    /**
     * Handle the Employee "deleted" event.
     */
    public function deleted(Employee $employee): void
    {
        // Create activity log when an employee is deleted
        ActivityLogs::create([
            'title' => 'Employee Deleted',
            'activity' => 'An employee account was deleted.',
            'table_name' => 'employees',
            'record_id' => $employee->id,
            'updated_by_user_id' => Auth::id(),  // Assumes that the logged-in user is the deleter
        ]);
    }

    /**
     * Handle the Employee "restored" event.
     */
    public function restored(Employee $employee): void
    {
        // Optionally log when an employee is restored
        ActivityLogs::create([
            'title' => 'Employee Restored',
            'activity' => 'An employee account was restored.',
            'table_name' => 'employees',
            'record_id' => $employee->id,
            'updated_by_user_id' => Auth::id(),  // Assumes that the logged-in user is the restorer
        ]);
    }

    /**
     * Handle the Employee "force deleted" event.
     */
    public function forceDeleted(Employee $employee): void
    {
        // Optionally log when an employee is permanently deleted
        ActivityLogs::create([
            'title' => 'Employee Force Deleted',
            'activity' => 'An employee account was permanently deleted.',
            'table_name' => 'employees',
            'record_id' => $employee->id,
            'updated_by_user_id' => Auth::id(),  // Assumes that the logged-in user is the force deleter
        ]);
    }
}
