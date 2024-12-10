<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use app\Models\ActivityLogs;

class ActivityLogsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Fetch activity logs with relationships
        return ActivityLogs::with(['createdByUser', 'createdByEmployee', 'updatedByUser', 'updatedByEmployee'])
        ->orderBy('created_at', 'desc')
        ->paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
