<?php

namespace App\Observers;

use App\Models\ActivityLogs;

class ActivityLogsObserver
{
    /**
     * Handle the ActivityLogs "created" event.
     */
    public function created(ActivityLogs $activityLogs): void
    {
        //
    }

    /**
     * Handle the ActivityLogs "updated" event.
     */
    public function updated(ActivityLogs $activityLogs): void
    {
        //
    }

    /**
     * Handle the ActivityLogs "deleted" event.
     */
    public function deleted(ActivityLogs $activityLogs): void
    {
        //
    }

    /**
     * Handle the ActivityLogs "restored" event.
     */
    public function restored(ActivityLogs $activityLogs): void
    {
        //
    }

    /**
     * Handle the ActivityLogs "force deleted" event.
     */
    public function forceDeleted(ActivityLogs $activityLogs): void
    {
        //
    }
}
