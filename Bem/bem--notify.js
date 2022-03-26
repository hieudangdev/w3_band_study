function toast({ title = '', msg = '', type = 'success', duration = '' }) {
	const main = document.getElementById('toast');

	if (main) {
		const toast = document.createElement('div');

		const icons = {
			success: 'fas fa-check-circle',
			info: 'fas fa-info-circle',
			warning: 'fas fa-exclamation-circle',
			error: 'fas fa-exclamation-circle',
		};

		const icon = icons[type];

		const autoremoveID = setTimeout(() => {
			main.removeChild(toast);
		}, duration + 2000);

		toast.onclick = function (e) {
			if (e.target.closest('.toast__close')) {
				main.removeChild(toast);
				clearTimeout(autoremoveID);
			}
		};
		const delay = (duration / 1000).toFixed(2);
		toast.style.animation = `sideinleft ease .3s, fadeout linear 2s ${delay}s forwards`;

		toast.classList.add('toast', `toast--${type}`);
		toast.innerHTML = `

      <div class="toast__icon">
          <i class='${icon}'></i>
      </div>
      <div class="toast__body">
          <h3 class="toast__title"> ${title} </h3>
          <p class="toast__msg">${msg}</p>
      </div>
      <div class="toast__close">
          <i class="fas fa-times"></i>
      </div>

    `;

		main.appendChild(toast);
	}
}
