<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('access_types', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->id();
            $table->string('access_type_name')->nullable();
            $table->string('access_type_description')->nullable();
            $table->integer('access_type_status_id')->nullable();
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();      
            $table->timestamps();
        });
        
    }

    public function down(): void
    {
        Schema::dropIfExists('access_types');
    }
};