'use client';
export default function RootPage() {
  return (
    <main style={{ 
      backgroundColor: '#000', 
      color: '#D4AF37', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontFamily: 'monospace' 
    }}>
      <h1 style={{ fontSize: '60px', letterSpacing: '20px' }}>V I A  5 1</h1>
      <p style={{ color: '#666', letterSpacing: '5px' }}>EL ORIGEN - NODO ROOT</p>
      <div style={{ marginTop: '50px', border: '1px solid #D4AF37', padding: '20px', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>OWNER MASTER 9A</p>
        <p style={{ color: '#999', marginTop: '10px' }}>FREDY HECTOR BAZALAR GRIMALDO</p>
      </div>
    </main>
  );
}