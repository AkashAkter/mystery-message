import {
  Html,
  Head,
  Preview,
  Heading,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
      </Head>
      <Preview>Verify your account with this OTP</Preview>
      <Section>
        <Row>
          <Heading as="h2">Hello {username},</Heading>
        </Row>
        <Row>
          <Text>
            Thank you for registering with us! To complete your registration,
            please use the following One-Time Password (OTP):
          </Text>
        </Row>
        <Row>
          <Text>{otp}</Text>
        </Row>
        <Row>
          <Text>
            This OTP is valid for a limited time. Please use it to verify your
            account.
          </Text>
        </Row>
      </Section>
    </Html>
  );
}
