# 📞 Contact Book - Full Stack Application

A modern, responsive Contact Management System built with Node.js, Express.js, MongoDB, and vanilla JavaScript. This full-stack application demonstrates CRUD operations, RESTful API design, and real-time data persistence.

![Contact Book Demo](https://img.shields.io/badge/Status-Active-green) ![Node.js](https://img.shields.io/badge/Node.js-18+-green) ![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green) ![Express](https://img.shields.io/badge/Express.js-4.19.2-blue)

## 🚀 Features

- ✅ **Create Contacts** - Add new contacts with name, phone, email, and date of birth
- ✅ **View Contacts** - Display all contacts in a responsive table format
- ✅ **Data Persistence** - Cloud-based MongoDB storage with automatic timestamps
- ✅ **Responsive Design** - Mobile-first UI with Tailwind CSS
- ✅ **Real-time Updates** - Instant UI updates after data operations
- ✅ **Error Handling** - Comprehensive client and server-side error management
- ✅ **RESTful API** - Clean API endpoints following REST principles

## 🏗️ Tech Stack

### Frontend
- **HTML5** - Semantic markup structure
- **CSS3** - Styling with Tailwind CSS framework
- **JavaScript ES6+** - Modern vanilla JavaScript with Fetch API

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **Mongoose** - MongoDB object modeling for Node.js

### Database
- **MongoDB Atlas** - Cloud-hosted NoSQL database
- **Automatic Indexing** - Optimized query performance

## 📁 Project Structure

```
contact-book-fullstack/
├── server.js              # Express server with API routes
├── index.html             # Frontend interface
├── package.json           # Dependencies and project config
├── start-servers.bat      # Development startup script
├── .gitignore            # Git ignore rules
└── README.md             # Project documentation
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (Node Package Manager)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/Shubh1hulk/contact-book-fullstack.git
cd contact-book-fullstack
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Database Setup
- The application uses MongoDB Atlas (cloud database)
- Connection string is pre-configured in `server.js`
- No additional database setup required

### 4. Start the Application

#### Option A: Manual Start
```bash
# Terminal 1: Start Backend Server
node server.js

# Terminal 2: Start Frontend Server
python -m http.server 3000
```

#### Option B: Automated Start (Windows)
```bash
# Double-click or run:
start-servers.bat
```

### 5. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5002/api/contacts

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/contacts` | Retrieve all contacts |
| `POST` | `/api/contacts` | Create a new contact |

### Example API Usage

#### Get All Contacts
```javascript
fetch('http://localhost:5002/api/contacts')
  .then(response => response.json())
  .then(data => console.log(data));
```

#### Create New Contact
```javascript
fetch('http://localhost:5002/api/contacts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    phone: '+1234567890',
    email: 'john@example.com',
    dob: '1990-01-01'
  })
});
```

## 📊 Database Schema

```javascript
{
  _id: ObjectId,
  name: String (required),
  phone: String (required),
  email: String (required),
  dob: String (required),
  createdAt: Date (auto-generated)
}
```

## 🎨 UI Screenshots

### Desktop View
- Clean, modern interface with form and table layout
- Responsive design adapts to different screen sizes

### Mobile View
- Optimized for mobile devices
- Touch-friendly interface elements

## 🔒 Environment Variables

The application currently uses hardcoded MongoDB connection string. For production deployment, consider using environment variables:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5002
```

## 🚀 Deployment

### Local Development
- Backend runs on port 5002
- Frontend served on port 3000
- MongoDB Atlas handles database hosting

### Production Deployment Options
- **Heroku** - Easy Node.js deployment
- **Vercel** - For frontend hosting
- **Netlify** - Static site hosting
- **AWS/Azure** - Cloud platform deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] Update/Edit contact functionality
- [ ] Delete contact feature
- [ ] Search and filter capabilities
- [ ] User authentication and authorization
- [ ] Contact categories/groups
- [ ] Import/Export functionality
- [ ] Profile pictures for contacts
- [ ] Advanced validation
- [ ] Pagination for large datasets

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Dhananjay Pandey**
- GitHub: [@Shubh1hulk](https://github.com/Shubh1hulk)
- Project: [Contact Book Full Stack](https://github.com/Shubh1hulk/contact-book-fullstack)

## 🙏 Acknowledgments

- MongoDB Atlas for cloud database hosting
- Tailwind CSS for responsive styling
- Express.js community for excellent documentation
- Node.js for powerful backend runtime

---

⭐ If you found this project helpful, please give it a star on GitHub!
