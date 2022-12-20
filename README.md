<h1 align="center">SocialNet</h1>

<h3 align="center">
  This repository is the frontend of the social-net project with Next.JS
</h3>

## Technologies

#### Principals

- [x] NextJS
- [x] React
- [x] Redux

#### Database

- [x] MongoDB
- [x] Prisma
- [x] Firebase

#### Other Libraries

- [x] Axios
- [x] Formik
- [x] React Icons
- [x] React Markdown
- [x] Styled Components
- [x] Tailwind
- [x] Tailwind Typography
- [ ] Framer Motion

## Getting Started

First, rebuild node_modules:

```bash
npm install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Set enviroment variables

#### .env.local

```
NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
STORAGE_BUCKET=
MESSSAGING_SENDER_ID=
APP_ID=
MEASUREMENT_ID=
```

#### .env

```
DATABASE_URL=
```

### Test accounts

```
email: batman@mail.com
password: 123456
```
