// js/auth.js

// Validates credentials against localStorage users
function login(email, password) {
    const users = getUsers(); // from data.js
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Create session
        const sessionPayload = {
            id: user.id,
            email: user.email,
            role: user.role,
            name: user.name,
            parastatal_id: user.parastatal_id || null
        };
        sessionStorage.setItem('bw_current_user', JSON.stringify(sessionPayload));
        return { success: true, user: sessionPayload };
    }
    return { success: false, error: "Invalid email or password" };
}

// Clears session
function logout() {
    sessionStorage.removeItem('bw_current_user');
    window.location.href = 'login.html';
}

// Returns current user or null
function getCurrentUser() {
    const userStr = sessionStorage.getItem('bw_current_user');
    return userStr ? JSON.parse(userStr) : null;
}

// Middleware: Call this on protected pages
function requireAuth() {
    const user = getCurrentUser();
    if (!user) {
        window.location.href = 'login.html';
    }
    return user;
}
