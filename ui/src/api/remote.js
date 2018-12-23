//const host = 'https://messagernodebackend.herokuapp.com/';
const host = 'http://localhost:5500/';


async function getAllGroups() {
    const res = await fetch(host + 'allGroups', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return await res.json();
}


async function addNewNickname(username) {
    const res = await fetch(host + 'username', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username
        })
    });
    return await res.json();
}

export { addNewNickname, getAllGroups };