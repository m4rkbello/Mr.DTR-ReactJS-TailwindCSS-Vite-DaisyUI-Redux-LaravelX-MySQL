<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->engine = 'InnoDB';
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
            $table->foreign('created_by')
                ->references('id')
                ->on('users')
                ->onDelete('set null');
        
            $table->foreign('updated_by')
                ->references('id')
                ->on('users')
                ->onDelete('set null');
            
            $table->timestamps();
        });



        // Add foreign key constraint separately
        Schema::table('users', function (Blueprint $table) {
            $table->foreign('access_type_id')
                  ->references('id')
                  ->on('access_types')
                  ->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeignIfExists('access_type_id');
        });

        Schema::dropIfExists('users');
    }
};