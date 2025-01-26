import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components';

interface UnsubscribeConfirmationEmailProps {
  email: string;
  plateNumber: string;
}

export const UnsubscribeConfirmationEmail = ({
  email,
  plateNumber,
}: UnsubscribeConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Xác nhận hủy đăng ký nhận thông báo vi phạm giao thông</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>
            Xác nhận hủy đăng ký thành công
          </Heading>

          <Text style={text}>
            Kính gửi,
          </Text>

          <Text style={text}>
            Bạn đã hủy đăng ký nhận thông báo vi phạm giao thông thành công. Dưới đây là thông tin đăng ký đã hủy:
          </Text>

          <div style={infoCard}>
            <Text style={infoItem}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={infoItem}>
              <strong>Biển số xe:</strong> {plateNumber}
            </Text>
          </div>

          <Text style={text}>
            Nếu bạn muốn đăng ký lại, vui lòng truy cập website của chúng tôi.
          </Text>

          <Text style={footer}>
            Trân trọng,<br />
            Hệ thống tra cứu vi phạm giao thông
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f3f4f6',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  margin: '0 auto',
  padding: '32px',
  maxWidth: '600px',
};

const h1 = {
  color: '#1a56db',
  fontSize: '24px',
  fontWeight: '600',
  textAlign: 'center' as const,
  margin: '16px 0 24px',
};

const text = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '16px 0',
};

const infoCard = {
  backgroundColor: '#f9fafb',
  border: '1px solid #f0f0f0',
  borderRadius: '8px',
  padding: '16px',
  margin: '24px 0',
};

const infoItem = {
  color: '#374151',
  fontSize: '16px',
  margin: '8px 0',
};

const footer = {
  color: '#6b7280',
  fontSize: '14px',
  margin: '48px 0 0',
}; 