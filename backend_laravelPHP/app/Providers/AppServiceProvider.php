<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use App\Models\Employee;
use App\Observers\EmployeeObserver;
use App\Models\User;
use App\Observers\UserObserver;
use App\Models\AccessType;
use App\Observers\AccessTypeObserver;
use App\Models\Attendance;
use App\Observers\AttendanceObserver;
use App\Models\ActivityLogs;
use App\Observers\ActivityLogsObserver;



class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
        Schema::defaultStringLength(191);

        // Register User/Employee Observer
        User::observe(UserObserver::class);
        Employee::observe(EmployeeObserver::class);
        AccessType::observe(AccessTypeObserver::class);
        ActivityLogs::observe(ActivityLogsObserver::class);
        Attendance::observe(AttendanceObserver::class);
        


    }
}
