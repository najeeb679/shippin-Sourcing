import { Box } from '@mui/material'

import QuoteBanner from '../../components/QuoteBanner/QuoteBanner'
import Quote from '../../components/Quote/Quote'

const RequestQuoteContainer = () => {
  return  (
    <Box component={'section'}>
      <QuoteBanner/>
    <Quote/>
    </Box>
  )
}

export default RequestQuoteContainer
