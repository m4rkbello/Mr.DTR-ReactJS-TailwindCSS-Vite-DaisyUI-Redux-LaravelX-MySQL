<?php

namespace App\Observers;

use App\Models\CivilStatuses;

class CivilStatusesObserver
{
    /**
     * Handle the CivilStatuses "created" event.
     */
    public function created(CivilStatuses $civilStatuses): void
    {
        //
    }

    /**
     * Handle the CivilStatuses "updated" event.
     */
    public function updated(CivilStatuses $civilStatuses): void
    {
        //
    }

    /**
     * Handle the CivilStatuses "deleted" event.
     */
    public function deleted(CivilStatuses $civilStatuses): void
    {
        //
    }

    /**
     * Handle the CivilStatuses "restored" event.
     */
    public function restored(CivilStatuses $civilStatuses): void
    {
        //
    }

    /**
     * Handle the CivilStatuses "force deleted" event.
     */
    public function forceDeleted(CivilStatuses $civilStatuses): void
    {
        //
    }
}
