function toggleDescription(index) {
    var descriptions = document.querySelectorAll('.timeline-description');
    descriptions[index].style.display = descriptions[index].style.display === 'none' ? 'block' : 'none';
}
