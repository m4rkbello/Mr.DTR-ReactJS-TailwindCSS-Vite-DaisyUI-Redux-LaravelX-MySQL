<?php

namespace App\Observers;

use App\Models\AccessType;
use App\Models\ActivityLogs;

class AccessTypeObserver
{
    /**
     * Handle the AccessType "created" event.
     */
    public function created(AccessType $accessType): void
    {
        // 
        ActivityLogs::create([
            'title' => 'Access Type Created',
            'activity' => 'A new access type was created.',
            'table_name' => 'access_types',
            'record_id' => $accessType->id,
        ]);
    }

    /**
     * Handle the AccessType "updated" event.
     */
    public function updated(AccessType $accessType): void
    {
        //
        ActivityLogs::create([
            'title' => 'Access Type Updated!',
            'activity' => 'An access type was updated.',
            'table_name' => 'access_types',
            'record_id' => $accessType->id,
        ]);
    }

    /**
     * Handle the AccessType "deleted" event.
     */
    public function deleted(AccessType $accessType): void
    {
        //
        ActivityLogs::create([
            'title' => 'Access Type deleted!',
            'activity' => 'An access type was deleted.',
            'table_name' => 'access_types',
            'record_id' => $accessType->id,
        ]);
    }

    /**
     * Handle the AccessType "restored" event.
     */
    public function restored(AccessType $accessType): void
    {
        //
        ActivityLogs::create([
            'title' => 'Access Type restored!',
            'activity' => 'An access type was restored.',
            'table_name' => 'access_types',
            'record_id' => $accessType->id,
        ]);
    }

    /**
     * Handle the AccessType "force deleted" event.
     */
    public function forceDeleted(AccessType $accessType): void
    {
        //
        ActivityLogs::create([
            'title' => 'Access Type forced deleted!',
            'activity' => 'An access type was forced deleted.',
            'table_name' => 'access_types',
            'record_id' => $accessType->id,
        ]);
    }
}
