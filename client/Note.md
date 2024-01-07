# STEPS

## SPLIT COMPONENTS BASED ON RESPONSIBILITY

- App
  - WeatherCard
    - CurrentCity
      - Date
      - Name
      - Temperature
      - TemperatureRange
      - WeatherIcon
      - Meta
        - Humidity
        - Wind
        - AirQuality
        - Somatosensory
    - Forecast
      - DayOfWeek[]
        - Name
        - Date
        - WeatherIcon
        - TemperatureRange
    - SearchBar
      - Input
      - Button
    - OtherCities
      - City[]
        - WeatherIcon
        - Name
        - TemperatureRange

## EXTRACT COMMON COMPONENTS

- WeatherIcon
- TemperatureRange
- Name
- Date
- BackgroundImage
