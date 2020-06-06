<?php

namespace App\Http\Middleware;

use Auth, Closure;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Auth::guest() || Auth::user()->is_admin != true) {
            return abort(404);
        }
        
        return $next($request);
    }
}
