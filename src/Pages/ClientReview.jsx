import React, { useState, useEffect } from 'react';
import { Card, Table, Typography, Button, Space, message, Layout, Row, Col, Image } from 'antd';
import { auth, db } from '../config/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import '../Design/ClientLogin.css'; 

const { Title, Text, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;

const ClientReview = () => {
  const [clientData, setClientData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          message.error('No user is logged in');
          setLoading(false);
          return;
        }

        const clientsRef = collection(db, 'Journalteam_Details');
        const q = query(clientsRef, where('email', '==', user.email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const clientDoc = querySnapshot.docs[0];
          setClientData({
            id: clientDoc.id,
            ...clientDoc.data()
          });
        } else {
          message.error('Client record not found in Journalteam_Details');
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        message.error('Error loading client data');
      } finally {
        setLoading(false);
      }
    };

    fetchClientData();
  }, []);

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '20%' }}><Title level={3}>Loading...</Title></div>;
  }

  if (!clientData) {
    return (
      <div style={{ padding: 24, textAlign: 'center' }}>
        <Title level={3}>No client data found</Title>
        <Paragraph>Please ensure your email is registered or contact support for assistance.</Paragraph>
      </div>
    );
  }

  return (
    <Layout className="client-review-layout" style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Header style={{ backgroundColor: '#0B3470', display: 'flex', alignItems: 'center' }}>
      
        <Title level={3} style={{ color: 'white', marginLeft: 16 }}>Rooks Research Consultancy</Title>
      </Header>

      <Content style={{ padding: '40px 80px' }}>
        <Card className="dashboard-card" bordered={false} style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <Row justify="center" style={{ marginBottom: 24 }}>
            <Col span={24} style={{ textAlign: 'center' }}>
              <Title level={2}>Welcome, Valued Client</Title>
              <Paragraph style={{ fontSize: '16px', color: '#555' }}>
                We are truly honored to assist you in your publication journey. Your contributions to research are deeply respected and appreciated. Thank you for choosing us to be a part of your academic excellence.
              </Paragraph>
            </Col>
          </Row>

          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div className="client-info">
              <Title level={4}>Client Information</Title>
              <Text strong>Client ID: </Text><Text>{clientData.clientId}</Text><br />
              <Text strong>Email: </Text><Text>{clientData.email}</Text><br />
              <Text strong>Paper Name: </Text><Text>{clientData.paperName}</Text><br />
              <Text strong>Status: </Text><Text>{clientData.status}</Text><br />
              <Text strong>File: </Text>
              <Button type="link" href={clientData.file} target="_blank" rel="noopener noreferrer">
                Download File
              </Button>
            </div>
          </Space>
        </Card>
      </Content>

      <Footer style={{ textAlign: 'center', backgroundColor: '#0B3470', color: '#fff' }}>
        © {new Date().getFullYear()} Rooks Research Consultancy. All rights reserved.
      </Footer>
    </Layout>
  );
};

export default ClientReview;
