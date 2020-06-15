<?php

namespace App\Http\Traits;

use App\Models\User;
use App\Jobs\FetchUserCFSubmissions;

trait FetchCFSubmissionTrait
{
    public function fetchUserCFSubmission($id)
    {
        $user = User::find($id);

        if ($user == null) {
            return response('Such user does not exist.', 404);
        }

        // Fetches user cf submissions
        FetchUserCFSubmissions::dispatch($user);

        return response('Codeforces submission will be updated within 5 minutes.', 200);
    }
}