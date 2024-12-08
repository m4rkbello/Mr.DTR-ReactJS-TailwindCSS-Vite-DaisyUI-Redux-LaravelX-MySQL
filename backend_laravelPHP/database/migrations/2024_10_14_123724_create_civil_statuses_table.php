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
        Schema::create('civil_statuses', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->id();
            $table->string('civil_status_title', 255)->nullable();
            $table->string('civil_status_description', 255)->nullable();
            $table->integer('civil_status_status_id')->nullable();
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();      
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('civil_statuses');
    }
};
