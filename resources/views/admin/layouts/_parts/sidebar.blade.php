<!-- Sidenav -->
<nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
    <div class="scrollbar-inner">
        <!-- Brand -->
        <div class="sidenav-header  align-items-center">
            <a class="navbar-brand" href="javascript:void(0)">
                CPS
            </a>
        </div>
        <div class="navbar-inner">
            <!-- Collapse -->
            <div class="collapse navbar-collapse" id="sidenav-collapse-main">
                <!-- Nav items -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link {{ (Route::is('dashboard')) ? 'active' : '' }}" href="{{ route('dashboard') }}">
                            <i class="ni ni-tv-2 text-primary"></i>
                            <span class="nav-link-text">Dashboard</span>
                        </a>
                    </li>
                </ul>
                <!-- Divider -->
                <hr class="my-3" />
                <!-- Heading -->
                <h6 class="navbar-heading p-0 text-muted">
                    <span class="docs-normal">Management</span>
                </h6>
                <!-- Navigation -->
                <ul class="navbar-nav mb-md-3">
                    <li class="nav-item">
                        <a class="nav-link {{ (Route::is('admin-ladder-list')) ? 'active' : '' }}" href="{{ route('admin-ladder-list') }}">
                            <i class="ni ni-folder-17 text-yellow"></i>
                            <span class="nav-link-text">Ladders</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ (Route::is('admin-user-list')) ? 'active' : '' }}" href="{{ route('admin-user-list') }}">
                            <i class="ni ni-circle-08 text-red"></i>
                            <span class="nav-link-text">Users</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ (Route::is('admin-course-list')) ? 'active' : '' }}" href="{{ route('admin-course-list') }}">
                            <i class="ni ni-books text-orange"></i>
                            <span class="nav-link-text">Courses</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>