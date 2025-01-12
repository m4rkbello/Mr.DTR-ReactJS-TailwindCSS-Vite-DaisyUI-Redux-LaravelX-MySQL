<?php

namespace App\Observers;

use Illuminate\Support\Facades\Auth;
use App\Models\ActivityLogs;

class GeneralObserver
{
    /**
     * Handle any "created" event for models.
     */
    public function created($model): void
    {
        $this->logActivity($model, 'created');
    }

    /**
     * Handle any "updated" event for models.
     */
    public function updated($model): void
    {
        $this->logActivity($model, 'updated');
    }

    /**
     * Handle any "deleted" event for models.
     */
    public function deleted($model): void
    {
        $this->logActivity($model, 'deleted');
    }

    /**
     * Handle any "restored" event for models.
     */
    public function restored($model): void
    {
        $this->logActivity($model, 'restored');
    }

    /**
     * Handle any "force deleted" event for models.
     */
    public function forceDeleted($model): void
    {
        $this->logActivity($model, 'forceDeleted');
    }

    /**
     * Log the activity to the ActivityLogs table.
     *
     * @param  mixed  $model
     * @param  string  $event
     */
    private function logActivity($model, string $event): void
    {
        $user = Auth::user();  // Get the currently logged-in user
        $employee_id = $user ? $user->employee_id : null;  // Assuming the user has an employee relation

        ActivityLogs::create([
            'title' => ucfirst($model->getTable()) . ' ' . ucfirst($event),
            'activity' => ucfirst($model->getTable()) . ' has been ' . $event,
            'table_name' => $model->getTable(),
            'record_id' => $model->id,
            'created_by_user_id' => $user ? $user->id : null,
            'created_by_employee_id' => $employee_id,
        ]);
    }
}
