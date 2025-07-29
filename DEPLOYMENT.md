# 🚀 Deployment Guide (Vercel Only)

This guide helps you deploy your Bajaj Assignment API to [Vercel](https://vercel.com).

---

## 📁 Project Structure

Make sure your backend code has the following structure:

```
📦bajaj-assignment
 ┣ 📂controller
 ┃ ┗ 📄bfhl.controller.js
 ┣ 📂routes
 ┃ ┗ 📄bfhl.routes.js
 ┣ 📂utils
 ┃ ┗ 📄processor.js
 ┣ 📄index.js
 ┣ 📄.env
 ┣ 📄.vercelignore
 ┣ 📄vercel.json
 ┣ 📄package.json
 ┗ 📄README.md
```

---

## 🔧 Step-by-Step Vercel Deployment

### 1. ✅ Pre-Requisites
- Install [Vercel CLI](https://vercel.com/docs/cli) (optional)
- Node.js project with `npm start` command
- `.env` file with your variables

### 2. 🛠️ Push Your Project to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/bajaj-assignment.git
git push -u origin main
```

---

### 3. 🚀 Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub and click "New Project"
3. Import your GitHub repository
4. During configuration:
   - **Framework Preset**: `Other`
   - **Build Command**: `npm install`
   - **Output Directory**: `.` (root)
   - **Install Command**: `npm install`
   - **Start Command**: `npm start`
5. Set Environment Variables:
   - `USER_ID` = `harshit_bagga_31032004`
   - `EMAIL` = `harshit1634.be22@chitkara.edu.in`
   - `ROLL_NUMBER` = `2210991634`
6. Click **Deploy**

---

## 🧪 Test Your Deployed API

Once deployed, Vercel will give you a URL like:

```
https://bajaj-assignment.vercel.app
```

Test with:

```bash
curl -X POST https://bajaj-assignment.vercel.app/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]}'
```

---

## ✅ Sample Response

```json
{
  "is_success": true,
  "user_id": "harshit_bagga_31032004",
  "email": "harshit1634.be22@chitkara.edu.in",
  "roll_number": "2210991634",
  "odd_numbers": ["5"],
  "even_numbers": ["2", "4", "92"],
  "alphabets": ["A", "Y", "B"],
  "special_characters": ["&", "-", "*"],
  "sum": "103",
  "concat_string": "ByA"
}
```

---

## 🐛 Troubleshooting

- **500 Error**: Check `vercel logs` in dashboard
- **Env variables not loaded**: Recheck spelling & Vercel dashboard values
- **Wrong endpoint**: Confirm if route is correctly defined (`/bfhl`)
- **API not working**: Use Postman or cURL to verify

---

## 🎯 Interview Checklist

- ✅ Working live URL
- ✅ API accepts JSON array and returns correct format
- ✅ Valid error handling
- ✅ Deployed using Vercel
- ✅ Clean folder structure

---

**Good luck! You got this 🚀**
