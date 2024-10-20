import json
from django.http import JsonResponse
from django.shortcuts import render
from .models import DailyWeatherSummary, WeatherThreshold
from .utils import fetch_weather_data

def weather_summary(request):
    # Render the weather summary page
    return render(request, 'summary.html')

def fetch_weather_api(request):
    city = request.GET.get('city')
    if not city:
        return JsonResponse({'error': 'City parameter is missing'}, status=400)

    # Call the function to fetch data directly from the OpenWeatherMap API
    weather_data = fetch_weather_data(city)

    if not weather_data:
        return JsonResponse({'error': 'Could not fetch data from the API'}, status=500)

    return JsonResponse(weather_data)
