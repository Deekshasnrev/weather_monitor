# weather/models.py

from django.db import models

class DailyWeatherSummary(models.Model):
    city = models.CharField(max_length=50)
    timestamp = models.DateTimeField()
    average_temp = models.FloatField()
    max_temp = models.FloatField()
    min_temp = models.FloatField()
    dominant_condition = models.CharField(max_length=50)
    humidity = models.FloatField(default=0.0)  # Changed from IntegerField if it was defined as such
    wind_speed = models.FloatField(default=0.0)

    def __str__(self):
        return f"{self.timestamp}: {self.dominant_condition}"
    
class WeatherThreshold(models.Model):
    city = models.CharField(max_length=100)
    temperature_threshold = models.FloatField()
    condition_threshold = models.CharField(max_length=100) 
    humidity_threshold = models.FloatField(default=0)  
    wind_speed_threshold = models.FloatField(default=0) 
    consecutive_updates = models.IntegerField(default=3)  # Number of consecutive updates for alert
    alert_message = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f"Threshold for {self.city}: Temp > {self.temperature_threshold}°C, Condition: {self.condition_threshold}"
