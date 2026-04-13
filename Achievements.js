// ===== Download Button Alert =====
document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Your certificate download will start shortly!');
    });
});

// ===== Timeline Scroll Animation =====
const timelineCards = document.querySelectorAll('.timeline-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('timeline-animate');
        }
    });
},{ threshold: 0.5 });

timelineCards.forEach(card => observer.observe(card));

// ===== Chart.js Pie Chart =====
const ctx = document.getElementById('achievementPie').getContext('2d');
const achievementPie = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Academic', 'Co-Curricular', 'Professional', 'Activities'],
        datasets: [{
            label: 'Achievements',
            data: [30, 25, 20, 25],
            backgroundColor: [
                '#1e3c72',  // Academic - Blue
                '#27ae60',  // Co-Curricular - Green
                '#9b59b6',  // Professional - Purple
                '#f1c40f'   // Activities - Gold
            ],
            borderWidth: 2,
            borderColor: '#fff'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        size: 14,
                        family: 'Roboto Mono'
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context){
                        return `${context.label}: ${context.parsed}% of total`;
                    }
                }
            }
        },
        animation: {
            animateRotate: true,
            animateScale: true
        }
    }
});
