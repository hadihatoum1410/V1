### PHP Backend:

```php
<?php
// backend.php

header('Content-Type: application/json');

// Endpoint to generate a unique QR code
if ($_GET['action'] == 'generateQR') {
    $uniqueCode = uniqid();
    echo json_encode(['qrCode' => $uniqueCode]);
}

// Endpoint to store captured data
else if ($_GET['action'] == 'storeData') {
    $data = json_decode(file_get_contents('php://input'), true);

    // Implement data storage logic (consider secure storage practices)
    // For simplicity, let's just print the received data
    echo json_encode(['message' => 'Data stored successfully']);
}
?>
```
