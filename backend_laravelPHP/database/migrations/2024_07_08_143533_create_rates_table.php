<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRatesTable extends Migration
{
    public function up(): void
    {
        if (!Schema::hasTable('rates')) {
            Schema::create('rates', function (Blueprint $table) {
                $table->id();
                $table->string('rate_name', 255)->nullable();
                $table->decimal('rate_amount_per_day', 10, 2)->nullable();
                $table->string('rate_details', 255)->nullable();
                $table->string('rate_description', 255)->nullable();
                $table->unsignedBigInteger('rate_status_id')->nullable();
                $table->foreignId('rate_department_id')->nullable()->constrained('departments');
                $table->unsignedBigInteger('created_by')->nullable();
                $table->unsignedBigInteger('updated_by')->nullable();
                $table->foreign('created_by')->references('id')->on('users'); 
                $table->foreign('updated_by')->references('id')->on('users'); 
                $table->timestamps();
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('rates');
    }
}
