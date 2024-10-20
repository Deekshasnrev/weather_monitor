import requests
from datetime import datetime
from django.utils import timezone


API_KEY = '41052519482ec106862bb50fecc62e54'  # Replace with your actual API key

def fetch_weather_data(city):
    url = "http://api.openweathermap.org/data/2.5/weather"
    response = requests.get(url, params={'q': city, 'appid': API_KEY, 'units': 'metric'})
    
    if response.status_code == 200:
        data = response.json()
        main = data['main']
        weather = data['weather'][0]
        wind = data.get('wind', {})

        weather_data = {
            'city': city,
            'temperature': main['temp'],
            'max_temp': main['temp_max'],
            'min_temp': main['temp_min'],
            'condition': weather['main'],
            'humidity': main.get('humidity', 0.0),
            'wind_speed': wind.get('speed', 0.0),
            'timestamp': timezone.make_aware(datetime.fromtimestamp(data['dt'])).strftime("%Y-%m-%d %H:%M:%S")
        }
        return weather_data
    else:
        print(f"Error fetching data for {city}: {response.status_code}")
        return None
