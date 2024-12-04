# QR Code Generator with URL Logging

This project is a simple Node.js application that generates a QR code from a user-provided URL and saves it as an image file. Additionally, the URL is logged into a text file for record-keeping.

## Features
- Generate a QR code for any URL.
- Save the QR code as a `.png` file with a user-specified name.
- Log the URL into a text file (`URL.txt`) for future reference.

## Technologies Used
- **Node.js**: The runtime environment for the application.
- **Inquirer**: A package to handle interactive user input.
- **qr-image**: A library to generate QR codes.
- **fs**: Node.js's native file system module for writing and appending files.

## Installation
1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/qr-code-generator.git
    cd qr-code-generator
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Run the Application**:
    ```bash
    node index.js
    ```

## Usage
1. Run the application using `node index.js`.
2. Enter the URL for which you want to generate a QR code when prompted.
3. Provide a name for the QR code image file.
4. The QR code will be saved as a `.png` file in the project directory, and the URL will be appended to `URL.txt`.

## Example
### Input:
- URL: `https://example.com`
- QR Image Name: `example_qr`

### Output:
- **QR Code File**: `example_qr.png` (in the project directory)
- **Logged URL**: `https://example.com` (appended to `URL.txt`)

## Error Handling
- The application checks for invalid filename characters and replaces them with underscores (`_`).
- If a prompt fails to render (e.g., unsupported terminal), the application notifies the user.

## Dependencies
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [qr-image](https://www.npmjs.com/package/qr-image)
- [Node.js fs module](https://nodejs.org/api/fs.html)
- 
---
