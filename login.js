const loginValue = document.cookie.match('(^|;)\\s*' + "login" + '\\s*=\\s*([^;]+)')?.pop() || ''

if (!loginValue) window.location.href = "/login.html";

const logout = () => {
    document.cookie = "login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    window.location.href = "/login.html"
}