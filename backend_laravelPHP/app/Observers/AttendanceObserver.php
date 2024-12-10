<?php

namespace App\Observers;

use App\Models\Attendance;
use App\Models\ActivityLogs;

class AttendanceObserver
{
    /**
     * Handle the Attendance "created" event.
     */
    public function created(Attendance $attendance): void
    {
                // 
                ActivityLogs::create([
                    'title' => 'Access Type Created',
                    'activity' => 'A new attendance was created.',
                    'table_name' => 'attendances',
                    'record_id' => $attendance->id,
                ]);
    }

    /**
     * Handle the Attendance "updated" event.
     */
    public function updated(Attendance $attendance): void
    {
        //
    }

    /**
     * Handle the Attendance "deleted" event.
     */
    public function deleted(Attendance $attendance): void
    {
        //
    }

    /**
     * Handle the Attendance "restored" event.
     */
    public function restored(Attendance $attendance): void
    {
        //
    }

    /**
     * Handle the Attendance "force deleted" event.
     */
    public function forceDeleted(Attendance $attendance): void
    {
        //
    }
}
