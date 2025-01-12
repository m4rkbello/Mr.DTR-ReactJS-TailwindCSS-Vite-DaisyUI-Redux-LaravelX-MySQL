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
        Deduction::create([
            'title' => 'Deduction was Created',
            'activity' => 'Deduction was created.',
            'table_name' => 'deductions',
            'record_id' => $deduction->id,
        ]);
    }

    /**
     * Handle the Deduction "updated" event.
     */
    public function updated(Deduction $deduction): void
    {
        //
        Deduction::create([
            'title' => 'Deduction was updated',
            'activity' => 'Deduction was updated.',
            'table_name' => 'deductions',
            'record_id' => $deduction->id,
        ]);
    }

    /**
     * Handle the Deduction "deleted" event.
     */
    public function deleted(Deduction $deduction): void
    {
        //
        Deduction::create([
            'title' => 'Deduction was deleted',
            'activity' => 'Deduction was updated.',
            'table_name' => 'deductions',
            'record_id' => $deduction->id,
        ]);
    }

    /**
     * Handle the Deduction "restored" event.
     */
    public function restored(Deduction $deduction): void
    {
        //
        Deduction::create([
            'title' => 'Civil Status restored',
            'activity' => 'Civil Status was restored.',
            'table_name' => 'civil_statuses',
            'record_id' => $deduction->id,
        ]);
    }

    /**
     * Handle the Deduction "force deleted" event.
     */
    public function forceDeleted(Deduction $deduction): void
    {
        //
        Deduction::create([
            'title' => 'Civil Status restored',
            'activity' => 'Civil Status was restored.',
            'table_name' => 'civil_statuses',
            'record_id' => $deduction->id,
        ]);
    }
}
