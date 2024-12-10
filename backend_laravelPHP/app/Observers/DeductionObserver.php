<?php

namespace App\Observers;

use App\Models\Deduction;

class DeductionObserver
{
    /**
     * Handle the Deduction "created" event.
     */
    public function created(Deduction $deduction): void
    {
        //
    }

    /**
     * Handle the Deduction "updated" event.
     */
    public function updated(Deduction $deduction): void
    {
        //
    }

    /**
     * Handle the Deduction "deleted" event.
     */
    public function deleted(Deduction $deduction): void
    {
        //
    }

    /**
     * Handle the Deduction "restored" event.
     */
    public function restored(Deduction $deduction): void
    {
        //
    }

    /**
     * Handle the Deduction "force deleted" event.
     */
    public function forceDeleted(Deduction $deduction): void
    {
        //
    }
}
