function manejarAudio(gifId, audioId) {
    const gif = document.getElementById(gifId);
    const audio = document.getElementById(audioId);

    // Reproducir audio al pasar el mouse sobre el GIF
    gif.addEventListener('mouseenter', () => {
        audio.play();
    });

    // Pausar el audio cuando el mouse sale del GIF
    gif.addEventListener('mouseleave', () => {
        audio.pause();
        audio.currentTime = 0; // Reinicia el audio desde el principio
    });
}

// Llamadas a la función para cada par de GIF y audio
manejarAudio('hola', 'audio');
manejarAudio('gif2', 'audio2');
manejarAudio('gif3', 'audio3');
manejarAudio('gif4', 'audio4');
manejarAudio('gif5', 'audio5');
manejarAudio('gif6', 'audio6');
manejarAudio('gif7', 'audio7');
manejarAudio('gif8', 'audio8');
manejarAudio('gif9', 'audio9');
manejarAudio('gif10', 'audio10');
manejarAudio('gif11', 'audio11');
manejarAudio('gif12', 'audio12');
manejarAudio('gif13', 'audio13');
