// import Head from 'next/head';
// import NextLink from 'next/link';
import { Box,  Container, Typography } from '@mui/material';
import { Button,IconButton } from 'react-native-paper';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigation } from '@react-navigation/native';

import image from '../assets/4042.svg'

const Page = () => {
    const navigation = useNavigation();
    return(
        <>
        <Box style={{marginTop:20}}>
        <Typography style={{fontWeight:'bold'}}>
            Sorry No content found to Required Query
          </Typography>
        </Box>
          

        <Box
          component="main"
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexGrow: 1,
            minHeight: '100%'
          }}
        >
          <Container maxWidth="md">
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
            
              <Box sx={{ textAlign: 'center' }}>
                <img
                  alt="Under development"
                  src={image}
                  style={{
                    marginTop:90,
                    marginBottom: 0,
                    display: 'inline-block',
                    maxWidth: '100%',
                    width: 460
                  }}
                />
              </Box>
              {/* <NextLink
                href="/"
                passHref
              > */}
                <Button
                    onPress={() => navigation.navigate('Menu')}
                  component="a"
                //   startIcon={(<ArrowBackIcon fontSize="small" />)}
                  sx={{ mt: 3 }}
                  mode="contained"
                >
                  Go back to dashboard
                </Button>
              {/* </NextLink> */}
            </Box>
          </Container>
        </Box>
      </>
    )
  
};

export default Page;
