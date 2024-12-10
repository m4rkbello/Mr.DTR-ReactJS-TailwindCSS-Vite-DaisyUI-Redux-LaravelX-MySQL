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
                    'title' => 'Attendance Created',
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
        ActivityLogs::create([
            'title' => 'Attendance Created',
            'activity' => 'Attendance was updated.',
            'table_name' => 'attendances',
            'record_id' => $attendance->id,
        ]);
    }

    /**
     * Handle the Attendance "deleted" event.
     */
    public function deleted(Attendance $attendance): void
    {
        //
        ActivityLogs::create([
            'title' => 'Attendance deleted!',
            'activity' => 'Attendance was deleted.',
            'table_name' => 'attendances',
            'record_id' => $attendance->id,
        ]);
    }

    /**
     * Handle the Attendance "restored" event.
     */
    public function restored(Attendance $attendance): void
    {
        //
        ActivityLogs::create([
            'title' => 'Attendance restored!',
            'activity' => 'Attendance was restored.',
            'table_name' => 'attendances',
            'record_id' => $attendance->id,
        ]);
    }

    /**
     * Handle the Attendance "force deleted" event.
     */
    public function forceDeleted(Attendance $attendance): void
    {
        //
        ActivityLogs::create([
            'title' => 'Attendance force deleted!',
            'activity' => 'Attendance was force deleted.',
            'table_name' => 'attendances',
            'record_id' => $attendance->id,
        ]);
    }
}
