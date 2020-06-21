<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use GuzzleHttp\Client;
use App\Models\CFSubmission;

class FetchUserCFSubmissions implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $user;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($user)
    {
        $this->user = $user;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // Requests for all submission
        $client = new Client();
        $res = $client->get('https://codeforces.com/api/user.status?handle=' . $this->user->cf_handle)->getBody();

        $res = json_decode($res);

        if ($res->status == "OK") {
            foreach ($res->result as $submission) {
                if ($submission->verdict == "OK" && $submission->testset == "TESTS" && isset($submission->contestId)) {
                    $previousSameSubmission = CFSubmission::where('user_id', $this->user->id)->where('contest_id', $submission->contestId)->where('problem_index', $submission->problem->index)->first();

                    if ($previousSameSubmission != null) {
                        if ($previousSameSubmission->submission_id < $submission->id) $previousSameSubmission->delete();
                        else continue;
                    }

                    CFSubmission::create([
                        'user_id' => $this->user->id,
                        'submission_id' => $submission->id,
                        'contest_id' => $submission->contestId,
                        'problem_index' => $submission->problem->index,
                        'problem_title' => $submission->problem->name,
                        'problem_url' => 'https://codeforces.com/problemset/problem/' . $submission->contestId . '/' . $submission->problem->index,
                    ]);
                }
            }
        }

        $this->user->invalid_cf_handle = 0;
        $this->user->save();
    }

    /**
     * The job failed to process.
     *
     * @param  Exception  $exception
     * @return void
     */
    public function failed(Exception $exception)
    {
        $this->user->invalid_cf_handle = 1;
        $this->user->save();
    }
}
