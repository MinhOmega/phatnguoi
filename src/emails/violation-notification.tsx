import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
  Row,
  Column,
} from '@react-email/components';
import { ViolationResponse } from '@/app/actions/check-plate';
import { formatDate } from '@/lib/utils';
import { generateUnsubscribeHash } from "@/lib/hash";

interface EmailTemplateProps {
  violations: ViolationResponse[];
  plateNumber: string;
  subscriberEmail: string;
}

export const ViolationNotificationEmail = ({
  violations,
  plateNumber,
  subscriberEmail,
}: EmailTemplateProps) => {
  const previewText = violations.length > 0
    ? `Có ${violations.length} vi phạm mới cho biển số ${plateNumber}`
    : `Không có vi phạm mới cho biển số ${plateNumber}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header Section */}
          <Section style={header}>
            <Heading style={title}>
              Thông báo vi phạm giao thông
            </Heading>
          </Section>

          {/* Content Section */}
          <Section style={content}>
            <Text style={greeting}>
              Kính gửi,
            </Text>

            <Text style={summary}>
              Dưới đây là thông tin vi phạm giao thông của biển số <span style={highlight}>{plateNumber}</span>:
            </Text>

            {violations.length > 0 ? (
              <Section style={violationsContainer}>
                {violations.map((violation, index) => (
                  <div key={index} style={violationCard}>
                    <Row>
                      <Column>
                        <Text style={violationHeader}>
                          Vi phạm {index + 1}/{violations.length}
                        </Text>
                      </Column>
                    </Row>
                    <Row style={violationDetails}>
                      <Column>
                        <Text style={detailItem}>
                          <span style={detailLabel}>⏰ Thời gian:</span>
                          <br />
                          {formatDate(violation.violationTime)}
                        </Text>
                        <Text style={detailItem}>
                          <span style={detailLabel}>📍 Địa điểm:</span>
                          <br />
                          {violation.violationLocation}
                        </Text>
                        <Text style={detailItem}>
                          <span style={detailLabel}>❌ Hành vi:</span>
                          <br />
                          {violation.violationBehavior}
                        </Text>
                        <Text style={detailItem}>
                          <span style={detailLabel}>📋 Trạng thái:</span>
                          <br />
                          <span style={statusStyle(violation.status)}>
                            {violation.status}
                          </span>
                        </Text>
                      </Column>
                    </Row>
                  </div>
                ))}
              </Section>
            ) : (
              <Section style={noViolation}>
                <Text style={noViolationText}>
                  ✅ Không có vi phạm mới trong tuần này.
                </Text>
              </Section>
            )}

            {/* Footer Section */}
            <Section style={footerSection}>
              <Text style={footerText}>
                Trân trọng,<br />
                <span style={footerBrand}>Hệ thống tra cứu vi phạm giao thông</span>
              </Text>
              <Text style={disclaimer}>
                Email này được gửi tự động. Vui lòng không trả lời email này.
              </Text>
            </Section>

            <Text style={{ fontSize: '12px', color: '#6b7280', marginTop: '32px' }}>
              Để hủy đăng ký nhận thông báo, vui lòng <a 
                href={`${process.env.NEXT_PUBLIC_APP_URL}/unsubscribe?hash=${generateUnsubscribeHash(subscriberEmail, plateNumber)}`}
                style={{ color: '#2563eb', textDecoration: 'underline' }}
              >
                nhấn vào đây
              </a>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const statusStyle = (status: string) => ({
  color: status.includes('Chưa xử lý') ? '#dc2626' : '#059669',
  fontWeight: 600,
});

const main = {
  backgroundColor: '#f3f4f6',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
};

const container = {
  margin: '40px auto',
  padding: '20px 0 48px',
  maxWidth: '600px',
};

const header = {
  backgroundColor: '#1d4ed8',
  borderRadius: '8px 8px 0 0',
  padding: '32px 20px',
  textAlign: 'center' as const,
};

const title = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: '600',
  margin: '0',
  padding: '0',
};

const content = {
  backgroundColor: '#ffffff',
  borderRadius: '0 0 8px 8px',
  padding: '32px',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
};

const greeting = {
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
  color: '#374151',
};

const summary = {
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 24px',
  color: '#374151',
};

const highlight = {
  color: '#1d4ed8',
  fontWeight: '600',
};

const violationsContainer = {
  margin: '24px 0',
};

const violationCard = {
  backgroundColor: '#f9fafb',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  marginBottom: '16px',
  overflow: 'hidden',
};

const violationHeader = {
  backgroundColor: '#1d4ed8',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  padding: '12px 16px',
  margin: '0',
};

const violationDetails = {
  padding: '16px',
};

const detailItem = {
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0 0 12px',
  color: '#374151',
};

const detailLabel = {
  fontWeight: '600',
  color: '#4b5563',
};

const noViolation = {
  backgroundColor: '#ecfdf5',
  borderRadius: '8px',
  padding: '24px',
  textAlign: 'center' as const,
  margin: '24px 0',
};

const noViolationText = {
  color: '#059669',
  fontSize: '16px',
  fontWeight: '500',
  margin: '0',
};

const footerSection = {
  borderTop: '1px solid #e5e7eb',
  marginTop: '32px',
  paddingTop: '32px',
};

const footerText = {
  fontSize: '14px',
  lineHeight: '24px',
  margin: '0 0 16px',
  color: '#4b5563',
};

const footerBrand = {
  color: '#1d4ed8',
  fontWeight: '600',
};

const disclaimer = {
  fontSize: '12px',
  color: '#6b7280',
  fontStyle: 'italic',
  margin: '0',
}; 