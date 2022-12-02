import { Octicons,Ionicons } from '@expo/vector-icons'
import React,{useState,useEffect} from 'react'

import {
  StyledContainer,
  TopHalf,
  BottomHalf,
  PageTitle,
  IconBg,
  Colors,
  InfoText,
  EmphasizeText,
  StyledButton,
  ButtonText,
} from '../components/styles';

const { brand, primary, green } = Colors;

import ResendTimer from '../components/ResendTimer';

const LinkVerification = () => {
    const [resendingEmail,setResendingEmail]=useState(false); 
    const [resendStatus,setResendStatus]=useState('Resend');
    const [timeleft,setTimeLeft]=useState(null);
    const [targetTime,setTargetTime]=useState(null);
    const [actieResend, setActiveResend] = useState(false);
    let resendTimerInterval;
    const calculateTimeLeft=(finalTime)=>{
        const difference=finalTime - +new Date();
        if(difference>=0){
            setTimeLeft(Math.round(difference/1000))
        }
        else{
            setTimeLeft(null);
            clearInterval(resendTimerInterval);
            setActiveResend(true);
        }
    }
    const triggerTimer=(targetTimeInSeconds=30)=>{
        setTargetTime(targetTimeInSeconds);
        setActiveResend(false);
        const finalTime=+new Date()+targetTimeInSeconds*1000;
        resendTimerInterval=setInterval(()=>(
            calculateTimeLeft(finalTime),1000
        ))
    }
    useEffect(()=>{
        triggerTimer();
        return()=>{
            clearInterval(resendTimerInterval)
        }
    },[])
    const resendEmail=async()=>{

    }
  return (
    <StyledContainer style={{
        alignItems:'center'
    }} >
        <TopHalf>
            <IconBg>
                <Octicons name='mail' size={125} color={brand} />
            </IconBg>
        </TopHalf>
        <BottomHalf>
            <PageTitle style={{fontSize:25}}>Account Verification</PageTitle>
            <InfoText>
                Please verify your email using the link sent to email.
                <EmphasizeText>webdeveloper3628@gmail.com</EmphasizeText>
            </InfoText>
            <StyledButton onPress={()=>{}}
            style={{backgroundColor:green,flexDirection:'row'}}
            >
                <ButtonText>Proceed </ButtonText>
                <Ionicons name="arrow-forward-circle" size={25} color={primary} />
            </StyledButton>
            <ResendTimer
            activeResend={actieResend}
            resendingEmail={resendingEmail}
            resendStatus={resendStatus}
            timeleft={timeleft}
            targetTime={targetTime}
            resendEmail={resendEmail}
            />
        </BottomHalf>
    </StyledContainer>
  )
}

export default LinkVerification