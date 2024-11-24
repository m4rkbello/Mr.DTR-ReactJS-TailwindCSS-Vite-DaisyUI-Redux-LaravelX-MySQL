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
            $table->engine = 'InnoDB';  // Ensure the table uses InnoDB
            $table->id();
            $table->string('user_firstname');
            $table->string('user_lastname');
            $table->string('user_email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->bigInteger('user_contact_no');
            $table->string('user_password');
            $table->integer('user_type_id')->nullable();
            $table->string('user_image')->nullable();
            $table->unsignedBigInteger('access_type_id')->nullable();  // Ensure it matches 'access_types.id'
            $table->foreign('access_type_id')
                  ->references('id')->on('access_types')
                  ->onDelete('set null');
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::table('users', function (Blueprint $table) {
            if (Schema::hasTable('access_types')) {
                $table->foreign('access_type_id')
                      ->references('id')
                      ->on('access_types')
                      ->onDelete('set null');
            }
        });   
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['access_type_id']);
        });

        Schema::dropIfExists('users');
    }
};
