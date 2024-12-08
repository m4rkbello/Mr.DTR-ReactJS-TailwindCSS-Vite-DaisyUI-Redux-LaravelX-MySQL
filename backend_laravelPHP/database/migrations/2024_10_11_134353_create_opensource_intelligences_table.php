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
        Schema::create('open_source_intelligences', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->id(); // Auto-incrementing primary key
            $table->string('osint_public_ip', 45)->nullable();
            $table->decimal('osint_latitude', 11, 8)->nullable();
            $table->decimal('osint_longitude', 11, 8)->nullable();
            $table->foreignId('osint_employee_id')->nullable()->constrained('employees');
            $table->foreignId('osint_user_id')->nullable()->constrained('users');
            $table->integer('osint_status_id')->nullable();
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
        Schema::dropIfExists('open_source_intelligences');
    }
};
