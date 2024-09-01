document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('.has-tooltip');
    const tooltipContainer = document.querySelector('.tooltip');
    let activeTooltip = null;

    // if (!tooltipContainer) {
    //     console.log("Tooltip container not found!");
    //     return;
    // }

    tooltips.forEach(tooltip => {
        tooltip.addEventListener('click', function(event) {
            event.preventDefault();

            if (getComputedStyle(tooltipContainer).display === 'block') {
                tooltipContainer.style.display = 'none';
            }

            tooltipContainer.textContent = this.getAttribute('title');

            const rect = this.getBoundingClientRect();
            const position = this.getAttribute('data-position');

            switch (position) {
                case 'top':
                    tooltipContainer.style.top = `${rect.top + window.scrollY - tooltipContainer.offsetHeight - 30}px`;
                    tooltipContainer.style.left = `${rect.left + window.scrollX}px`;
                    break;
                case 'bottom':
                    tooltipContainer.style.left = `${rect.left + window.scrollX}px`;
                    tooltipContainer.style.top = `${rect.bottom + window.scrollY}px`;
                    break;
                case 'left':
                    tooltipContainer.style.left = `${rect.left + window.scrollX - tooltipContainer.offsetWidth - 30}px`;
                    tooltipContainer.style.top = `${rect.top + window.scrollY}px`;
                    break;
                case 'right':
                    tooltipContainer.style.left = `${rect.right + window.scrollX + 5}px`;
                    tooltipContainer.style.top = `${rect.top + window.scrollY}px`;
                    break;
                default:
                    tooltipContainer.style.left = `${rect.left + window.scrollX}px`;
                    tooltipContainer.style.top = `${rect.bottom + window.scrollY + 5}px`;
                    break;
            }

            tooltipContainer.style.display = 'block';
            activeTooltip = this;
        });
    });

    document.addEventListener('click', function(event) {
        if (!event.target.classList.contains('has-tooltip') && !tooltipContainer.contains(event.target)) {
            tooltipContainer.style.display = 'none';
            activeTooltip = null;
        }
    });
});