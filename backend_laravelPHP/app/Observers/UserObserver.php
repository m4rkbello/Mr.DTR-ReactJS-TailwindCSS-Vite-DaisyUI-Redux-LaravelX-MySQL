<?php

namespace App\Observers;

use App\Models\User;
use App\Models\ActivityLogs;
use Illuminate\Support\Facades\Auth;

class UserObserver
{
    /**
     * Handle the User "created" event.
     */
    public function created(User $user): void
    {
        // Create activity log when a user is created
        ActivityLogs::create([
            'title' => 'User Created',
            'activity' => 'A new user account was created.',
            'table_name' => 'users',
            'record_id' => $user->id,
            'created_by_user_id' => Auth::id(),  // Assumes that the logged-in user is the creator
        ]);
    }

    /**
     * Handle the User "updated" event.
     */
    public function updated(User $user): void
    {
        // Create activity log when a user is updated
        ActivityLogs::create([
            'title' => 'User Updated',
            'activity' => 'User account details were updated.',
            'table_name' => 'users',
            'record_id' => $user->id,
            'updated_by_user_id' => Auth::id(),  // Assumes that the logged-in user is the updater
        ]);
    }

    /**
     * Handle the User "deleted" event.
     */
    public function deleted(User $user): void
    {
        // Create activity log when a user is deleted
        ActivityLogs::create([
            'title' => 'User Deleted',
            'activity' => 'A user account was deleted.',
            'table_name' => 'users',
            'record_id' => $user->id,
            'updated_by_user_id' => Auth::id(),  // Assumes that the logged-in user is the deleter
        ]);
    }

    /**
     * Handle the User "restored" event.
     */
    public function restored(User $user): void
    {
        // Optionally log when a user is restored
        ActivityLogs::create([
            'title' => 'User Restored',
            'activity' => 'A user account was restored.',
            'table_name' => 'users',
            'record_id' => $user->id,
            'updated_by_user_id' => Auth::id(),  // Assumes that the logged-in user is the restorer
        ]);
    }

    /**
     * Handle the User "force deleted" event.
     */
    public function forceDeleted(User $user): void
    {
        // Optionally log when a user is permanently deleted
        ActivityLogs::create([
            'title' => 'User Force Deleted',
            'activity' => 'A user account was permanently deleted.',
            'table_name' => 'users',
            'record_id' => $user->id,
            'updated_by_user_id' => Auth::id(),  // Assumes that the logged-in user is the force deleter
        ]);
    }
}
