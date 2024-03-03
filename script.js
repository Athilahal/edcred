document.getElementById('notificationButton').addEventListener('click', function() {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission().then(function(permission) {
            if (permission === 'granted') {
                new Notification('Saque aprovado', {
                    body: 'Você clicou no botão!'
                });
            }
        });
    } else {
        new Notification('Saque aprovado', {
            body: 'Você clicou no botão!'
        });
    }
});
