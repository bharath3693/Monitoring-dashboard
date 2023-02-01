
export function verify() {
    var username = sessionStorage.getItem("username");
    var token = sessionStorage.getItem("token");
    return fetch("/profileverify", {
        method: "post",
        body: JSON.stringify({ username, token }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then((verification) => {
            return verification;
        })
}