<?php

namespace App\Observers;

use App\Models\Rate;

class RateObserver
{
    /**
     * Handle the Rate "created" event.
     */
    public function created(Rate $rate): void
    {
        //
    }

    /**
     * Handle the Rate "updated" event.
     */
    public function updated(Rate $rate): void
    {
        //
    }

    /**
     * Handle the Rate "deleted" event.
     */
    public function deleted(Rate $rate): void
    {
        //
    }

    /**
     * Handle the Rate "restored" event.
     */
    public function restored(Rate $rate): void
    {
        //
    }

    /**
     * Handle the Rate "force deleted" event.
     */
    public function forceDeleted(Rate $rate): void
    {
        //
    }
}
