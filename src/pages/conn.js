import FTPClient from 'basic-ftp'

const client = new FTPClient()
client.ftp.verbose = true

client.access({
  host: '68.65.123.236',
  user: 'hashbrown@tulver.com',
  password: 'EdR79%8ak!b3',
  secure: false
}).then(() => {
  console.log('Connected to FTP server')
  // Perform FTP actions here
}).catch((err) => {
  console.log('Failed to connect to FTP server', err)
})
