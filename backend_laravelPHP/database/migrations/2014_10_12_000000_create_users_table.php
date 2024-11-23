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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('user_firstname');
            $table->string('user_lastname');
            $table->string('user_email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->bigInteger('user_contact_no');
            $table->string('user_password');
            $table->integer('user_type_id')->nullable();
            $table->string('user_image')->nullable();
            $table->unsignedBigInteger('access_type_id')->nullable(); 
            $table->rememberToken();
            $table->timestamps();

            //FOREIGN KEY ANG USER NAAY ISA KA ACCESS_TYPE
            $table->foreign('access_type_id')
            ->references('id')
            ->on('access_types');
        });


    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
