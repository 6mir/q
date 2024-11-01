function CreateArticHtml(image, title, id) {
  return `
        <a href="song.html?singer=${id}">
            <div class="img">
                <img src="${image}" alt="${title}">
            </div>
            <h3>${title}</h3>
            </a>
    `;
}

function CreateSongAndRemixHtml(item) {
  return `
        <div class="item">
            <div class="right">
                <div class="img">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="text">
                    <p class="n-music">${item.title}</p>
                    <p class="name">${item.artist}</p>
                </div>
            </div>
            <div class="left">
                <img src="svg/p.svg" class="play-btn" onclick="playMusic('${item.file}', '${item.title}', '${item.artist}', '${item.image}', this)">
                <img src="svg/d.svg" id="download-btn" onclick="downloadMusic('${item.file}')">
            </div>
        </div>
    `;
}
