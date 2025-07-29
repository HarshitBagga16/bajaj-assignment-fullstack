# Bajaj Assignment - REST API

A simple REST API that processes arrays and returns categorized data.

## 🚀 Features

- Accepts POST requests at `/bfhl` endpoint
- Processes arrays containing numbers, alphabets, and special characters
- Separates even/odd numbers, alphabets, and special characters
- Calculates sum of all numbers
- Creates special concatenated string with alternating caps
- Returns structured JSON response

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd bajaj-assignment
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with:
```
USER_ID=yourname_01012024
EMAIL=youremail@example.com
ROLL_NUMBER=your_roll_number
```

4. Start the server:
```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

## 🌐 API Endpoints

### POST /bfhl

Processes an array and returns categorized data.

**Request Body:**
```json
{
  "data": ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "yourname_01012024",
  "email": "youremail@example.com",
  "roll_number": "your_roll_number",
  "odd_numbers": ["5"],
  "even_numbers": ["2", "4", "92"],
  "alphabets": ["A", "Y", "B"],
  "special_characters": ["&", "-", "*"],
  "sum": "103",
  "concat_string": "ByA"
}
```

### GET /

Returns API information and sample input.

## 🧪 Testing

You can test the API using:

1. **cURL:**
```bash
curl -X POST http://localhost:5000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]}'
```

2. **Postman:**
- Method: POST
- URL: `http://localhost:5000/bfhl`
- Headers: `Content-Type: application/json`
- Body: Raw JSON with the sample data

3. **Browser/Thunder Client:**
- Use the GET endpoint to see API info
- Use POST endpoint with JSON body

## 📁 Project Structure

```
project/
├── controllers/
│   └── bfhlController.js    # Request handling logic
├── routes/
│   └── bfhlRoute.js         # Route definitions
├── utils/
│   └── helpers.js           # Helper functions
├── .env                     # Environment variables
├── index.js                 # Main server file
├── package.json             # Dependencies
└── README.md               # Documentation
```

## 🚀 Deployment

### Render
1. Connect your GitHub repository to Render
2. Create a new Web Service
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables in Render dashboard

### Railway
1. Connect your GitHub repository to Railway
2. Deploy automatically
3. Add environment variables in Railway dashboard

### Cyclic
1. Connect your GitHub repository to Cyclic
2. Deploy automatically
3. Add environment variables in Cyclic dashboard

## ✅ Requirements Met

- ✅ POST endpoint at `/bfhl`
- ✅ Accepts array input
- ✅ Separates even/odd numbers
- ✅ Extracts alphabets (uppercase)
- ✅ Identifies special characters
- ✅ Calculates sum of numbers
- ✅ Creates alternating caps string
- ✅ Returns all numbers as strings
- ✅ Proper error handling
- ✅ Environment variables for user details
- ✅ Clean, simple code structure

## 🔧 Error Handling

The API returns proper error messages for:
- Invalid input (non-array data)
- Missing data field
- Server errors

Error response format:
```json
{
  "is_success": false,
  "message": "Error description"
}
```

## 📝 Notes

- All numbers in response are returned as strings
- Alphabets are converted to uppercase
- Special string uses alternating caps starting with capital
- Server runs on port 3000 by default (configurable via PORT env var) 