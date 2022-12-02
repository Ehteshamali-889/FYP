import React from 'react';
import { View, ActivityIndicator } from 'react-native'; 
import { InfoText,EmphasizeText,InlineGroup,TextLink,TextLinkContent,Colors } from './styles';

const {brand}=Colors;

const ResendTimer = ({
    activeResend,resendEmail,resendingEmail,resendStatus,timeleft,targetTime
}) => {
  return (
    <View>
      <InlineGroup>
        <InfoText>Did not recieve the email?</InfoText>
        {!resendingEmail && (
          <TextLink style={{ opacity: !activeResend && 0.5 }} disabled={!activeResend} onPress={resendEmail}>
            <TextLinkContent
              resendStatus={resendStatus}
              style={{
                textDecorationLine: 'underline',
              }}
            >
              {resendStatus}
            </TextLinkContent>
          </TextLink>
        )}

        {resendingEmail && (
          <TextLink disabled>
            <TextLinkContent>
              <ActivityIndicator colo={brand} />
            </TextLinkContent>
          </TextLink>
        )}
      </InlineGroup>
      {!activeResend && (
        <InfoText>
          in <EmphasizeText>{timeleft || targetTime }</EmphasizeText>seconds(s)
        </InfoText>
      )}
    </View>
  );
};

export default ResendTimer;
