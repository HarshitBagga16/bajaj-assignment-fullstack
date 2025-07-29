# Deployment Guide

This guide will help you deploy your Bajaj Assignment API to various hosting platforms.

## 🚀 Quick Deployment Options

### Option 1: Render (Recommended for Beginners)

1. **Create a GitHub Repository**
   - Push your code to GitHub
   - Make sure all files are committed

2. **Deploy on Render**
   - Go to [render.com](https://render.com)
   - Sign up/Login with GitHub
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: `bajaj-assignment-api`
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Environment**: Node
   - Add Environment Variables:
     - `USER_ID`: `yourname_01012024`
     - `EMAIL`: `youremail@example.com`
     - `ROLL_NUMBER`: `your_roll_number`
   - Click "Create Web Service"

3. **Get Your Live URL**
   - Render will provide a URL like: `https://your-app-name.onrender.com`
   - Your API endpoint will be: `https://your-app-name.onrender.com/bfhl`

### Option 2: Railway

1. **Deploy on Railway**
   - Go to [railway.app](https://railway.app)
   - Sign up/Login with GitHub
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Add Environment Variables in the Variables tab
   - Railway will auto-deploy

### Option 3: Cyclic

1. **Deploy on Cyclic**
   - Go to [cyclic.sh](https://cyclic.sh)
   - Sign up/Login with GitHub
   - Click "Link Your Own" → Select your repository
   - Add Environment Variables
   - Deploy automatically

## 🔧 Environment Variables Setup

Make sure to set these environment variables in your hosting platform:

```bash
USER_ID=yourname_01012024
EMAIL=youremail@example.com
ROLL_NUMBER=your_roll_number
```

## 🧪 Testing Your Deployed API

Once deployed, test your API with:

```bash
curl -X POST https://your-app-url.com/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]}'
```

Or use Postman:
- **Method**: POST
- **URL**: `https://your-app-url.com/bfhl`
- **Headers**: `Content-Type: application/json`
- **Body**: 
```json
{
  "data": ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
}
```

## ✅ Expected Response

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

## 🐛 Troubleshooting

### Common Issues:

1. **Build Fails**
   - Check if `package.json` is in the root directory
   - Ensure all dependencies are listed in `package.json`

2. **Environment Variables Not Working**
   - Double-check variable names in hosting platform
   - Make sure they match exactly with what's in your code

3. **API Returns 404**
   - Verify the deployment URL is correct
   - Check if the server started successfully

4. **CORS Issues**
   - The API is configured to accept requests from any origin
   - If issues persist, check hosting platform settings

## 📞 Support

If you encounter any issues:
1. Check the deployment logs in your hosting platform
2. Verify all files are properly committed to GitHub
3. Ensure environment variables are set correctly
4. Test locally first with `npm start`

## 🎯 Interview Tips

When presenting your API:
1. **Show the working URL** - Demonstrate it's live
2. **Test with sample data** - Use the provided test case
3. **Explain the logic** - How you separated numbers, alphabets, etc.
4. **Show error handling** - Test with invalid input
5. **Discuss deployment** - Which platform you chose and why

Good luck with your interview! 🚀 
