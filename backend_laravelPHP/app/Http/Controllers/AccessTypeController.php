<?php

namespace App\Http\Controllers;

use App\Models\AccessType;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Carbon\Carbon;

class AccessTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $access_types = AccessType::all();

        return response()->json([
            'details' => $access_types,
            'success' => true,
            'status' => 201,
            'message' => 'Fetch all Access Type have been successful!',
        ], 201);
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
