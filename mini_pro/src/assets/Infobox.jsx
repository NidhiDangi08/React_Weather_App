import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Infobox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import UmbrellaIcon from '@mui/icons-material/Umbrella';

export default function Infobox({ info }) {  // Destructure the `info` prop
  const INIT_URL = "https://images.unsplash.com/photo-1722858344552-7acf888a7046?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const HOT_URL="https://media.istockphoto.com/id/1150229690/photo/silhouette-man-is-drinking-water-bottle-on-hot-weather-background-with-summer-season-high.webp?a=1&b=1&s=612x612&w=0&k=20&c=QJFJGd6mknFooDO0adLbl4496L3rZ1cQ0GtezN7Klkw="
  const COLD_URL="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
  const RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ="
  
  return (
    <div className="Infobox">
      <div className='card'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL || INIT_URL}

            alt="Weather"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? <UmbrellaIcon/>: info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon /> || INIT_URL}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Temperature: {info.temp}&deg;C
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Humidity: {info.humidity}%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Min Temp: {info.tempMin}&deg;
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Max Temp: {info.tempMax}&deg;C
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The weather is described as <i>{info.weather}</i> and feels like: {info.feelsLike}&deg;C
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
