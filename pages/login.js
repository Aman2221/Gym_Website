import styles from '../styles/Login/Login.module.css'
import Head from "next/head"
import * as loginAnimation from "../Animations/38435-register.json";
import AnimationLottie from '../Animations/AnimationLottie'
import { Formik, Form, Field } from 'formik';
import ErrorMessages from '../components/Error/ErrorMessages'
import * as yup from 'yup';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import KeyIcon from '@mui/icons-material/Key';
import * as React from 'react';
import ErrorMessage from '../components/Error/ErrorMessages'

let validationSchema = yup.object().shape({
  name: yup.string().required('name should be a string'),
  password: yup.number().min(10000000,'8 digit password required !').required('Password is required'),
  email: yup.string().email().required('Email is required'),
});


function Login(){

  let initialValues = { 
    name : '', 
    email: '', 
    password: '',
  }

  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <div className={styles.loginPage}>
        <div className={styles.loginPageDiv}>
          <div className={styles.loginPageDivLeft}>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => console.log(values)}
                validationSchema = {validationSchema}
            >
                {({
                    values,
                    handleSubmit,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className={styles.leftForm}>
                          <Box className={styles.boxStyles}>
                            <FormControl sx={{width: '300px', fontFamily: 'Poppins' }} variant="outlined">
                              <InputLabel htmlFor="name">Name</InputLabel>                               
                              <Field
                                as={OutlinedInput}
                                id="outlined-adornment-name"
                                type='text'
                                endAdornment={<AccountCircle />}
                                name="name"
                                label="name"
                                fullWidth
                                required
                              />
                              <ErrorMessages name='name' />
                            </FormControl>
                          </Box>

                          <Box className={styles.boxStyles}>
                            <FormControl sx={{ width: '300px' }} variant="outlined">
                              <InputLabel htmlFor="password">Password</InputLabel>
                              <Field
                                as={OutlinedInput}
                                id="outlined-adornment-password"
                                type='password'
                                endAdornment={<KeyIcon />}
                                name="password"
                                label='password'
                                fullWidth
                                required
                              />
                              <ErrorMessages name='password' />
                            </FormControl>
                          </Box>

                          <Box className={styles.rememberMe}>
                            <FormControlLabel control={<Checkbox defaultChecked />} style={{color:'grey'}} label="Remember me" />
                            <Button type="submit" variant="contained" color="success">Login</Button>
                          </Box>

                          <Box width='100%' sx={{ display: 'flex', justifyContent: 'space-between',alignItems: 'center', marginTop : '10px'}}>
                            <Link href="#" underline="none"><small>Register Now</small></Link>
                            <Link href="#" underline="hover"><small>Forgot Password</small></Link>
                          </Box>

                          <Box width='100%'><Divider ><small color='grey'>Or</small></Divider></Box>
                          
                          <Box sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center', width: '100%'}}>
                            
                            <Button className={styles.loginButtons} style={{backgroundColor : '#F44133', color : '#fff'}}  startIcon={<GoogleIcon />}>login with google</Button>
                            <Button className={styles.loginButtons} style={{backgroundColor : '#3A5999', color : '#fff'}}  startIcon={<FacebookIcon />}>login with facebook</Button>
                            <Button className={styles.loginButtons} style={{backgroundColor : '#06ABED', color : '#fff'}}  startIcon={<TwitterIcon />}>login with twitter</Button>
                          </Box>
                      </div>
                    </Form>
                )}
            </Formik>
          </div>
          <div className={styles.loginPageDivRight}>
            <AnimationLottie lottieFile={loginAnimation} />
          </div>
        </div>  
      </div>
    </>
  )
}

export default Login