<!-- Navbar -->
<nav id="navbar-main" class="navbar navbar-main navbar-expand-lg navbar-dark bg-default headroom z-1000">
    <div class="container">
        <a class="navbar-brand mr-lg-5" href="{{ route('home') }}">
            {{ config('app.name', 'CPS') }}
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbar_global">
            <div class="navbar-collapse-header">
                <div class="row">
                    <div class="col-6 collapse-brand">
                        <a href="{{ route('home') }}">
                            {{ config('app.name', 'CPS') }}
                        </a>
                    </div>
                    <div class="col-6 collapse-close">
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                @auth
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('ladders') }}">Ladders</a>
                    </li>
                @endauth
                @if (!Auth::guest() && Auth::user()->is_admin)
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('dashboard') }}">Admin Dashboard</a>
                    </li>
                @endif
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                @guest
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('login') }}">Login</a>
                </li>
                <li class="nav-item ml-lg-4">
                    <a href="{{ route('register') }}" class="btn btn-neutral btn-icon">
                        <span class="btn-inner--icon">
                            <i class="fas fa-address-book"></i>
                        </span>
                        <span class="nav-link-inner--text">Register Now!</span>
                    </a>
                </li>
                @else
                <li class="nav-item dropdown">
                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ Auth::user()->username }} <span class="caret"></span>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a href="{{ route('user_profile') }}" class="dropdown-item">Profile</a>
                        <a href="{{ route('user_settings') }}" class="dropdown-item">Settings</a>
                        <a class="dropdown-item" href="{{ route('logout') }}"
                           onclick="event.preventDefault();
                                         document.getElementById('logout-form').submit();">
                            {{ __('Logout') }}
                        </a>

                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form>
                    </div>
                </li>
                @endguest
            </ul>
        </div>
    </div>
</nav>
<!-- End Navbar -->