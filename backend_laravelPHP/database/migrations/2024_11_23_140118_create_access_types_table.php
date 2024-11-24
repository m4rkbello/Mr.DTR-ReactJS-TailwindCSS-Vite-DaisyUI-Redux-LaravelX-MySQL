<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('access_types', function (Blueprint $table) {
            $table->engine = 'InnoDB'; 
            $table->id(); // This automatically creates an unsignedBigInteger
            $table->string('access_type_name')->nullable();
            $table->string('access_type_description')->nullable();
            $table->integer('access_type_status_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('access_types');
    }
};
