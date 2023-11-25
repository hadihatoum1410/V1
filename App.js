


### React Native Frontend:

```jsx
// App.js

import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const App = () => {
  const [qrCode, setQRCode] = useState(null);

  useEffect(() => {
    // Fetch a unique QR code when the app loads
    fetch('https://your-backend-url/backend.php?action=generateQR')
      .then(response => response.json())
      .then(data => setQRCode(data.qrCode))
      .catch(error => console.error('Error fetching QR code:', error));
  }, []);

  const handleQRScanned = () => {
    // Redirect to consent page and initiate data collection
    // (You would handle navigation to the consent page here)
    Alert.alert('QR Code Scanned', 'Redirect to consent page');
  };

  return (
    <View>
      {qrCode ? (
        <>
          <Text>Scan the QR Code to start data collection</Text>
          <QRCodeScanner onRead={handleQRScanned} />
        </>
      ) : (
        <Text>Loading QR Code...</Text>
      )}
    </View>
  );
};

export default App;
```




