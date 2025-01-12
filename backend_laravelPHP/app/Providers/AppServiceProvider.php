<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use App\Observers\GeneralObserver;
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
        Schema::defaultStringLength(191);
    
        // Register the general observer for all models
        $this->registerGeneralObserver();
    }
    
    private function registerGeneralObserver(): void
    {
        foreach (array_merge(glob(app_path('Models/*.php')), glob(app_path('Models/**/*.php'))) as $modelPath) {
            $modelClass = 'App\\Models\\' . basename($modelPath, '.php');
            if (class_exists($modelClass) && method_exists($modelClass, 'observe')) {
                $modelClass::observe(\App\Observers\GeneralObserver::class);
            }
        }
    }
}
