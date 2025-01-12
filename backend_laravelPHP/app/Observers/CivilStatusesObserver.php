<?php

namespace App\Observers;

use App\Models\CivilStatuses;
use App\Models\ActivityLogs;


class CivilStatusesObserver
{
    /**
     * Handle the CivilStatuses "created" event.
     */
    public function created(CivilStatuses $civilStatuses): void
    {
        //
        ActivityLogs::create([
            'title' => 'Civil Status Created',
            'activity' => 'Civil Status was created.',
            'table_name' => 'civil_statuses',
            'record_id' => $civilStatuses->id,
        ]);
    }

    /**
     * Handle the CivilStatuses "updated" event.
     */
    public function updated(CivilStatuses $civilStatuses): void
    {
        //
        ActivityLogs::create([
            'title' => 'Civil Status updated',
            'activity' => 'Civil Status was updated.',
            'table_name' => 'civil_statuses',
            'record_id' => $civilStatuses->id,
        ]);
    }

    /**
     * Handle the CivilStatuses "deleted" event.
     */
    public function deleted(CivilStatuses $civilStatuses): void
    {
        //
        ActivityLogs::create([
            'title' => 'Civil Status deleted',
            'activity' => 'Civil Status was updated.',
            'table_name' => 'civil_statuses',
            'record_id' => $civilStatuses->id,
        ]);
    }

    /**
     * Handle the CivilStatuses "restored" event.
     */
    public function restored(CivilStatuses $civilStatuses): void
    {
        //
        ActivityLogs::create([
            'title' => 'Civil Status restored',
            'activity' => 'Civil Status was restored.',
            'table_name' => 'civil_statuses',
            'record_id' => $civilStatuses->id,
        ]);
    }

    /**
     * Handle the CivilStatuses "force deleted" event.
     */
    public function forceDeleted(CivilStatuses $civilStatuses): void
    {
        //
        ActivityLogs::create([
            'title' => 'Civil Status forced deleted',
            'activity' => 'Civil Status was forced deleted!.',
            'table_name' => 'civil_statuses',
            'record_id' => $civilStatuses->id,
        ]);
    }
}
