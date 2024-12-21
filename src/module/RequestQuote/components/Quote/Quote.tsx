import { Container, Grid } from '@mui/material'
import RequestQuoteForm from '../RequestQuoteForm/RequestQuoteForm'


const Quote = () => {
  return (
    <>
    <Container
    maxWidth={'lg'}>

    <Grid container paddingY={'70px'}>
      <Grid item md={7} padding={'0px 15px'}>
<RequestQuoteForm/>
      </Grid>
    </Grid>
    </Container>
      
    </>
  )
}

export default Quote
