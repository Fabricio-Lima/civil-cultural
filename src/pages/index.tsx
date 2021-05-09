import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  cardBox: {
    maxWidth: 345,
    margin: '2rem auto'

  },
  media: {
    height: 140
  }
})

export default function Home(props) {
  const styles = useStyles(props)

  return (
    <Card className={styles.cardBox}>
      <CardActionArea>
        <CardMedia
          className={styles.media}
          component='img'
          image='https://avatars.githubusercontent.com/u/73488089?s=400&u=1bebef5d05c250c406bf9cae1bbfbbfd778bb207&v=4'
          alt='Civil Cultural'
        />

        <CardContent>
          <Typography gutterBottom component='h2' variant='h4'>
            Civil Cultural
        </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
