const loginValue = document.cookie.match('(^|;)\\s*' + "login" + '\\s*=\\s*([^;]+)')?.pop() || ''

if (!loginValue) {
    if (window.location.href.includes("courses/cs")) {
        window.location.replace("../../login.html")
    } else {
        window.location.replace("./login.html")
    }
}

const logout = () => {
    document.cookie = "login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    if (window.location.href.includes("courses/cs")) {
        window.location.replace("../../login.html")
    } else {
        window.location.replace("./login.html")
    }
}