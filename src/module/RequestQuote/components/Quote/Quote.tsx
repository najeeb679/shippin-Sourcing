import { Container, Grid ,Typography} from '@mui/material'
import RequestQuoteForm from '../RequestQuoteForm/RequestQuoteForm'
import { COLORS } from '@muc/constant'


const Quote = () => {
  return (
    <>
    <Container
    maxWidth={'lg'} sx={{paddingY:'70px'}}>
 <Typography
        variant="body1"
        fontSize={"36px"}
        fontFamily={"Exo"}
        mb={"30px"}
        fontWeight={800}
        color={COLORS.Black}
      >
        Request Quote
      </Typography>
    <Grid container   >
   
      <Grid item md={6.5} xs={12}  >
<RequestQuoteForm/>
      </Grid>
      <Grid item md={5.5} xs={12} padding={{sm:'0px 15px',xs:0}}>
        <img src="assets/Images/quote.jpg" width={'100%'} style={{objectFit:'cover',objectPosition:'center',borderRadius:'10px',minHeight:'250px'}} alt="" />

      </Grid>
    </Grid>
    </Container>
      
    </>
  )
}

export default Quote
