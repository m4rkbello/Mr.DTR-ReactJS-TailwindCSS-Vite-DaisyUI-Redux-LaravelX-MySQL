<?php

namespace App\Observers;

use App\Models\AttenndanceObserver;

class AttendanceObserver
{
    /**
     * Handle the AttenndanceObserver "created" event.
     */
    public function created(AttenndanceObserver $attenndanceObserver): void
    {
        //
    }

    /**
     * Handle the AttenndanceObserver "updated" event.
     */
    public function updated(AttenndanceObserver $attenndanceObserver): void
    {
        //
    }

    /**
     * Handle the AttenndanceObserver "deleted" event.
     */
    public function deleted(AttenndanceObserver $attenndanceObserver): void
    {
        //
    }

    /**
     * Handle the AttenndanceObserver "restored" event.
     */
    public function restored(AttenndanceObserver $attenndanceObserver): void
    {
        //
    }

    /**
     * Handle the AttenndanceObserver "force deleted" event.
     */
    public function forceDeleted(AttenndanceObserver $attenndanceObserver): void
    {
        //
    }
}
