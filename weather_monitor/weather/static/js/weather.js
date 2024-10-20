document.addEventListener('DOMContentLoaded', function () {
    let weatherChart;

    document.getElementById('citySelect').addEventListener('change', function () {
        const selectedCity = this.value;
        if (selectedCity) {
            fetchWeatherData(selectedCity);
        } else {
            console.error("Please select a city.");
        }
    });

    function fetchWeatherData(city) {
        fetch(`/weather/api/fetch_weather/?city=${city}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    console.error(data.error);
                } else {
                    displayWeatherData(data);
                    updateChart(data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function displayWeatherData(data) {
        const weatherTableBody = document.getElementById('weatherTableBody');
        weatherTableBody.innerHTML = `
            <tr>
                <td>${data.temperature}</td>
                <td>${data.max_temp}</td>
                <td>${data.min_temp}</td>
                <td>${data.condition}</td>
                <td>${data.humidity}</td>
                <td>${data.wind_speed}</td>
            </tr>
        `;
    }

    function createChart() {
        const ctx = document.getElementById('weatherChart').getContext('2d');
        weatherChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [], // Timestamps will be added dynamically
                datasets: [
                    {
                        label: 'Temperature (°C)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        data: [],
                        fill: false,
                    },
                    {
                        label: 'Max Temperature (°C)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        data: [],
                        fill: false,
                    },
                    {
                        label: 'Min Temperature (°C)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        data: [],
                        fill: false,
                    },
                    {
                        label: 'Humidity (%)',
                        borderColor: 'rgba(153, 102, 255, 1)',
                        data: [],
                        fill: false,
                    },
                    {
                        label: 'Wind Speed (m/s)',
                        borderColor: 'rgba(255, 159, 64, 1)',
                        data: [],
                        fill: false,
                    },
                ]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        type: 'category',
                        title: {
                            display: true,
                            text: 'Timestamp'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Value'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                    },
                    
                }
            }
        });
    }

    function updateChart(data) {
        if (!weatherChart) {
            createChart();
        }

        // Update the chart data
        const timestamp = data.timestamp;

        // Add the timestamp and values to the chart
        weatherChart.data.labels.push(timestamp);
        weatherChart.data.datasets[0].data.push(data.temperature);
        weatherChart.data.datasets[1].data.push(data.max_temp);
        weatherChart.data.datasets[2].data.push(data.min_temp);
        weatherChart.data.datasets[3].data.push(data.humidity);
        weatherChart.data.datasets[4].data.push(data.wind_speed);

        // Update the chart to reflect the new data
        weatherChart.update();
    }
});
