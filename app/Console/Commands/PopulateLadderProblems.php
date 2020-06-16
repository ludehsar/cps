<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class PopulateLadderProblems extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ladder:generate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generates essential ladder datas and problems';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        DB::unprepared(file_get_contents('Ladders.psql'));
        $this->info('Ladders have been generated successfully.');
        DB::unprepared(file_get_contents('Ladder1Problems.psql'));
        $this->info('Ladder 1 problems have been generated successfully.');
        DB::unprepared(file_get_contents('Ladder2Problems.psql'));
        $this->info('Ladder 2 problems have been generated successfully.');
        DB::unprepared(file_get_contents('Ladder3Problems.psql'));
        $this->info('Ladder 3 problems have been generated successfully.');
        DB::unprepared(file_get_contents('Ladder4Problems.psql'));
        $this->info('Ladder 4 problems have been generated successfully.');
        DB::unprepared(file_get_contents('Ladder5Problems.psql'));
        $this->info('Ladder 5 problems have been generated successfully.');
        DB::unprepared(file_get_contents('Ladder6Problems.psql'));
        $this->info('Ladder 6 problems have been generated successfully.');
        DB::unprepared(file_get_contents('Ladder7Problems.psql'));
        $this->info('Ladder 7 problems have been generated successfully.');
        DB::unprepared(file_get_contents('Ladder8Problems.psql'));
        $this->info('Ladder 8 problems have been generated successfully.');
        DB::unprepared(file_get_contents('Ladder9Problems.psql'));
        $this->info('Ladder 9 problems have been generated successfully.');
        DB::unprepared(file_get_contents('Ladder10Problems.psql'));
        $this->info('Ladder 10 problems have been generated successfully.');
        DB::unprepared(file_get_contents('Ladder11Problems.psql'));
        $this->info('Ladder 11 problems have been generated successfully.');
    }
}
