import React from 'react'

export const Base = () => {
  return (
    <nav class="navbar navbar-expand bg-light navbar-light py-3 fixed-top">
    <div class="container-fluid">
        <a href="{{ url_for('site.home') }}" class="navbar-brand">Whiskey Collection</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu"><span
                class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a href="{{ url_for('site.home') }}" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="{{ url_for('site.profile') }}" class="nav-link">Profile</a>
                </li>
                {% if current_user.is_authenticated %}
                <li class="nav-item">
                    <a href="{{ url_for('auth.logout') }}" class="nav-link">Logout</a>
                </li>
                {% else %}
                <li class="nav-item">
                    <a href="{{ url_for('auth.signin') }}" class="nav-link">Sign In</a>
                </li>
                <li class="nav-item">
                    <a href="{{ url_for('auth.signup') }}" class="nav-link">Sign Up</a>
                </li>
                {% endif %}
            </ul>
        </div>
    </div>
</nav>

  )
}
