(function () {
	const container = document.getElementById('container');
	const media = document.getElementById('media');

	// Only apply panzoom to images, not videos
	if (media && media.nodeName === 'IMG') {
		panzoom(container, {
			minZoom: 0.6,
		});
	} else if (media && media.nodeName === 'VIDEO') {
		// For videos, we can still apply panzoom but it might behave differently
		panzoom(container, {
			minZoom: 0.6,
		});
	}
}());
