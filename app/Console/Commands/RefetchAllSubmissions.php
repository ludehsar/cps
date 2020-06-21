<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Http\Traits\FetchCFSubmissionTrait;
use App\Models\User;

class RefetchAllSubmissions extends Command
{
    use FetchCFSubmissionTrait;
    
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fetch:submissions';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetches all users submission.';

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
        $users = User::all();

        foreach ($users as $user) {
            $this->fetchUserCFSubmission($user->id);
        }
    }
}
