<?php

namespace App\Observers;

use App\Models\Observer;

class OvertimeObserver
{
    /**
     * Handle the Observer "created" event.
     */
    public function created(Observer $observer): void
    {
        //
    }

    /**
     * Handle the Observer "updated" event.
     */
    public function updated(Observer $observer): void
    {
        //
    }

    /**
     * Handle the Observer "deleted" event.
     */
    public function deleted(Observer $observer): void
    {
        //
    }

    /**
     * Handle the Observer "restored" event.
     */
    public function restored(Observer $observer): void
    {
        //
    }

    /**
     * Handle the Observer "force deleted" event.
     */
    public function forceDeleted(Observer $observer): void
    {
        //
    }
}
