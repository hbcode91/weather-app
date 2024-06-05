export interface LocationWeather {
  time: string;
  interval: number;
  temperature_2m: number;
  relative_humidity_2m: number;
  "cloud_cover": number;
  "wind_speed_10m": number;
  "wind_direction_10m": number;
  "visibility": number;
  "is_day": number;
}
