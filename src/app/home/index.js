import { Button, Alert } from 'antd';

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Bienvenue dans mon projet Next.js avec Ant Design!</h1>
      
      <Button type="primary">Un bouton Ant Design</Button>
      
      <div style={{ marginTop: '20px' }}>
        <Alert message="Ceci est une alerte Ant Design" type="info" />
      </div>
    </div>
  );
}

