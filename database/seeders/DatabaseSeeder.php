<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();
        \App\Models\Category::factory(100)->create();

        \App\Models\User::factory()->create([
            'name' => 'Moises Linares',
            'email' => 'elnaufrago2009@gmail.com',
            'password' => bcrypt('moiseslinar3s'),
        ]);
    }
}
