<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class AccessTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (DB::table('access_types')->count() === 0) {
            DB::table('access_types')->insert([
                [
                    'access_type_name' => 'superAdmin',
                    'access_type_description' => 'PinakaGahi sa Tanan',
                    'access_type_status_id' => 1,
                    'created_by' => 1,
                    'updated_by' => 1,
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'access_type_name' => 'employee',
                    'access_type_description' => 'Employee Lang Ka',
                    'access_type_status_id' => 2,
                    'created_by' => 1,
                    'updated_by' => 1,
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
            ]);
        }
    }
    
}
