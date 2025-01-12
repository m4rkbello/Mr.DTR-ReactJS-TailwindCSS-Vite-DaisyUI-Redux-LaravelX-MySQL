<?php

namespace App\Observers;

use App\Models\ActivityLogs;

class GeneralObserver
{
    /**
     * Handle the "created" event for any model.
     */
    public function created($model): void
    {
        $this->logActivity($model, 'created');
    }

    /**
     * Handle the "updated" event for any model.
     */
    public function updated($model): void
    {
        $this->logActivity($model, 'updated');
    }

    /**
     * Handle the "deleted" event for any model.
     */
    public function deleted($model): void
    {
        $this->logActivity($model, 'deleted');
    }

    /**
     * Handle the "restored" event for any model.
     */
    public function restored($model): void
    {
        $this->logActivity($model, 'restored');
    }

    /**
     * Handle the "force deleted" event for any model.
     */
    public function forceDeleted($model): void
    {
        $this->logActivity($model, 'force deleted');
    }

    /**
     * Log activity to the `activity_logs` table.
     */
    private function logActivity($model, string $event): void
    {
        // Get the table name dynamically
        $tableName = $model->getTable();

        // Get the primary key value dynamically
        $recordId = $model->getKey();

        // Create the log
        ActivityLogs::create([
            'title'      => ucfirst($tableName) . ' ' . ucfirst($event),
            'activity'   => "A record in the '{$tableName}' table was {$event}.",
            'table_name' => $tableName,
            'record_id'  => $recordId,
        ]);
    }
}
