let data = [
    {
        name: 'Akunne Emmanuel',
        age: '16'
    }
];

const info = document.querySelector('.yourname');

let details = data.map(function(caller) {
    return '<div>' + caller.name  + ' ' + 'is ' + caller.age + ' years old' +  '</div>';
});

info.innerHTML = details.join('\n');