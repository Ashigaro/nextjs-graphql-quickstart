#  Next.js GraphQL Quickstart - Docker Image

Docker image آماده برای اجرای سریع پروژه Next.js + GraphQL + Prisma

#  دانلود و اجرا سریع

# روش ۱: با Docker Compose (پیشنهادی)

۱. فایل `docker-compose.yml` را بسازید:
```yaml
version: '3.8'

services:
  app:
    image: ghcr.io/ashigaro/nextjs-graphql-quickstart:latest
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://postgres:postgres@db:5432/mydb
    depends_on:
      - db

  db:
    image: postgres:16-alpine
    environment:
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=mydb
    volumes:
      - db-data:/var/lib/postgresql/data

volumes:
  db-data:
```

۲. اجرا کنید:
```bash
docker-compose up -d
```

۳. باز کنید: http://localhost:3000

---

# روش ۲: اجرای ساده (بدون دیتابیس)
```bash
docker pull ghcr.io/ashigaro/nextjs-graphql-quickstart:latest
docker run -p 3000:3000 ghcr.io/ashigaro/nextjs-graphql-quickstart:latest
```

---

#  تکنولوژی‌ها

 Next.js 15
 GraphQL (Apollo Client + GraphQL Yoga)
 Prisma ORM
 PostgreSQL
 TypeScript
 Tailwind CSS

---

# اطلاعات Image

- **حجم:** ~300MB
- **Base Image:** node:20-alpine -> (Node.js Docker project)
- **Port:** 3000
- **Registry:** GitHub Container Registry

---

#  دستورات مفید
```bash
# مشاهده لاگ‌ها
docker-compose logs -f app

# متوقف کردن
docker-compose down

# راه‌اندازی مجدد
docker-compose restart

# حذف کامل (با دیتا)
docker-compose down -v
```

---

# متغیرهای محیطی

| متغیر | پیش‌فرض | توضیح |
|-------|---------|-------|
| `DATABASE_URL` | - | آدرس اتصال PostgreSQL |
| `PORT` | 3000 | پورت اپلیکیشن |
| `NODE_ENV` | production | محیط اجرا |

---

# نیازمندی‌ها

Docker Engine 20.10+
Docker Compose 2.0+


---

# عیب‌یابی

# خطا: Cannot connect to database
```bash
docker-compose ps
docker-compose restart db
```

# خطا: Port already in use

در `docker-compose.yml` پورت را تغییر دهید:
```yaml
ports:
  - "8080:3000"
```

---

## لینک به Package

Docker Image: [ghcr.io/ashigaro/nextjs-graphql-quickstart](https://github.com/Ashigaro/nextjs-graphql-quickstart/pkgs/container/nextjs-graphql-quickstart)

---


**Ashigaro**
- GitHub: [@Ashigaro](https://github.com/Ashigaro)

---
