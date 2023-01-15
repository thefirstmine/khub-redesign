const loginValue = document.cookie.match('(^|;)\\s*' + "login" + '\\s*=\\s*([^;]+)')?.pop() || ''

if (!loginValue) window.location.href = "./login.html";

const logout = () => {
    document.cookie = "login= ;";

    window.location.href = "./login.html"
}