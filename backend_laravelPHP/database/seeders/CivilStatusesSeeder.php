<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CivilStatusesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        if (DB::table('civil_statuses')->count() === 0) {
        DB::table('civil_statuses')->insert([
            [
                'civil_status_title' => 'Single',
                'civil_status_description' => 'A person who is not married.',
                'civil_status_status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'civil_status_title' => 'Married',
                'civil_status_description' => 'A person who is legally married.',
                'civil_status_status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'civil_status_title' => 'Widowed',
                'civil_status_description' => 'A person whose spouse has passed away.',
                'civil_status_status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'civil_status_title' => 'Divorced',
                'civil_status_description' => 'A person who has legally ended a marriage.',
                'civil_status_status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'civil_status_title' => 'Separated',
                'civil_status_description' => 'A person who is no longer living with their spouse.',
                'civil_status_status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    };
    }
}
