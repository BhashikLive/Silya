const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;
const hostname = 'localhost';

// MIME types for different file extensions
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.json': 'application/json',
    '.txt': 'text/plain'
};

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    
    // If requesting root, serve index.html
    if (filePath === './') {
        filePath = './index.html';
    }
    
    // If no extension, assume .html
    if (path.extname(filePath) === '') {
        filePath += '.html';
    }
    
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeType = mimeTypes[extname] || 'application/octet-stream';
    
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // File not found - serve 404
                fs.readFile('./404.html', (error, content) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(content || '<h1>404 - Page Not Found</h1><p>The requested page could not be found.</p>', 'utf-8');
                });
            } else {
                // Server error
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`, 'utf-8');
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': mimeType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, hostname, () => {
    console.log('🎉 Silya.in Website Server Started!');
    console.log('======================================');
    console.log(`🌐 Server running at: http://${hostname}:${PORT}/`);
    console.log('📱 Website URL: http://localhost:3001');
    console.log('======================================');
    console.log('✨ Your Marathi Kids Fashion website is now live!');
    console.log('📁 Serving files from:', __dirname);
    console.log('⏹️  Press Ctrl+C to stop the server');
    console.log('');
    
    // Try to open browser automatically
    const { exec } = require('child_process');
    const url = `http://${hostname}:${PORT}`;
    
    // Windows command to open browser
    exec(`start ${url}`, (error) => {
        if (error) {
            console.log('💡 Manual: Open your browser and go to http://localhost:3001');
        } else {
            console.log('🚀 Opening website in your default browser...');
        }
    });
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n👋 Shutting down Silya.in server...');
    console.log('✅ Server stopped successfully!');
    process.exit(0);
});